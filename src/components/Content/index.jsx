import NextPage from "@commonComponents/NextPage";

import About from "../About";
import Landing from "../Landing";
import ProjectList from "../ProjectList";
import Contact from "../Contact";

export default function Content() {
  return (
    <main className="mx-auto grow sm:max-w-[640px] lg:max-w-[768px] xl:max-w-[1024px]">
      <Landing />
      <About />
      <ProjectList />
      <Contact />
      <NextPage />
    </main>
  );
}
