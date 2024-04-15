import github from "@assets/logos/github.svg";
import link from "@assets/matUI/link.svg";

export default function Project({titleText, coverImg, summaryText, gitHubLink, gitHubLinkText, demoLink}) {
  return (
    <li className="grid w-full gap-2 rounded-xl border bg-white p-2">
      <h3 className="text-center text-3xl">{titleText}</h3>
      <div className="flex justify-center">
        <img src={coverImg} className="rounded-lg object-cover"></img>
      </div>

      <p>{summaryText}</p>
      <div className="flex justify-center gap-4">
        <LinkButton
          href={gitHubLink}
          imgSrc={github}
          text={gitHubLinkText}
        />
        <LinkButton href={demoLink} imgSrc={link} text="Live Demo" />
      </div>
    </li>
  );
}

function LinkButton({ href, imgSrc, text }) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center gap-2 rounded-lg bg-ewbi-gold p-2 transition hover:scale-105"
      rel="noreferrer"
    >
      <img src={imgSrc} className="h-8"></img>
      <div>{text}</div>
    </a>
  );
}
