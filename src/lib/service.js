import axios from 'axios';
async function getData(userId) {
    try {
        const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users/' + userId);
        const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + userId);
        console.log(users, posts);
    }
    catch (e) {
        console.error(e);
    }
}
export default getData;
