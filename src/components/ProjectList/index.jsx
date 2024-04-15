import Project from "./Project";

import drumbiCover from "@assets/projects/drumbi.png";

export default function ProjectList() {
  return (
    <div className="m-4 flex h-screen snap-center flex-col justify-center">
      <h2 className="text-5xl" id="Projects">
        Projects
      </h2>
      <ul className="flex justify-center">
        <Project
          titleText="Drumbi - Drum Machine"
          coverImg={drumbiCover}
          summaryText="A sequencer which allows for changes to be made mid playback, allowing
        users to iterate on their beat without interruptions."
          gitHubLink="https://github.com/EwbiDev/drumbi"
          gitHubLinkText="EwbiDev/drumbi"
          demoLink="#"
        />
      </ul>
    </div>
  );
}
