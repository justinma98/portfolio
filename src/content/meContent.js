import React from "react";
import { FILE_TYPE } from "../constants";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "../assets/files/JustinMa.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

const me1 = require("../assets/pictures/background.jpg");

const ME = [
  {
    id: "me_text",
    size: { x: 400, y: 200 },
    pos: { x: 200, y: 100 },
    title: "About_Me.txt",
    type: FILE_TYPE.TEXT,
    content: (
      <div className={FILE_TYPE.TEXT}>
        <h1>About me...</h1>
      </div>
    )
  },
  {
    id: "me_pic1",
    pos: { x: 250, y: 150 },
    title: "IMG_0617.jpg",
    type: FILE_TYPE.PICTURE,
    source: me1,
    content: <img className={FILE_TYPE.PICTURE} alt="me_pic1" src={me1} />
  },
  {
    id: "me_resume",
    pos: { x: 250, y: 150 },
    title: "IMG_0617.jpg",
    type: FILE_TYPE.PDF,
    source: me1,
    content: (
      <Document className={FILE_TYPE.PDF} file={resume}>
        <Page pageNumber={1} />
      </Document>
    )
  }
];

export default ME;
