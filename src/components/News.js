import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch latest Sasquatch news from Google News API
    const fetchNews = async () => {
      const response = await axios.get(
        'https://cors-anywhere.herokuapp.com/https://news.google.com/rss/search?q=sasquatch',
        {
          headers: {
            'Access-Control-Allow-Origin': '*', // Allow CORS for development
          },
        }
      );

      const xml = await response.text;
      const parser = new DOMParser();
      const doc = parser.parseFromString(xml, 'text/xml');

      const newsItems = doc.querySelectorAll('channel > item');
      const newsData = [];

      for (const item of newsItems) {
        const title = item.querySelector('title').textContent;
        const description = item.querySelector('description').textContent;
        const link = item.querySelector('link').textContent;

        newsData.push({
          title,
          description,
          link,
        });
      }

      setNews(newsData);
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h2>Sasquatch News</h2>
      <ul>
        {news.map((article) => (
          <li key={article.title}>
            <h3>
              <a href={article.link} target="_blank" rel="noreferrer noopener">
                {article.title}
              </a>
            </h3>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
