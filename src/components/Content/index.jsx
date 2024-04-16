import { useState } from "react";

import NextPage from "@commonComponents/NextPage";

import About from "../About";
import Landing from "../Landing";
import ProjectList from "../ProjectList";
import Contact from "../Contact";

export default function Content() {
  const [section, setSection] = useState({});

  console.log(section)

  return (
    <main className="z-20 mx-auto grow sm:max-w-[640px] lg:max-w-[768px] xl:mx-32 xl:max-w-[1024px]">
      <Landing section={section} setSection={setSection}/>
      <About section={section} setSection={setSection} />
      <ProjectList section={section} setSection={setSection} />
      <Contact section={section} setSection={setSection} />
      <NextPage section={section} setSection={setSection} />
    </main>
  );
}
