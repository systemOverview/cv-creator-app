import React, { useEffect, useState, useCallback } from 'react'
import { pdfjs, Document, Page, Outline } from 'react-pdf'
import {pdf, usePDF, PDFViewer} from '@react-pdf/renderer'
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import {generateRandomId} from "../../components/helper.js";

import { WorkerMessageHandler } from "pdfjs-dist/build/pdf.worker.min.mjs";


// The code for this PDF Previewer was copied from https://codesandbox.io/p/sandbox/react-pdf-prevent-flash-se4r7s

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    WorkerMessageHandler,
    import.meta.url
).toString();

const CustomPDFViewer = ({ children }) => {
    const [pdfUrl, setPdfUrl] = useState(null);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [renderedPageNumber, setRenderedPageNumber] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    function changePage(offset) {
        setPageNumber((prevPageNumber) => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }
    useEffect(() => {
        const child = React.Children.only(children);
        pdf(child).toBlob().then(blob => {
            setPdfUrl(URL.createObjectURL(blob));

        })



    }, [children]);

    const isLoading = renderedPageNumber !== pageNumber;
    if (numPages!=null){
        if (pageNumber>numPages){
            setPageNumber(numPages)
        }
    }
    return (
        <div className="pdf-viewer">
            <div className={"pagination"}>
                <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
                    Previous
                </button>

                <p>
                    Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
                </p>

                <button
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                >
                    Next
                </button>
            </div>
            <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
                {isLoading && renderedPageNumber ? (
                    <Page
                        key={renderedPageNumber}
                        className="prevPage"
                        pageNumber={renderedPageNumber}/>
                ) : null}
                <Page
                    key={pageNumber}
                    pageNumber={pageNumber}
                    onRenderSuccess={() => setRenderedPageNumber(pageNumber)}
                />
            </Document>
        </div>
    );
}

export default CustomPDFViewer;