/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, settotalResults] = useState(0)




    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.API_KEY}&page=${page}&pageSize=${props.pageSize}}`
        setLoading(true)
        const response = await fetch(url);
        const data = await response.json()
        setArticles(data.articles)
        settotalResults(data.totalResults)
        setLoading(false)
        props.setProgress(100);
    }
    useEffect(() => {
        document.title = `TakiNews - ${props.category}`;
        updateNews();
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.API_KEY}&page=${page + 1}&pageSize=${props.pageSize}}`
        setPage(page + 1)
        const response = await fetch(url);
        const data = await response.json()
        setArticles(data.articles.concat(data.articles))
        settotalResults(data.totalResults)
        setLoading(false)
    };

    return (
        <>
            <div className="container w-[70%] m-auto">
                <div className="box">
                    <h1 className="text-center text-3xl text-black mb-5 font-bold">TakiNews Top headlines on - {props.category}</h1>
                    {loading && <Spinner />}
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={<Spinner />}
                    >
                        <div className="container">
                            <div className="grid lg:grid-cols-2 lg:gap-7 items-center sm:grid sm:grid-cols-1 sm:gap-1">
                                {articles && articles.map((element) => {
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

News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}



export default News