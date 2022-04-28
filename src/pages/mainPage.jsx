import React from "react";
import Header from "../components/header";
import "../styles/main/mainPage.css";

export default function MainPage() {
    return (
        <div className="container">
            <Header />
            <div className="wrapper">
                <h1>That's main page</h1>
            </div>
        </div>
    );
}
