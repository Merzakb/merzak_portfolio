import React from "react";
import GitHubCalendar from "react-github-calendar";

export function Github() {
  return (
    <div className="text-center pb-4">
      <h1 className="project-heading pb-3">
       Quand je <span className="text-secondary fw-bold" > Code ?</span>
      </h1>
      <GitHubCalendar
        username="Merzakb"
        // blockSize={15}
        // blockMargin={5}
        // color="#f4af1b"
        // fontSize={16}
      />
    </div>
  );
}

