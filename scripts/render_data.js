import data from "./fetch_data.js"; // Import data fetching function
import { charTmplGrid, charTmplList } from "./templates.js"; // Import template functions

const listBtn = document.querySelector('.listButton');
const gridBtn = document.querySelector('.gridButton');
const container = document.querySelector('.container');

const renderData = {};

renderData.init = async () => {
    try {
        const charData = await data.fetchPosts();

        // Initial Render (Default: Grid View)
        container.replaceChildren();
        charData.forEach(char => {
            container.insertAdjacentHTML('beforeend', charTmplGrid(char));
        });

        // Event Listeners
        gridBtn.addEventListener('click', () => {
            container.replaceChildren();
            charData.forEach(char => {
                container.insertAdjacentHTML('beforeend', charTmplGrid(char));
            });
        });

        listBtn.addEventListener('click', () => {
            container.replaceChildren();
            charData.forEach(char => {
                container.insertAdjacentHTML('beforeend', charTmplList(char));
            });
        });

    } catch (error) {
        console.error("Error fetching character data:", error);
        container.innerHTML = "<p>Failed to load data. Please try again later.</p>";
    }
};

export default renderData;
