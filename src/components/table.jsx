import React from "react";
import "../styles/main/table.css";

export default function Table(props) {
    return (
        <div className="container">
            <h2>
                <span>Name:</span>
                {props.name}
            </h2>
            <h2>
                <span>Goal:</span>
                {props.goal}
            </h2>
            <img src={props.image} id="table-img" alt="table-img" />
            <h2>
                <span>Describe:</span>
                {props.describe}
            </h2>
            <button>
                <a href="/share">Share</a>
            </button>
        </div>
    );
}
