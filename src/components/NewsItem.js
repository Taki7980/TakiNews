/* eslint-disable no-unused-vars */
import React, { Component } from 'react'



export class NewsItem extends Component {
    render() {
        let { title, author, description, imgUrl, newsUrl,date } = this.props;
        return (
            <>
                <div className="flex lg:h-[100%] lg:w-[100%] items-center mt-4 mb-4 sm:h-[60%] sm:w-[50%] ">
                    <div className="group lg:mx-auto sm:mx-auto
                     lg:w-96 sm:h-[60%] sm:w-[50%] overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
                        <div className="group-hover:animate-spin-slow invisible bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
                        <div className="relative rounded-[15px] bg-white p-6">
                            <div className="space-y-4">
                                <h4 className="text-2xl font-bold text-slate-800">{title}...</h4>
                                <img src={!imgUrl?"Error":imgUrl} alt="" />
                                <p className="text-lg font-semibold text-slate-800">{author}</p>
                                <p className="font-md text-slate-500">{description}....</p>
                                <p className="font-extralight text-slate-400">{new Date(date).toGMTString()}</p>
                            </div>
                            <div className="btn mt-6">
                                <a href={newsUrl} target="_blank" rel="noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem