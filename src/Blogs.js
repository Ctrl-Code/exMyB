import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getBlogs from "./APIs/getBlogs";

const ShowBlog = ({ data, onClick }) => <div style={{ border: "1px solid black", marginBottom: "5px", cursor: "pointer" }} onClick={onClick}>
    <div>TITLE: {data?.title || "-"}</div>
    <div>SLUG: {data?.slug || "-"}</div>
    <div>VIEWS: {data?.number_of_views || "-"}</div>
</div>

function Blogs(props) {

    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    // get blogs
    useEffect(() => {
        getBlogs().then(res => {
            let { data } = res;
            console.log('the response is', res.data);
            setBlogs(data);
        })
    }, [])

    const checkToken = () => {
        if (localStorage.getItem("token"))
            return true;
        else
            return false;
    }

    function showBlog(index) {

        // if user signed in => showBlog
        if (checkToken()) {
            navigate(`/blogs/${index}`);
        }

        else {
            alert("Please SignIn");
            navigate("/", {
                state: {
                    blogIndex: index,
                    redirect: true,
                }
            });
        }
    }

    return <div>
        {
            blogs.map((blog, index) => <ShowBlog key={blog?.id || index} data={blog} onClick={() => showBlog(index)} />)
        }
    </div>
}

export default Blogs;