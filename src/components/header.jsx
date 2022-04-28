import React from "react";
import "../styles/header.css";

export default function Header() {
    return (
        <header>
            <a href="/news" id="support-text">
                Support Ukraine <span>NOW</span>
            </a>
            <button>
                <a href="/registration">Authentication</a>
            </button>
        </header>
    );
}
