import axios from 'axios';
import { apiKey } from './auth';

export const fetchHeadlineNews = async () => {
    try {
        const res = await axios.get(urls.headline);
        return res.data.articles;
    } catch(e) {
        return e;
    }
};

const urls = {
    headline: `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`,
};