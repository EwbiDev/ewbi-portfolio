export default function Logo({ url, name }) {
    const tooltipClass =
      "absolute left-1/2 m-4 mx-auto -translate-x-1/2 translate-y-8 rounded-md bg-ewbi-red py-1 px-2 text-sm text-ewbi-gold opacity-0 transition-opacity group-hover:opacity-100 w-max";
    return (
      <li>
        <div className="group relative flex">
          <img src={url} className="w-10 transition hover:scale-125"></img>
          <div className={tooltipClass}>{name}</div>
        </div>
      </li>
    );
  }
