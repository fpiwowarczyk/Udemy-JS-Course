const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const postList = document.querySelector('ul');
const fetchButton = document.querySelector('#available-posts button');


function sendHttpRequest(method, url, data) {
    //const promise = new Promise((resolve, reject) => {
    // const xhr = new XMLHttpRequest();-------------------------- OLD XML api
    // xhr.setRequestHeader('Content-Type, 'application/json');
    //
    // xhr.open(method, url);
    //
    // xhr.responseType = 'json';
    //
    // xhr.onload = function () {
    //     if(xhr.status >= 200 && xhr.status < 300){
    //         resolve(xhr.response);
    //     } else {
    //         reject(new Error("Something went wrong!"));
    //     }
    //
    //
    // }
    //
    // xhr.onerror = function () {
    //     reject(new Error('Failed to send request!'));
    // }
    // xhr.send(JSON.stringify(data));
    //});
    //return promise;
    // ----------------------- NEW FETCH api
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            } else {
                return response.json().then(errData => {
                    console.log(errData);
                    throw new Error('Something went wrong - server-side.');
                });
            }
        })
        .catch(error => {
            console.log(error);
            throw new Error('Something went wrong!');
        });
}


async function fetchPosts() {
    try {
        const listOfPosts = await sendHttpRequest(
            'GET',
            'https://jsonplaceholder.typicode.com/posts'
        );
        const oldPosts = listElement.querySelectorAll('li');
        oldPosts.forEach(post => {
            post.remove();
        });
        for (const post of listOfPosts) {
            const postEl = document.importNode(postTemplate.content, true);
            postEl.querySelector('h2').textContent = post.title.toUpperCase();
            postEl.querySelector('p').textContent = post.body;
            postEl.querySelector('li').id = post.id;
            listElement.append(postEl);
        }
    } catch (error) {
        alert(error.message);
    }

}

async function createPost(title, content) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId
    };
    sendHttpRequest(
        'POST',
        'https://jsonplaceholder.typicode.com/posts', post)
}


fetchButton.addEventListener('click', fetchPosts);
form.addEventListener('submit', e => {
    e.preventDefault();
    const enteredTitle = e.currentTarget.querySelector('#title').value;
    const enteredContent = e.currentTarget.querySelector('#content').value;
    createPost(enteredTitle, enteredContent);
});

postList.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        const postID = e.target.closest('li').id;
        sendHttpRequest('DELETE', `https://jsonplaceholder.typicode.com/posts/${postID}`)
        document.getElementById(postID).remove();
    }
});

