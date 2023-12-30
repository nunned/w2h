import './KushCard.css';
import PropTypes from 'prop-types';

const KushCard = ({ imageSrc, title, description }) => {
  return (
    <div className="kush-card">
      <div className="product-image-container">
        <img src={imageSrc} alt="Product" className="product-image" />
      </div>
      <div className="product-description-container">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
      </div>
    </div>
  );
};

KushCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default KushCard;
