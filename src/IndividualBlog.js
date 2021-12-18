import React, { useEffect, useState } from "react";
import getBlogs from "./APIs/getBlogs";

function IndividualBlog(props) {

    const [blog, setBlog] = useState({});

    console.log('the props are', props);

    useEffect(() => {
        getBlogs(undefined, 1).then(res => {
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