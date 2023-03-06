//total number of projects.
const totalprojects = document.getElementById("projectsnumber");
const renderProjects = async () => {
  const response = await fetch(
    "https://lazy-puce-fawn-yoke.cyclic.app/projects"
  );
  const projects = await response.json();
  totalprojects.innerHTML = `<h1 class="orange-big-text">${projects.length}</h1>`;
};
renderProjects();

const totalarticles = document.getElementById("articlesnumber");
const renderArticles = async () => {
  const response = await fetch("https://lazy-puce-fawn-yoke.cyclic.app/blogs");
  const articles = await response.json();

  totalarticles.innerHTML = `
     <h1 class="orange-big-text">${articles.length}</h1>
    `;
};

//number of users
const totalusers = document.getElementById("usersnumbers");
const renderUsers = async () => {
  const response = await fetch("https://lazy-puce-fawn-yoke.cyclic.app/users");
  const users = await response.json();
  totalusers.innerHTML = ` <h1 class="orange-big-text">${users.length}</h1>
    `;
};

// the total number of comments.
const totalcomments = document.getElementById("commentsnumber");
const renderComments = async () => {
  const response = await fetch(
    "https://lazy-puce-fawn-yoke.cyclic.app/messages"
  );
  const comments = await response.json();
  totalcomments.innerHTML = `
     <h1 class="orange-big-text">${comments.length}</h1>
    `;
};
renderUsers();

renderComments();
renderArticles();
