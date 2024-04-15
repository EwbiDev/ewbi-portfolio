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
];

export default function About() {
  return (
    <section className="m-4 flex h-screen snap-center flex-col justify-center space-y-4">
      <h2 className="text-5xl" id="About">
        About Me
      </h2>
      <p>
        Hello! I&#39;m Eduard, full-stack developer, with a great passion for
        problem-solving and process optimization. I particularly enjoy back-end
        development, leveraging my enthusiasm to create robust, data-driven
        applications.
      </p>
      <p>
        So far in my coding adventures I have encountered these technologies:
      </p>
      <ul className="flex gap-4">
        {aboutTechLogos.map((logo) => (
          <Logo url={logo.file} name={logo.name} key={logo.name} />
        ))}
      </ul>
    </section>
  );
}

function Logo({ url, name }) {
  const tooltipClass =
    "absolute left-1/2 m-4 mx-auto -translate-x-1/2 translate-y-8 rounded-md bg-ewbi-red py-1 px-2 text-sm text-ewbi-gold opacity-0 transition-opacity group-hover:opacity-100 w-max";
  return (
    <li>
      <div className="group relative flex">
        <img src={url} className="w-10 transition hover:scale-125"></img>
        <div className={tooltipClass}>{name}</div>
      </div>
    </li>
  );
}
