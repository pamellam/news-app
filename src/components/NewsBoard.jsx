import { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

/**
 * React functional component for rendering a news board with the latest news articles
 * @param {string} category - the news category to fetch articles for
 * @returns {JSX.Element} - the news board component
 */
const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  /**
   * Fetches the latest news articles for the specified category
   */
  const fetchArticles = () => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=&apiKey=${process.env.VITE_API_KEY}`)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  };

  /**
   * Effect hook that triggers the fetchArticles function when the category prop changes
   */
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