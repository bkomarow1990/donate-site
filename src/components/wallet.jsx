import React from "react";
import "../styles/wallet.css";
import AlertService from "../services/alertService";

export default function Wallet(props) {
    const handleCopy = () => {
        AlertService.successMessage("Success copied!");
    };

    return (
        <div class="card">
            <p>{props.name}</p>
            <span>{props.walletData}</span>
            <button onClick={handleCopy}>Copy</button>
        </div>
    );
}
