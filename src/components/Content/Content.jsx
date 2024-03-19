import Landing from "./components/Landing";
import PageMargin from "@commonComponents/PageMargin";

export default function Content() {
  return (
    <div className="content flex h-full w-full overflow-hidden">
      <PageMargin />
      <Landing />
      <PageMargin showImage={true} />
    </div>
  );
}
