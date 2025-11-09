import React from 'react';

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
    <section className="our-blog custom-padding">
      <div className="container">
        {/* Row 1 */}
        <div className="row">
          {/* Col 1 */}
          <div data-aos="fade-up" className="col-md-6">
            <h2 className="section-title font-krona-one h2-text">Our Blog</h2>
          </div>
          {/* Col 2 */}
          <div data-aos="fade-up" data-aos-duration="1300" className="col-md-6 text-start">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <a href="Blog.html" className="view-blog-link button-text font-krona-one fw-light">
              <span className="me-2">View Blog</span>
              <i className="fa-solid fa-arrow-right" style={{color: '#c4fb6d'}}></i>
            </a>
          </div>
        </div>

        {/* Row 2 */}
        <div data-aos="fade-up" data-aos-duration="1400" className="row blog-cards mt-5">
          {blogPosts.map((post, index) => (
            <a key={index} href={post.link} className="col-lg-4 col-md-6 text-decoration-none">
              <div className="blog-card bg-primary-custom">
                <img className="img-hover" src={post.image} alt={post.title} />
                <p className="blog-card-title font-krona-one text-start h5-text">
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