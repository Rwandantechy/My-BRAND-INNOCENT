const form = document.getElementById("form-create-project");
const createAProject = async (e) => {
  e.preventDefault();
  const blog = {
    date: new Date(),
    author: form.author.value,
    title: form.ptitle.value,
    body: form.projdescription.value,
    thumbnailurl: form.pictureproject.value,
    github_link:form.github_link.value,
    
  };
  await fetch("https://lazy-puce-fawn-yoke.cyclic.app/projects", {
    method: "POST",
    body: JSON.stringify(project),
    headers: { "Content-Type": "application/json" },
  });
  window.location.replace("/users/articles.html");
};
form.addEventListener("submit", createProject);
