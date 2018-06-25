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

export const fetchBitcoinNews = async () => {
    try {
        const res = await axios.get(urls.bitcoin);
        return res.data.articles;
    } catch(e) {
        alert(e)
        return e;
    }
};

export const fetchTechNews = async () => {
    try {
        const res = await axios.get(urls.tetch);
        return res.data.articles;
    } catch(e) {
        alert(e)
        return e;
    }
};

const urls = {
    headline: `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`,
    bitcoin: `https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=${apiKey}`,
    tetch: `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`
};