
const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPost();
    getPostIdParam();
}

const getPostIdParam = () => {
    const queryString = window.location.search;
    const urlParams =new URLSearchParams(queryString);
    return urlParams.get("id");
}

const getPost = () => {
    const postId = getPostIdParam();
    const url = `${API_URL}${postId}`
        fetch(url, {
            method: 'GET' 
        }).then((response)=>{
            return response.json();
        }).then((data)=>{
            buildPost(data);
        })
    // CODE GOES HERE
}

const buildPost = (data) => {
    const postDate = new Date(parseInt(data.added_date)).toDateString();
    const postImage = `${API_BASE_URL}uploads/${data.post_image}`;
    // HINT: Convert the date number to a Date string 
    document.querySelector("header").style.backgroundImage = `url(${postImage})`;
    document.getElementById("individual-post-title").innerText = data.title;
    document.getElementById("individual-post-date").innerText = `Published on ${postDate}`;
    document.getElementById("individual-post-content").innerText = data.content;
    
    console.log(data);
}

