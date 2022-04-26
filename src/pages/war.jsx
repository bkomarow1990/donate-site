import React from "react";
import "../styles/war.css";

export default function War() {
    return (
        <div className="container">
            <div className="about_war_block">
                <h1>
                    Stand with Ukraine <span>🆘</span>
                </h1>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube-nocookie.com/embed/-WQPykFk0eo"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
}
