import React, { useEffect, useState } from 'react'
import { pdfjs, Document, Page } from 'react-pdf'
import {pdf, usePDF} from '@react-pdf/renderer'
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import {View} from '@react-pdf/renderer'; // TODO remove

/*
import {Canvas, StyleSheet, View, Text, Document, Page} from '@react-pdf/renderer'; // TODO remove
*/

import { WorkerMessageHandler } from "pdfjs-dist/build/pdf.worker.min.mjs";

export const MyDoc = () => {
    return (<Document>
        <Page size="A4">
            <View>
                <Text>Section #1</Text>
            </View>
            <View>
                <Text>Section #2</Text>
            </View>
        </Page>
    </Document>)
};
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    WorkerMessageHandler,
    import.meta.url
).toString();

const PDFViewer = (props) => {
    const [pdfUrl, setPdfUrl] = useState(null)
    const children = props.children;
    const setDownloadLink = props.f;



    useEffect(() => {
        const child = React.Children.only(children)

        pdf(child).toBlob().then(blob => {
            setPdfUrl(URL.createObjectURL(blob));


        })
    }, [children]);
/*
*/





    return (
        <div  className ={"pdf-viewer"}>
{/*
        <Document file={pdfUrl} key={crypto.randomUUID()}>
             I used key here although there is only one component to load because of a bug that
            happens when a user updates the form with fast speed, this could probably be solved otherwise by
            waiting for the file to fully load the last keystroke change, but I believe this looks better.
            solution found on : https://github.com/wojtekmaj/react-pdf/issues/974#issuecomment-3054525004

            <Page renderMode='canvas' pageNumber={1} />
        </Document>
*/}
            <Document file={pdfUrl} key={crypto.randomUUID()}>
                {/* I used key here although there is only one component to load because of a bug that
            happens when a user updates the form with fast speed, this could probably be solved otherwise by
            waiting for the file to fully load the last keystroke change, but I believe this looks better.
            solution found on : https://github.com/wojtekmaj/react-pdf/issues/974#issuecomment-3054525004
            */}
                <Page renderMode='canvas' pageNumber={1} />
            </Document>        </div>
    )
}

export default PDFViewer