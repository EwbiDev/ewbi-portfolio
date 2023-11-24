import Portrait from "./Portrait";

export default function PageMargin({ showImage }) {
  return (
    <div
      className={`flex h-full flex-col justify-between overflow-hidden bg-green-200 object-contain sm:basis-1/3 md:basis-2/5 2xl:basis-1/5 ${
        !showImage && "hidden 2xl:block"
      }`}
    >
      <div></div>
      {showImage && <Portrait />}
    </div>
  );
}
