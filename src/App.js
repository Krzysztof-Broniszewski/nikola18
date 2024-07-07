import './App.css';
import React, { useState } from "react";
import Button from "@mui/material/Button"; 
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import { Component } as image1 from "/Img/2006_01.jpg";

const MyImages = [
  {
    label: "First Img",
    desc: "Las",
    imgPath:
      "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
  },
  {
    label: "Second Img",
    desc: "Skały",
    imgPath:
      "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
  },
  {
    label: "Third Img",
    desc: "Plaża",
    imgPath:
      "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
  },
  {
    label: "Fourth Img",
    desc: "Góry",
    imgPath:
      "https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU",
  },
  {
    label: "Fifth Img",
    desc: "Nosek",
    imgPath:
      "https://fastly.picsum.photos/id/40/4106/2806.jpg?hmac=MY3ra98ut044LaWPEKwZowgydHZ_rZZUuOHrc3mL5mI",
  },
  {
    label: "Six Img",
    desc: "Most",
    imgPath:
      "https://fastly.picsum.photos/id/84/1280/848.jpg?hmac=YFRYDI4UsfbeTzI8ZakNOR98wVU7a-9a2tGF542539s",
  },
];

function App() {
  const length = MyImages.length;
  const [index, setIndex] = useState(0);

  const Previous = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const Next = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div className="App">
      <div className="Container">
        <div className="Carousel">
          <div className="Counter">
            {index + 1}/{length}
          </div>
          {/* console.log({MyImages}); */}
          <Button className="Button ButtonLeft" onClick={Previous}>
            <ArrowBackIosIcon />
          </Button>
          {/* <img src={image1} alt="image1" /> */}
          <img
            className="Image"
            src={MyImages[index].imgPath}
            alt={MyImages[index].label}
          />
          {/* <p>{MyImages[index].label}</p> */}
          <Button className="Button ButtonRight" onClick={Next}>
            <ArrowForwardIosIcon />
          </Button>
        </div>
        <div className="Desc">{MyImages[index].desc}</div>
      </div>
    </div>
  );
}

export default App;
