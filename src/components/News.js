/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `TakiNews - ${this.props.category}`;
    }
    updateNews = async () => {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.API_KEY}&page=${this.state.page}&pageSize=${this.props.pageSize}}`
        this.setState({ loading: true })
        const response = await fetch(url);
        const data = await response.json()
        this.setState({
            articles: data.articles.concat(data.articles),
            totalResults: data.totalResults,
            loading: false,

        });
        this.props.setProgress(100);
    }
    async componentDidMount() {
        this.updateNews();
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.API_KEY}&page=${this.state.page}&pageSize=${this.props.pageSize}}`
        // this.setState({ loading: true })
        const response = await fetch(url);
        const data = await response.json()
        this.setState({
            articles: this.state.articles.concat(data.articles),
            totalResults: data.totalResults,
            loading: false
        })
    };

    render() {
        return (
            <>
                <div className="container w-[70%] m-auto">
                    <div className="box">
                        <h1 className="text-center text-3xl text-black mb-5 font-bold">TakiNews Top headlines on - {this.props.category}</h1>
                        {this.state.loading && <Spinner />}
                        <InfiniteScroll
                            dataLength={this.state.articles.length }
                            next={this.fetchMoreData}
                            hasMore={this.state.articles.length !== this.state.totalResults}
                            loader={<Spinner />}
                        >
                            <div className="container">
                                <div className="grid lg:grid-cols-2 lg:gap-7 items-center sm:grid sm:grid-cols-1 sm:gap-1">
                                    {this.state.articles && this.state.articles.map((element) => {
                                        return <div className="row" key={element.url}>
                                            <NewsItem title={element.title ? element.title.slice(0, 60) : ""} imgUrl={element.urlToImage} author={element.author} description={element.description ? element.description.slice(0, 60) : ""} newsUrl={element.url} date={element.publishedAt} />
                                        </div>
                                    })}
                                </div>
                            </div>
                        </InfiniteScroll>
                    </div>
                </div>
            </>
        )
    }
}

export default News