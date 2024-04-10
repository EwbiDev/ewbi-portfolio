import NextPage from "@commonComponents/NextPage";

import About from "../About";
import Landing from "../Landing";

export default function Content() {
  return (
    <main className="grow">
      <Landing />
      <About />
      <NextPage />
    </main>
  );
}
