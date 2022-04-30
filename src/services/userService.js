import jwt_decode from "jwt-decode";

export default function getCurrentUserId() {
    var accessToken = localStorage.getItem("accessToken");
    var token = jwt_decode(accessToken);
    return token.Id;
}
