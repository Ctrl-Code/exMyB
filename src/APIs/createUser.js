import axios from "axios";
import baseUrl from "./baseUrl";

const createUser = (username, password, fn, ln, phone, city = undefined, state = undefined, country = undefined) => {
    return axios.post(baseUrl + "/blog/users/", {
        "user": {
            "username": username,
            "password": password,
        },
        "first_name": fn,
        "last_name": ln,
        "phone": phone,
        "user_type": "normal_user",
        "city": city,
        "state": state,
        "country": country,
    }
    )
        .then(res => res)
        .catch(err => {
            if (err?.response?.data?.msg)
                return err.response.data;
            else
                return {}
        })
}

export default createUser;