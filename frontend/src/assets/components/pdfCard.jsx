import React, {useState} from "react";

const PDFCard = ({title, pdfUrl}) => {
    return (
        <div className="pdf card">
            <h2>{title}</h2>
            <iframe src={pdfUrl} className="pdf preview"></iframe>
            <a href={pdfUrl} download className="download btn">
                Download {title}
            </a>
        </div>
    )
};

export default PDFCard