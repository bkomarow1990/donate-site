import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/main/table.css";

export default function Table(props) {
    return (
        <div className="table-container">
            <div className="albums">
                <div className="album">
                    <img className="album__artwork" src={props.image} />
                    <div className="album__details">
                        <h2>{props.name}</h2>
                        <p className="album__artist">{props.price}</p>
                        <p className="album__desc">{props.describe}</p>
                        <button className="album__share">
                            <Link to={"/Table/" + props.id}>More</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
