// javascript for create.html
const form = document.querySelector('form');

const createPost = async (e) => {
    e.preventDefault();
    const value1 = document.querySelector('input[name="comments"]:checked').value;
    comments = value1;
    const blog = {       

        date: form.date.value,
        author: form.author.value,
        blogtitle: form.blogtitle.value,
        blogbody: form.blogbody.value,
        thumbnailurl: form.image_url.value,  
        acceptcomments: form.comments.value,
        Comments:0+"K",
        likes: 0+"K"
    }
    await fetch('http://localhost:3000/blogs', {
        method: 'POST',
        body: JSON.stringify(blog),
        headers: { 'Content-Type': 'application/json' }
    });
    window.location.replace('/data/index.html');
}
form.addEventListener('submit', createPost);
