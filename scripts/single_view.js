import data from "./fetch_data.js";
import { singlePostTmpl } from "./templates.js";

const singleView = {};

singleView.init = async () => {
    console.log("singleView.init() called"); // Debugging

    const pagePost = document.querySelector('.single-post-container');
    if (!pagePost) return;

    try {
        const chars = await data.fetchPosts();
        const search = location.search;
        const charID = new URLSearchParams(search).get('id');
        const foundChar = chars.find((char) => char.id == charID);

        if (!foundChar) {
            pagePost.innerHTML = `<p>Character not found.</p>`;
            return;
        }

        // Prevent duplicate content
        pagePost.innerHTML = ""; 
        pagePost.insertAdjacentHTML('beforeend', singlePostTmpl(foundChar));

    } catch (error) {
        console.error("Error fetching character data:", error);
        pagePost.innerHTML = `<p>Failed to load character data. Please try again later.</p>`;
    }
};

export default singleView;
