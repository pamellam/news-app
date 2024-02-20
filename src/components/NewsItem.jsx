/* eslint-disable react/prop-types */
/**
 * NewsItem component
 * @param {string} title - The title of the news article
 * @param {string} description - The description of the news article
 * @param {string} src - The source of the news article image
 * @param {string} url - The URL of the news article
 * @returns {JSX.Element} The news item component
 */
import image from '../assets/news.png';
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 "
      style={{ maxWidth: '345px' }}
    >
      <img
        src={src ? src : image}
        style={{
          height: '200px',
          width: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        className="card-img-top"
        alt="News Image"
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : 'Custom desription here'}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
