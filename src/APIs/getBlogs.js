import axios from "axios";
import baseUrl from "./baseUrl";

const getBlogs = (token = undefined, id = undefined) => {
    return axios.get(baseUrl + (id ? `/blog/post/${id}` : "/blog/post"))
        .then(res => res)
        .catch(err => err);
}

export default getBlogs;