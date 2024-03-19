import Content from "../Content";
import PageMargin from "@commonComponents/PageMargin";

export default function Body() {
  return (
    <div className="content flex h-full w-full">
      <PageMargin />
      <Content />
      <PageMargin showImage={true} />
    </div>
  );
}
