import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
import "../../styles/main/tableInfo.css";

export default function TableInfo(props) {
    const { id } = useParams();
    return (
        <div className="table-info__container">
            <Header />
            <div className="table-info__wrapper">
                <h1>Table id: {id}</h1>
            </div>
        </div>
    );
}
