import NextPage from "@commonComponents/NextPage";

import About from "../About";
import Landing from "../Landing";
import ProjectList from "../ProjectList";

export default function Content() {
  return (
    <main className="grow">
      <Landing />
      <About />
      <ProjectList />
      <NextPage />
    </main>
  );
}
