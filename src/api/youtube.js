import axios from 'axios';
const KEY = 'AIzaSyD4TJbQWhAsqSnNZ81cHoC_U1XjzEfN97o';
const CHANNEL_ID = 'UCptUiwBhO4MfBPiVolHEgkw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 50,
        key: KEY,
        channelId: CHANNEL_ID,
        type: 'video',
        order: 'date'
    }
})