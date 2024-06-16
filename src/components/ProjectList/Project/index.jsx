import Logo from "@commonComponents/Logo";
import Card from "@commonComponents/Card";

import github from "@assets/logos/github.svg";
import link from "@assets/matUI/link.svg";

export default function Project({
  titleText,
  coverImg,
  techLogos,
  summaryText,
  gitHubLink,
  gitHubLinkText,
  demoLink,
  demoEnable,
  showDemoBtn,
}) {
  return (
    <li>
      <Card>
        <div className="flex flex-col gap-2">
          <h3 className="text-center text-3xl">{titleText}</h3>
          <div className="relative mx-auto flex w-fit flex-col justify-center gap-2 md:flex-row">
            <img src={coverImg} className="rounded-lg object-cover" />
            <ul className="flex gap-2 md:flex-col">
              {techLogos.map((logo) => (
                <Logo
                  url={logo.file}
                  name={logo.name}
                  key={logo.name}
                  positionTooltipRight={true}
                />
              ))}
            </ul>
          </div>

          <p>{summaryText}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <LinkButton
              href={gitHubLink}
              imgSrc={github}
              text={gitHubLinkText}
              enable={true}
            />
            {showDemoBtn && (
              <LinkButton
                href={demoLink}
                imgSrc={link}
                text="Live Demo (Coming Soon)"
                enable={demoEnable}
              />
            )}
          </div>
        </div>
      </Card>
    </li>
  );
}

function LinkButton({ href, imgSrc, text, enable }) {
  const baseClass =
    "flex items-center gap-2 rounded-lg p-2 bg-ewbi-gold transition hover:scale-105";
  const disabledClass =
    baseClass + " text-gray-700 bg-gray-300 cursor-not-allowed";

  return (
    <a
      href={href}
      target="_blank"
      className={enable ? baseClass : disabledClass}
      rel="noreferrer"
      onClick={(event) => !enable && event.preventDefault()}
    >
      <img src={imgSrc} className="h-8"></img>
      <div className="truncate">{text}</div>
    </a>
  );
}
