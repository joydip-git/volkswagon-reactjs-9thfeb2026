async function fetchPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts/1'
    try {
        const response = await fetch(url)
        if (response.ok) {
            const post = await response.json()
            console.log(post);
        }
    } catch (error) {
        console.log(error);
    }
}
fetchPosts()
console.log('not being blocked');