import axios from "axios";
import baseUrl from "./baseUrl";

const getToken = (username, password) => {
    
    return axios.post(
        baseUrl + "/blog/api-token-auth/",
        {
            "username": username,
            "password": password,
        }
    )
        .then(res => res)
        .catch(err => err)
}

export default getToken;