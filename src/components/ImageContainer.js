import React from "react";

export default function ImageContainer({ src, alt, onClick }) {
  return (
    <div className="card">
      <img src={src} alt={alt} onClick={onClick} />
    </div>
  );
}
