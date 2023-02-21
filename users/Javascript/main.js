const container = document.querySelector('.all-articles-section');
// const searchForm = document.querySelector('.search');

const renderPosts = async (term) => {
    let uri = 'http://localhost:3000/blogs';
    // if (term) {
    //     uri += `&q=${term}`;
    // }
    const res = await fetch(uri);
    const blogs = await res.json();
    let template = '   ';
    blogs.forEach(blog=> {
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
        <span
                class="orange-text"
                >
                <a href="articles.html?id=${ blog.id }">Read more...</a>           
                
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
                  `
    })
    container.innerHTML += template;
}
// searchForm.addEventListener('submit', e => {
//     e.preventDefault();
//     renderPosts(searchForm.term.value.trim())
// })
window.addEventListener('DOMContentLoaded', () => renderPosts());