export default function Logo({ url, name, positionTooltipRight }) {
  const tooltipBottomClass =
    "absolute left-1/2 mx-auto -translate-x-1/2 translate-y-12 rounded-md bg-ewbi-red py-1 px-2 text-sm text-ewbi-gold opacity-0 transition-opacity group-hover:opacity-100 w-max";
  const tooltipRightClass =
    tooltipBottomClass + " md:left-12 md:translate-y-1/4 md:-translate-x-0";
  return (
    <li>
      <div className="group relative flex">
        <img src={url} className="w-10 transition hover:scale-125"></img>
        <div
          className={
            positionTooltipRight ? tooltipRightClass : tooltipBottomClass
          }
        >
          {name}
        </div>
      </div>
    </li>
  );
}
