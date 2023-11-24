import Portrait from "./Portrait";

export default function PageMargin({showImage}) {
  return (
    <div className="bg-green-200 sm:basis-1/6 xl:basis-1/5 2xl:basis-1/4">
      {showImage && <Portrait />}
    </div>
  );
}
