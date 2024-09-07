import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const PDFViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPreviousPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  };

  const goToNextPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  return (
    <div>
      <nav>
        <button onClick={goToPreviousPage} disabled={pageNumber <= 1}>
          Previous
        </button>
        <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
          Next
        </button>
      </nav>
      <div style={{ width: 600 }}>
        <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} width={600} />
        </Document>
      </div>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default PDFViewer;
