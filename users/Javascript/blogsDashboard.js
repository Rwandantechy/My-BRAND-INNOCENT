const blogsection = document.querySelector(".all-articles-section");
const renderBlog = async () => {
  let uri = "https://lazy-puce-fawn-yoke.cyclic.app/blogs";

  const res = await fetch(uri);
  const blogs = await res.json();

  let template = "   ";
  blogs.forEach((blog) => {
    template += `
        <div class="big-card-latest-articles">
          <a href="/users/articles.html" class="latest-post-link">
<h1 class="orange-big-text post-padding">
              ${blog.blogtitle}
            </h1>
   <div class="publisher-info-stats">
  Published by: ${blog.author} on: ${blog.date}</span>
            <div class="one-component">
              <img
                src="/images/comments.png"
                alt="comments icon"
                width="32"
                class="stats-icons"
                height="32"
              />
              <h2 class="orange-big-text">${blog.comments}</h2>
            </div>
            <div class="one-component">
              <img
                src="/images/likes.png"
                alt="likes icon"
                class="stats-icons"
                width="32"
                height="32"
              />
              <h2 class="orange-big-text">${blog.likes}</h2>
            </div>
          </div>
          <div class="post-content">           
      <p class="descrption">              
                ${blog.blogbody.slice(0, 100)}
        <span
                class="orange-text"
                >
                <a href="/index.html/#blogs/blog${blog.id}.html?id=${
      blog.id
    }">Read more...</a>           
                
                </span
              >
              <div class="operation-articles">
                <a href=""  id="updateSelectedBlog" class="big-green-text">                 
                  UPDATE
                </a>
                <a href="" onclick="deleteBlog(${blog.id})"
                class="big-red-text" >
                  DELETE
                </a>
              </div>
            </p>
            </div>
            </div>            
                  `;
  });
  blogsection.innerHTML += template;
};
const deleteBlog = async (id) => {
  const res = await fetch(
    `https://lazy-puce-fawn-yoke.cyclic.app/blogs/${blog.id}`,
    {
      method: "DELETE",
    }
  );
};

window.addEventListener("DOMContentLoaded", (e) => renderBlog());
