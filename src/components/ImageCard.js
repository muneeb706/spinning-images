import React from "react";
import PropTypes from "prop-types";

export default function ImageCard({ src, alt, onClick }) {
  return (
    <div className="card clickable-img">
      <img src={src} alt={alt} onClick={onClick} />
    </div>
  );
}

ImageCard.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
};
