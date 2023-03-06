const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".details");
const deleteBtn = document.querySelector(".delete");

const renderDetails = async () => {
  const res = await fetch(`https://lazy-puce-fawn-yoke.cyclic.app/blogs/${id}`);
  const blog = await res.json();

  const template = `   
        <h1>${blog.blogtitle}</h1>
          <h3>  this blog was created by : 
  <span> ${blog.author} on ${blog.date}</span>
  </h3> 
               <p>${blog.blogbody}</p>
               <img src="${blog.thumbnailurl}">  
               <div class="projects__row-img-cont">
              <img
                src="${blog.thumbnailurl}"
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>           
             
             `;
  container.innerHTML += template;
};
deleteBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  await fetch(`https://lazy-puce-fawn-yoke.cyclic.app/blogs/${id}`, {
    method: "DELETE",
  });
  window.location.replace("/users/articles.html");
});
window.addEventListener("DOMContentLoaded", () => renderDetails());
