const postListEL = document.querySelector('.post-list');

async function onSearchChange(event) {
const id = event.target.balue;
    const posts = await fetch(`https://jsonplaceholder.typicode.com/userId=${id}`)
    const postsData = await posts.json();
    postListEL.innerHTML = postsData.map(post => `
    <div class="post">
      <div class="post__title">
        ${post.title}
      </div>
      <p class="post__body">
        ${post.body}
      </p>
    </div>
    `).join('')
}

async function main() {
    const id = localStorage.getItem("id")
    const posts = await fetch(`https://jsonplaceholder.typicode.com/userId=${id}`)
    const postsData = await posts.json();

    postListEL.innerHTML = postsData.map(post => `
    <div class="post">
      <div class="post__title">
        ${post.title}
      </div>
      <p class="post__body">
        ${post.body}
      </p>
    </div>
    `).join('')
}

main();