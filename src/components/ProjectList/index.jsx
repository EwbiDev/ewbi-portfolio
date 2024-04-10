import Project from "./Project";

export default function ProjectList() {
  return (
    <div className="m-4 flex h-screen snap-center flex-col justify-center">
      <h2 className="text-5xl" id="Projects">
        Projects
      </h2>
      <ul className="flex justify-center">
        <Project />
      </ul>
    </div>
  );
}
