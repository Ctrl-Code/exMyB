import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Blogs from "./Blogs";
import Login from "./Login";
import Signup from "./Signup";
import IndividualBlog from "./IndividualBlog";

function App() {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="blogs/:blogId" element={<IndividualBlog />} />

            </Routes>
        </Router>
    );
}

export default App;