"use client"

import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function Github() {
    
  return (
    <div className="text-center pb-4 row justify-content-center ">
        <GitHubCalendar
            username="Merzakb"
            blockSize={15}
            blockMargin={5}
            fontSize={15}
        />
    </div>
  );
}

