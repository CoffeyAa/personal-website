import React from "react";

import PDFCard from '../assets/components/pdfCard'
import BioCard from '../assets/components/bioCard'

const Home = () => {
    return (
        <div className="page">
            <div>
                <BioCard/>
            </div>
            <div className='documents card'>
                <PDFCard title={"Resume"} pdfUrl={"./FakeResume.pdf"}/>
                <PDFCard title={"Cover Letter"} pdfUrl={"./FakeCV.pdf"}/>
            </div>
        </div>
    );
};

export default Home