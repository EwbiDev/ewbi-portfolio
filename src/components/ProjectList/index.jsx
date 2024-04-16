import Project from "./Project";

import drumbiCover from "@assets/projects/drumbi.png";

import reactLogo from "@assets/logos/used-tech/react.svg";
import tailwindLogo from "@assets/logos/used-tech/tailwind.svg";
import javascriptLogo from "@assets/logos/used-tech/javascript.svg";

const drumbiTechLogos = [
  { name: "React", file: reactLogo },
  { name: "Tailwind CSS", file: tailwindLogo },
  { name: "Javascript", file: javascriptLogo },
];

export default function ProjectList() {
  return (
    <div
      className="m-4 flex h-screen snap-start flex-col justify-center"
      id="Projects"
    >
      <h2 className="text-5xl">Projects</h2>
      <ul className="flex">
        <Project
          titleText="Drumbi - Drum Machine"
          coverImg={drumbiCover}
          techLogos={drumbiTechLogos}
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
