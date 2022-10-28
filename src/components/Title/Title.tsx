import './Title.css'
import React from "react";

interface Props {
    image?: string;
    number: number;
}

export default function Title({number, image}: Props) {
    if (number % 2 === 0) {
        return (
            <div className="title black-title">
                {image && <div style={{backgroundImage: `url(${image})`}} className="chess-piece"></div>}
            </div>
        );
    } else {
        return (
            <div className="title white-title">
                {image && <div style={{backgroundImage: `url(${image})`}} className="chess-piece"></div>}
            </div>
        );
    }
}