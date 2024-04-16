import Card from "@commonComponents/Card";

import email from "@assets/matUI/email.svg";
import linkedin from "@assets/logos/linkedin.svg";
import github from "@assets/logos/github.svg";

export default function Contact() {
  return (
    <section
      className="m-4 flex h-screen snap-start flex-col justify-center gap-4"
      id="Contact"
    >
      <h2 className="text-5xl">Contact</h2>
      <Card>
        <p>Feel free to get in touch in the following places:</p>
      </Card>

        <ul className="flex flex-wrap gap-4">
          <ContactLink
            img={email}
            text="Email"
            url="mailto:eduard@ewbi.co.uk?subject=Website%20Enquiry"
          />
          <ContactLink
            img={linkedin}
            text="LinkedIn"
            url="https://www.linkedin.com/in/eduard-bissell-6a7846194/"
          />
          <ContactLink
            img={github}
            text="GitHub"
            url="https://www.github.com/EwbiDev"
          />
        </ul>

    </section>
  );
}

function ContactLink({ img, text, url }) {
  return (
    <li className="w-fit min-w-32">
      <a
        href={url}
        target="_blank"
        className="flex cursor-pointer items-center gap-2 rounded-2xl bg-ewbi-gold p-2 transition hover:scale-105"
        rel="noreferrer"
      >
        <img src={img} alt={text} className="h-10 w-10 object-contain" />
        <span>{text}</span>
      </a>
    </li>
  );
}
