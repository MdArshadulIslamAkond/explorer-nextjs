export const getAllPosts = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=15");
    const data = await response.json();
    return data;
}