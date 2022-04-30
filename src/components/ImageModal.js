import React from "react";

export default function ImageModal() {
  return (
    <div id="img-modal" className="modal">
      <span className="close">&times;</span>
      <img className="modal-content" id="modal-img" alt="enlarged" />
    </div>
  );
}
