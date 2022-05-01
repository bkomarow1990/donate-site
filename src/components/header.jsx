import React from "react";
import "../styles/header.css";

export default function Header() {
    return (
        <header>
            <a href="/main" id="support-text">
                Support Ukraine <span>NOW</span>
            </a>
            <button>
                <a href="/createTable">Create new table</a>
            </button>
            <a href="/account">
                <img
                    src="https://cdn-icons-png.flaticon.com/128/1946/1946429.png"
                    alt="user-image"
                />
            </a>
        </header>
    );
}
