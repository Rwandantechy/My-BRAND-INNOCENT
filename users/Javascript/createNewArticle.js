// javascript for create.html
const form = document.getElementById('form-create-article');
// const deletearticle = document.getElementById('delete');
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
        Comments:0,
        likes: 0
    }
    await fetch('http://localhost:3000/blogs', {
        method: 'POST',
        body: JSON.stringify(blog),
        headers: { 'Content-Type': 'application/json' }
    });
    window.location.replace('/users/articles.html');
}
form.addEventListener('submit', createArticle);
