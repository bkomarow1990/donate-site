import React from "react";
import Header from "../components/header";
import Table from "../components/table";
import "../styles/main/mainPage.css";

export default function MainPage() {
    return (
        <div className="container">
            <Header />
            <div className="wrapper">
                <h1>That's main page</h1>
                <Table
                    name="Need armour"
                    goal="New armour"
                    image="https://collections.royalarmouries.org/media/emumedia/345/194/large_A5572_1.jpg"
                    describe="something"
                />
            </div>
        </div>
    );
}
