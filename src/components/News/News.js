import React, { useEffect, useState } from 'react';
import axios from 'axios';

const News = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://news.google.com/search?q=(Sasquatch OR Bigfoot)&hl=en-US&gl=US&ceid=US&oe=UTF-8&sort=date`
        );

        const newsData = response.data.feed.entry;
        const filteredNews = newsData.filter((article) => {
          return article.title.toLowerCase().includes('sasquatch') || article.title.toLowerCase().includes('bigfoot');
        });

        setNewsArticles(filteredNews);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="sasquatch-news">
      <h1>Sasquatch and Bigfoot News Reports</h1>
      {newsArticles.length > 0 ? (
        <ul>
          {newsArticles.map((article) => (
            <li key={article.id}>
              <a href={article.link} target="_blank" rel="noreferrer">
                {article.title}
              </a>
              <p>{article.summary}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Sasquatch or Bigfoot news reports found.</p>
      )}
    </div>
  );
};

export default News;