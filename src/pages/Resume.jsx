import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

// import Particle from '../components/Particle'
import pdf from "../assets/jeeshan.jpeg"

// import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
// import { px } from "framer-motion";
// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
// import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs';
// import { Document, Page, pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


// pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;
// const resumeLink = `https://raw.githubusercontent.com/19sajib/portfolio/main/src/assets/sajib.pdf`
// const resumeLink = `https://drive.google.com/uc?export=download&id=1fEHFEE3dj8Dx7aQqkTgU0qCb8eanA4ZD`


const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {

    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        {/* <Particle /> */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="https://drive.google.com/uc?export=download&id=1fEHFEE3dj8Dx7aQqkTgU0qCb8eanA4ZD"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        {/* <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>  */}
        <div >
          {/* <img src={pdf} alt="" width={100}/> */}
          <img
            src={pdf}
            alt="My Resume"
            style={{ maxWidth: '800px', height: 'auto', width: '100%' }}
          />

        </div>
        {/* <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden">
          <iframe
            src="pdf"
            title="Resume Preview"
            className="w-full h-[600px]"
          ></iframe>
        </div> */}

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="https://drive.google.com/uc?export=download&id=1fEHFEE3dj8Dx7aQqkTgU0qCb8eanA4ZD"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  )
}

export default Resume


// ========

// import React from "react";
// // import { Download } from "lucide-react"; // icon (install: npm i lucide-react)
// import { FaDownload } from "react-icons/fa";


// const Resume = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
//       {/* Title */}
//       <h1 className="text-4xl font-bold mb-6 text-gray-800">My Resume</h1>

//       {/* Resume Preview */}
//       <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden">
//         <iframe
//           src="/resume.pdf"
//           title="Resume Preview"
//           className="w-full h-[600px]"
//         ></iframe>
//       </div>

//       {/* Download Button */}
//       <a
//         href="/resume.pdf"
//         download="https://raw.githubusercontent.com/19sajib/portfolio/main/src/assets/sajib.pdf"
//         className="mt-6 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-md"
//       >
//         <FaDownload size={20} /> Download Resume
//       </a>
//     </div>
//   );
// };

// export default Resume;

// =======================================

// import React from "react";
// import { FaDownload } from "react-icons/fa";
// import { motion } from "framer-motion"; // Animation library

// const Resume = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
//       {/* Animated Title */}
//       <motion.h1
//         className="text-4xl font-bold mb-6 text-gray-800"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         My Resume
//       </motion.h1>

//       {/* Animated Resume Preview */}
//       <motion.div
//         className="w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8, delay: 0.3 }}
//       >
//         <iframe
//           src="/resume.pdf"
//           title="Resume Preview"
//           className="w-full h-[600px]"
//         ></iframe>
//       </motion.div>

//       {/* Animated Download Button */}
//       <motion.a
//         href="/resume.pdf"
//         download="My_Resume.pdf"
//         className="mt-6 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-md"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.6 }}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         <FaDownload size={20} /> Download Resume
//       </motion.a>
//     </div>
//   );
// };

// export default Resume;



// ============================================================
