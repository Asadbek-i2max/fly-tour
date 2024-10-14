import Navbar from "../components/Navbar";
import PageCard from "../components/PageCard";
import Blogs from "../components/Blog";
import Footer from "../components/Footer";


const Blog = () => {
    return (
        <>
        <Navbar />
        <PageCard cardTitle={"Blogs"}/>
        <Blogs />
        <Footer />
        </>
    )
}

export default Blog;