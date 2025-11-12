import React from 'react';
import './BlogSection.css';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Digital Marketing for Small Biz",
      image: "/assets/image/27.jpg",
      link: "Post.html"
    },
    {
      title: "Marketing Terms You Need to Know",
      image: "/assets/image/29.jpg", 
      link: "Post.html"
    },
    {
      title: "Digital Guide for Beginner",
      image: "/assets/image/28.jpg",
      link: "Post.html"
    }
  ];

  return (
    <section className="blog-section">
      <div className="container">
        {/* Row 1 */}
        <div className="row header-row">
          {/* Col 1 */}
          <div data-aos="fade-up" className="header-col-left">
            <h2 className="section-title">Our Blog</h2>
          </div>
          {/* Col 2 */}
          <div data-aos="fade-up" data-aos-duration="1300" className="header-col-right">
            <p className="section-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <a href="Blog.html" className="view-blog-link">
              <span>View Blog</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Row 2 */}
        <div data-aos="fade-up" data-aos-duration="1400" className="blog-cards-row">
          {blogPosts.map((post, index) => (
            <a key={index} href={post.link} className="blog-card-col">
              <div className="blog-card">
                <img className="blog-card-image" src={post.image} alt={post.title} />
                <p className="blog-card-title">
                  {post.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;