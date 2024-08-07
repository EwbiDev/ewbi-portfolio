import { useEffect } from "react";

import { useInView } from "react-intersection-observer";

import Card from "@commonComponents/Card";
import Logo from "@commonComponents/Logo";

import htmlLogo from "@assets/logos/used-tech/html.svg";
import cssLogo from "@assets/logos/used-tech/css.svg";
import reactLogo from "@assets/logos/used-tech/react.svg";
import dockerLogo from "@assets/logos/used-tech/docker.svg";
import gitLogo from "@assets/logos/used-tech/git.svg";
import javascriptLogo from "@assets/logos/used-tech/javascript.svg";
import postgresqlLogo from "@assets/logos/used-tech/postgresql.svg";
import pythonLogo from "@assets/logos/used-tech/python.svg";
import sqlserverLogo from "@assets/logos/used-tech/sqlserver.svg";
import tailwindLogo from "@assets/logos/used-tech/tailwind.svg";
import typescriptLogo from "@assets/logos/used-tech/typescript.svg";
import awsLogo from "@assets/logos/used-tech/aws.svg";

const aboutTechLogos = [
  { name: "HTML", file: htmlLogo },
  { name: "CSS", file: cssLogo },
  { name: "React", file: reactLogo },
  { name: "Tailwind CSS", file: tailwindLogo },
  { name: "Javascript", file: javascriptLogo },
  { name: "Typescript", file: typescriptLogo },
  { name: "Python", file: pythonLogo },
  { name: "PostgreSQL", file: postgresqlLogo },
  { name: "SQL Server", file: sqlserverLogo },
  { name: "Docker", file: dockerLogo },
  { name: "Git", file: gitLogo },
  { name: "Amazon Web Services", file: awsLogo },
];

export default function About({ visible, setVisible }) {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (visible.about !== inView) {
      setVisible({ ...visible, about: inView });
    }
  }, [inView, visible, setVisible]);

  return (
    <section
      className="m-4 flex h-screen snap-start flex-col justify-center space-y-4"
      id="about"
      ref={ref}
    >
      <h2 className="text-5xl">About Me</h2>
      <Card>
        <p>
          Hello! I&#39;m Eduard, full-stack developer, with a great passion for
          problem-solving and process optimization. I particularly enjoy
          back-end development, leveraging my enthusiasm to create robust,
          data-driven applications.
        </p>
      </Card>
      <Card>
        <p>
          So far in my coding adventures I have encountered these technologies:
        </p>
        <ul className="flex flex-wrap gap-4">
          {aboutTechLogos.map((logo) => (
            <Logo url={logo.file} name={logo.name} key={logo.name} />
          ))}
        </ul>
      </Card>
    </section>
  );
}
