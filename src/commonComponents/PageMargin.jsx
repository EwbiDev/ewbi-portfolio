import Portrait from "./Portrait";

export default function PageMargin({ showImage }) {
  return (
    <div
      className={`sm:basis-1/3 md:basis-2/5 2xl:basis-1/5 ${
        !showImage && "hidden 2xl:block"
      }`}
    >
      {showImage && <Portrait />}
    </div>
  );
}
