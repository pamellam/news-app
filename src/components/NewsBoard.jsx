import { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
    import.meta.env.VITE_API_KEY
  }`;

  const fetchArticles = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  };

  useEffect(() => {
    fetchArticles();
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger"> News</span>
      </h2>
      <div className="justify-content-center">
        {articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
