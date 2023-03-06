const blogClient = document.getElementById("myallpostedblogs");
const renderBlog = async () => {
  let uri = "https://lazy-puce-fawn-yoke.cyclic.app/blogs";

  const res = await fetch(uri);
  const blogs = await res.json();

  let templatefull = " ";
  blogs.forEach((blog) => {
    templatefull += `
    
            <div class="big-card-latest-articles">
          <a href="/blog${blog.id}.html" class="latest-post-link">
            <h3 class="orange-big-text post-padding">
             ${blog.blogtitle}
            </h3>
          </a>
          <div class="post-content">
            <div class="projects__row-img-cont">
              <img
                src="${blog.thumbnailurl}"
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>

            <p class="descrption">
              ${blog.blogbody.slice(0, 200)}
              <a
                href="blog${blog.id}.html"
                class="orange-text"
                >
                READMORE</a
              >
            </p>
          </div>
        </div>  
    
    `;
  });
  blogClient.innerHTML += templatefull;
};
window.addEventListener("DOMContentLoaded", () => renderBlog());
