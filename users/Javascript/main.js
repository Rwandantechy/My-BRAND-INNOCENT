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
                width="64"
                class="stats-icons"
                height="64"
              />
              <h2 class="orange-big-text">${blog.comments}</h2>
            </div>
            <div class="one-component">
              <img
                src="/images/likes.png"
                alt="likes icon"
                class="stats-icons"
                width="64"
                height="64"
              />
              <h2 class="orange-big-text">${blog.likes}</h2>
            </div>
          </div>
          <div class="post-content">           
      <p class="descrption">              
                ${blog.blogbody.slice(0, 500)}
        <span
                class="orange-text"
                >
                <a href="articles.html?id=${
                  blog.id
                }">Read more...</a>           
                
                </span
              >
              <div class="operation-articles">
                <a href="/users/updateArticle.html"
                  >
                  <h1 class="big-green-text"
                  >UPDATE</h1>
                </a>
                <a href="/users/delete-article.js"
                  ><h1  class="big-red-text">DELETE</h1>
                </a>
              </div>
            </p>
            </div>
            </div>
                  `;
  });
  blogsection.innerHTML += template;
};
window.addEventListener("DOMContentLoaded", () =>renderBlog());
