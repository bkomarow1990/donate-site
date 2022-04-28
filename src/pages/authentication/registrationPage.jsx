import React from "react";
import { useHistory } from "react-router-dom";
import { register } from "../../services/authentication";
import { AlertService } from "../../services/alertService";
import "../../styles/authentication.css";

export default function RegistrationPage() {
    let history = useHistory();

    const onFinish = (values) => {
        register(values, history);
    };

    const onFinishFailed = () => {
        AlertService.errorMessage(
            "Registration is blocked!",
            "First, correct all comments!"
        );
    };

    return (
        <>
            <form>
                <span>Enter your name</span>
                <input type="text" placeholder="Example: Vadym" />
                <span>Enter your surname</span>
                <input type="text" placeholder="Example: Chornyi" />
                <span>Enter your e-mail</span>
                <input type="email" placeholder="yourmail@mail.com" />
                <span>Enter your password</span>
                <input type="password" placeholder="123qwe1q2w3e" />
                <button type="submit">Register</button>
                <a href="/login" id="link">
                    If you have an account, let's login!
                </a>
            </form>
        </>
    );
}
