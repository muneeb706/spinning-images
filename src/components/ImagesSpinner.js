import React from "react";
import ImageCard from "./ImageCard";
import ImageModal from "./ImageModal";
import PropTypes from "prop-types";

export default function ImagesSpinner({
  images,
  direction = "left",
  spinSpeed = 3,
}) {
  const spinDeg = `${90 * spinSpeed}deg`;
  const spinDegDir = direction === "right" ? spinDeg : `-${spinDeg}`;

  const onImageClick = (event) => {
    var modal = document.getElementById("img-modal");

    var modalImg = document.getElementById("modal-img");
    modalImg.src = event.target.src;
    modal.style.display = "block";

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
      modal.style.display = "none";
    };
  };

  const setCssVariable = (name, val) => {
    let root = document.documentElement;
    root.style.setProperty(`--${name}`, val);
  };

  setCssVariable("rotate-to", spinDegDir);

  return (
    <div id="container">
      <div id="rectangle" className="wheel">
        {images.map((image) => (
          <ImageCard {...image} onClick={onImageClick} />
        ))}
      </div>
      <ImageModal />
    </div>
  );
}

ImagesSpinner.propTypes = {
  images: function (props, propName, componentName) {
    if (!Array.isArray(props[propName])) {
      return new Error(`${componentName} Prop: ${propName} is not an Array.`);
    } else if (props[propName].length !== 6) {
      return new Error(
        `${componentName} Prop: ${propName} should contain 6 elements exactly.`
      );
    }
  },
  direction: PropTypes.oneOf(["left", "right"]),
  spinSpeed: PropTypes.oneOf([1, 2, 3]),
};
