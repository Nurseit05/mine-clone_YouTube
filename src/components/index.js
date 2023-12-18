export { default as Navbar } from './Navbar'
export { default as VideoDetail } from './VideoDetail'
export { default as SearchFeed } from './SearchFeed'
export { default as ChannelDetail } from './ChannelDetail'
export { default as Feed } from './Feed'
export { default as SearchBar } from './SearchBar'
export { default as Sidebar } from './Sidebar'
export { default as Videos } from './Videos'
export { default as VideoCard } from './VideoCard'
export { default as ChannelCard } from './ChannelCard'



const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    q: 'music',
    part: 'snippet,id',
    regionCode: 'US',
    maxResults: '50',
    order: 'date'
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
