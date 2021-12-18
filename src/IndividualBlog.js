import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import getBlogs from "./APIs/getBlogs";

function IndividualBlog(props) {

    const [blog, setBlog] = useState({});
    const location = useLocation();

    useEffect(() => {

        // since pathname = "/blogs/5"
        let blogId = location.pathname.split('/')[2];

        getBlogs(undefined, blogId).then(res => {
            const { data } = res;
            if (data)
                setBlog(data);
            else
                alert("Error occured with the API");
        });
    }, []);

    return <div>
        Showing IndividualBlog
    </div>
}

export default IndividualBlog;