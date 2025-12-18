import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import React from 'react';
import {Canvas, Document, Page, StyleSheet, View, Text} from '@react-pdf/renderer';


export const PDFDownloaderButton = (props) => (
    <button className={"download-button"}
        onClick={async () => {
/*
            const props = await getProps();
*/
            const doc = props.doc;
            const asPdf = pdf({}); // {} is important, throws without an argument
            asPdf.updateContainer(doc);
            const blob = await asPdf.toBlob();
            saveAs(blob, `${props.name} CV.pdf`);
        }}
    >Download PDF</button>
);
export function CreatePdfUrl({file}) {

    let url =  URL.createObjectURL(file);
    return <a href = {url}> </a>
}

