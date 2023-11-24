import PageMargin from "@commonComponents/PageMargin";
import Title from "@commonComponents/Title";

export default function Landing() {
  return (
    <section className="landing flex h-full">
      <PageMargin />
      <Title />
      <PageMargin showImage={true}/>
    </section>
  );
}
