import React, { Component } from "react";
import Arrow from "../resources/arrow.svg";

import {Link} from "react-router-dom";


export class LeftCard extends Component {
    render() {
        const article = this.props.article;
        return (
            <div className="flex">
                <a href={`/article/${article.id}`} className="ml-24 w-2/6 mt-20">
                    <img
                        className="image-pulse rounded-md border-2 border-black hover:border-white"
                        src={"http://localhost:1337" + article.image.url}
                        alt={article.image.url}
                    />
                </a>
                <p id="title" className="my-auto transform -translate-y-10 ml-20 text-white text-2xl ">
                    {article.title}
                    <a href={`/article/${article.id}`} className="flex mt-10 menu-pulse hover:no-underline">
                        <img src={Arrow} />
                        <p className="text-base ml-1 text-white">Read More</p>
                    </a>
                </p>
            </div>
        );
    }
}

export default LeftCard;