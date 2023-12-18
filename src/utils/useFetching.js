import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/captions',
  params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'a75af92f6emsh85af13ba9fac022p163ddejsnac3b8df2db8d',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`https://youtube-v31.p.rapidapi.com/${url}`,
        options
    )
    return data;
}