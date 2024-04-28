"use client"

import React from 'react'
import Image from 'next/image';
import Tilt from "react-parallax-tilt";
import photo from "@/ui/assets/logo/logo-white-yellow.png";

const TiltImage = () => {
    return (
        <div className="col-md-4 order-md-0">
            <Tilt>
                <Image src={photo} className={`img-fluid`} alt="logo merzak" width={500} height={500} priority/>
            </Tilt>
        </div>
    )
}

export default TiltImage
