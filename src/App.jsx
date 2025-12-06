import React, {useEffect, useState} from 'react'
import './styles/App.css'
import Editcv from "./editcv.jsx";

import MyDocument from "./components/pdf/pdf.jsx";
import PDFViewer from "./components/pdf/pdfPreview.jsx";

const App = () => {
    const [name, setName] = useState("null");
    return(
    <div className={"container"}>
        <Editcv setName = {setName}> </Editcv>
        <PDFViewer className ="pdff">
            <MyDocument name={name}> </MyDocument>
        </PDFViewer>


    </div>
    )



}

export default App
