import github from "@assets/logos/github.svg";
import drumbi from "@assets/projects/drumbi.png";
import link from "@assets/matUI/link.svg";

export default function Project() {
  return (
    <li className="grid w-full gap-2 rounded-xl border bg-white p-2">
      <h3 className="text-center text-3xl">Drumbi - Drum Machine</h3>
      <div className="flex justify-center">
        <img src={drumbi} className="rounded-lg object-cover"></img>
      </div>

      <p>
        A sequencer which allows for changes to be made mid playback, allowing
        users to iterate on their beat without interruptions.
      </p>
      <div className="flex justify-center gap-4">
        <LinkButton
          href={"https://github.com/EwbiDev/drumbi"}
          imgSrc={github}
          text="EwbiDev/drumbi"
        />
        <LinkButton href={"#"} imgSrc={link} text="Live Demo" />
      </div>
    </li>
  );
}

function LinkButton({ href, imgSrc, text }) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center gap-2 rounded-lg bg-ewbi-gold p-2"
      rel="noreferrer"
    >
      <img src={imgSrc} className="h-8"></img>
      <div>{text}</div>
    </a>
  );
}
