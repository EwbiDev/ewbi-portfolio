import { useEffect } from "react";

import { useInView } from "react-intersection-observer";

import Title from "@commonComponents/Title";

export default function Landing({ section, setSection }) {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (section.landing !== inView) {
      setSection({ ...section, landing: inView });
    }
  }, [inView, section, setSection]);

  return (
    <section className="landing flex h-screen grow snap-start" ref={ref}>
      <Title />
    </section>
  );
}
