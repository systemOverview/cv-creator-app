import React, { useEffect, useState, useCallback } from 'react'
import { pdfjs, Document, Page, Outline } from 'react-pdf'
import {pdf, usePDF} from '@react-pdf/renderer'
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import {generateRandomId} from "../../components/helper.js";

import { WorkerMessageHandler } from "pdfjs-dist/build/pdf.worker.min.mjs";

// The code for this PDF Previewer was copied from https://github.com/diegomura/react-pdf/issues/477#issuecomment-886161514

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    WorkerMessageHandler,
    import.meta.url
).toString();

const PDFViewer = ({ children }) => {
    const [pdfUrl, setPdfUrl] = useState(null);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = useCallback((document) => {
        const { numPages: nextNumPages } = document;
        setNumPages(nextNumPages);

    }, []);




    const onItemClick = useCallback(
        ({ pageNumber: nextPageNumber }) => setPageNumber(nextPageNumber),
        [],
    );

    const changePage = useCallback(
        (offset) => setPageNumber((prevPageNumber) => (prevPageNumber || 1) + offset),
        [],
    );

    const previousPage = useCallback(() => changePage(-1), [changePage]);

    const nextPage = useCallback(() => changePage(1), [changePage]);


    useEffect(() => {
        const child = React.Children.only(children);

        pdf(child).toBlob().then(blob => {
            setPdfUrl(URL.createObjectURL(blob));

        })


    }, [children]);

    if (numPages!=null){
        if (pageNumber>numPages){
            setPageNumber(numPages)
        }
    }

    return (
        <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onItemClick={onItemClick}
            key={generateRandomId()}
        >
            <Outline
                className="custom-classname-outline"
                onItemClick={onItemClick}
            />
            <Page renderMode='svg' pageNumber={pageNumber} />
            <div className="Test__container__content__controls">
                <button
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                    type="button"
                >
                    Previous
                </button>
                <span className={"page-number"} style={{color: "#2572b5"}}>
          {`Page ${pageNumber || (numPages ? 1 : '--')} of ${numPages || '--'}`}
        </span>
                <button
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                    type="button"
                >
                    Next
                </button>
            </div>
        </Document>
    );
}

export default PDFViewer;