export const data = {}
data.fetchPosts = async () => {
    try {
        const response = await fetch('../data/chars.json');
        const posts = await response.json();
        return posts;
        

    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}

export default data;