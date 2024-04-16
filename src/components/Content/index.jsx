import { useState } from "react";

import NextPage from "@commonComponents/NextPage";

import About from "../About";
import Landing from "../Landing";
import ProjectList from "../ProjectList";
import Contact from "../Contact";

export default function Content() {
  const [visible, setVisible] = useState({});

  return (
    <main className="z-20 mx-auto grow sm:max-w-[640px] lg:max-w-[768px] xl:mx-32 xl:max-w-[1024px]">
      <Landing visible={visible} setVisible={setVisible} />
      <About visible={visible} setVisible={setVisible} />
      <ProjectList visible={visible} setVisible={setVisible} />
      <Contact visible={visible} setVisible={setVisible} />
      <NextPage visible={visible} setVisible={setVisible} />
    </main>
  );
}
