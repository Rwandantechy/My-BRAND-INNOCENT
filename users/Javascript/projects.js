const form = document.getElementById("form-create-article");
const createArticle = async (e) => {
  e.preventDefault();
  const value1 = document.querySelector('input[name="comments"]:checked').value;
  comments = value1;
  const blog = {
    date: form.date.value,
    author: form.author.value,
    blogtitle: form.blogtitle.value,
    blogbody: form.blogbody.value,
    thumbnailurl: form.thumbnailurl.value,
    acceptcomments: form.comments.value,
    comments: 100,
    likes: 100,
  };
  await fetch("https://lazy-puce-fawn-yoke.cyclic.app/blogs", {
    method: "POST",
    body: JSON.stringify(blog),
    headers: { "Content-Type": "application/json" },
  });
  window.location.replace("/users/articles.html");
};
form.addEventListener("submit", createArticle);
