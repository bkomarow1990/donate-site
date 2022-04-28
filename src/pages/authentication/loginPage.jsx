import React from "react";

export default function LoginPage() {
    return (
        <>
            <form>
                <span>Input your e-mail</span>
                <input type="email" placeholder="yourmail@mail.com" />
                <span>Input your password</span>
                <input type="password" placeholder="123qwe1q2w3e" />
                <button type="submit">Log In</button>
                <a href="/registration" id="link">
                    If you don't have an account, let's registration!
                </a>
            </form>
        </>
    );
}
