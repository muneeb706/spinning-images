import React from "react";
import ImageContainer from "./ImageContainer";
import ImageModal from "./ImageModal";

export default function ImagesSpinner({ images }) {
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

  return (
    <div id="container">
      <div id="rectangle" className="wheel">
        {images.map((image) => (
          <ImageContainer {...image} onClick={onImageClick} />
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
};
