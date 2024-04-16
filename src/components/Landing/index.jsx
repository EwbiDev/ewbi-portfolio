import { useEffect } from "react";

import { useInView } from "react-intersection-observer";

import Title from "@commonComponents/Title";

export default function Landing({ visible, setVisible }) {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (visible.landing !== inView) {
      setVisible({ ...visible, landing: inView });
    }
  }, [inView, visible, setVisible]);

  return (
    <section className="landing flex h-screen grow snap-start" ref={ref}>
      <Title />
    </section>
  );
}
