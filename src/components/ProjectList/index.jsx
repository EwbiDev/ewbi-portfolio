import { useEffect } from "react";

import { useInView } from "react-intersection-observer";

import Project from "./Project";

import drumbiCover from "@assets/projects/drumbi.png";
import typeyCover from "@assets/projects/typey.png";

import reactLogo from "@assets/logos/used-tech/react.svg";
import tailwindLogo from "@assets/logos/used-tech/tailwind.svg";
import javascriptLogo from "@assets/logos/used-tech/javascript.svg";
import typescriptLogo from "@assets/logos/used-tech/typescript.svg";
import nestJsLogo from "@assets/logos/used-tech/nestjs.svg";
import dockerLogo from "@assets/logos/used-tech/docker.svg";

const drumbiTechLogos = [
  { name: "React", file: reactLogo },
  { name: "Tailwind CSS", file: tailwindLogo },
  { name: "Javascript", file: javascriptLogo },
];

const typeyTechLogos = [
  { name: "React", file: reactLogo },
  { name: "Tailwind CSS", file: tailwindLogo },
  { name: "NestJS", file: nestJsLogo },
  { name: "Docker", file: dockerLogo },
  { name: "Typescript", file: typescriptLogo },
];

export default function ProjectList({ visible, setVisible }) {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (visible.projects !== inView) {
      setVisible({ ...visible, projects: inView });
    }
  }, [inView, visible, setVisible]);

  return (
    <div
      className="m-4 flex h-screen snap-start flex-col justify-center"
      id="projects"
      ref={ref}
    >
      <h2 className="text-5xl">Projects</h2>
      <ul className="flex flex-col gap-4">
        <Project
          titleText="Typey - Typing Tester"
          coverImg={typeyCover}
          techLogos={typeyTechLogos}
          summaryText="A typing test app which tracks a users' speed and accuracy while completing passages."
          gitHubLink="https://github.com/EwbiDev/typey"
          gitHubLinkText="EwbiDev/typey"
        />
        <Project
          titleText="Drumbi - Drum Machine"
          coverImg={drumbiCover}
          techLogos={drumbiTechLogos}
          summaryText="A sequencer which allows for changes to be made mid playback, allowing
        users to iterate on their beat without interruptions."
          gitHubLink="https://github.com/EwbiDev/drumbi"
          gitHubLinkText="EwbiDev/drumbi"
          demoLink="https://ewbidev.github.io/drumbi/"
          demoEnable={true}
          showDemoBtn={true}
        />
      </ul>
    </div>
  );
}
