import React, { useEffect, useState } from "react";
import UserService from "../../services/userService.js";

export default function AccountPage() {
    const [email, setEmail] = useState("nothing");

    useEffect(() => {
        setEmail(UserService.getCurrentUserEmail());
    });

    return <div>Your email: {email}</div>;
}
