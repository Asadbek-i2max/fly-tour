import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import B1 from "../assets/images/blog/blog.jpg";
import B2 from "../assets/images/blog/blog2.jpg";
import B3 from "../assets/images/blog/blog3.jpg";

const Blogs = () => {
  const { t } = useTranslation();

  const blogsData = [
    { id: 1, title: t('Blog.BlogTitle') + '1', image: B1 },
    { id: 2, title: t('Blog.BlogTitle') + '2', image: B2 },
    { id: 3, title: t('Blog.BlogTitle') + "3", image: B3  }
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const totalPages = Math.ceil(blogsData.length / blogsPerPage);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogsData.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4 max-w-screen-lg">
      <h2 className="text-2xl font-bold text-center mb-6">{t("PageCard.Blogs")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentBlogs.map((blog) => (
          <div key={blog.id} className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <a href="https://theworldtravelguy.com/blog/" className="text-blue-500 mt-2 inline-block hover:underline">{t("Blog.Read more")}</a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            className={`mx-1 px-4 py-2 rounded-lg ${currentPage === index + 1 ? 'bg-orange-500' : 'bg-white hover:bg-gray-200'} text-black`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
