'use client'
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const CNEADTestimonial = () => (
  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
    <Viewer fileUrl="/attestation-cnead.pdf" />;
  </Worker>
);

export default CNEADTestimonial