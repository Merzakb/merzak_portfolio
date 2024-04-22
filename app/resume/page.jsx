import Link from 'next/link';
import { AiOutlineDownload } from "react-icons/ai";
import PDFViewer from "@/ui/components/pdf/PDFViewer"


function CvPage() {
    return (
        <div className='my-5'>
            <div className="d-flex flex-wrap justify-content-center">
                <Link
                href="/pdf/cv.pdf"
                className="btn btn-secondary text-primary fw-bold text-center d-flex align-items-center"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <AiOutlineDownload className="me-1" />
                    Télécharger le CV
                </Link>
            </div> 

            <PDFViewer pdf="/pdf/cv.pdf" />

            <div className="d-none d-sm-flex flex-wrap justify-content-center">
                <Link
                href="/pdf/cv.pdf"
                className="btn btn-secondary text-primary fw-bold text-center d-flex align-items-center"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <AiOutlineDownload className="me-1" />
                    Télécharger le CV
                </Link>
            </div>
        </div>
    )
}

export default CvPage
