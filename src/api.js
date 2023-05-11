import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization:'Client-ID IGEwrCLc6SjyHnG-l1gMjHOFd295bRlfl4YwZMDMzko'
        },
        params: {
            query: term
        }
    })
    console.log(response)
    return response.data.results
}

export default searchImages;