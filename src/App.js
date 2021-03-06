import React from "react";
import "./App.css";
import ImagesSpinner from "./components/ImagesSpinner";

function App() {
  const images = [
    {
      src: "https://www.diyphotography.net/wp-content/uploads/2019/01/Aquamarine.jpg",
      alt: "first",
      key: "first",
    },
    {
      src: "https://www.coe.int/documents/9253022/52882255/1+definition+-+glasgow+street.jpg/5666a120-71c2-53e8-158f-9474ffad7ed9?t=1570433971000",
      alt: "second",
      key: "second",
    },
    {
      src: "https://iso.500px.com/wp-content/uploads/2017/10/PhotographingTwilight_TannerWendellStewart-218136823.jpg",
      alt: "third",
      key: "third",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3mvLduWQ63p0YQ2ZLbKNS85YK2R8-W_7ybg&usqp=CAU",
      alt: "fourth",
      key: "fourth",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC72Q_UrVEKHC5IBxGKcVytzX-ARjcJBCQ7g&usqp=CAU",
      alt: "fifth",
      key: "fifth",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR56pf2PxnReNt8xqGFtHJDR4OcDsLQ7qlaA&usqp=CAU",
      alt: "sixth",
      key: "sixth",
    },
  ];
  return (
    <>
      <h2 style={{ textAlign: "center", margin: 50 }}>
        Click on the image to enlarge it.
      </h2>
      <ImagesSpinner images={images} />;
    </>
  );
}

export default App;
