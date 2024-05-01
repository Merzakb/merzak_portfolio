"use client"

import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <div className="text-secondary fs-1">
        <Typewriter 
        className= "text-secondary"
          options={{
            strings: [
              "Développeur web Frontend",
              "Intégrateur web",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
    </div>
  );
}

export default TypeWriter;
