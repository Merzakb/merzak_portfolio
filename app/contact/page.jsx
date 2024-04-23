import React from 'react'
import Contact from "@/ui/components/contact/Contact.jsx"

const Page = () => {
    return (
        <div className='text-white row d-flex justify-content-center py-5 container-fluid'>
            <div className='d-flex justify-content-center mb-4'>
                <h1 className='fs-1 fw-bold text-secondary'>Contactez-moi</h1>
            </div>
           
            <div className='row col-md-8 col-lg-6'>
                <Contact />
            </div>
           
        </div>
    )
}

export default Page
