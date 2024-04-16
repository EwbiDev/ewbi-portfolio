import email from "@assets/matUI/email.svg";
import linkedin from "@assets/logos/linkedin.svg";
import github from "@assets/logos/github.svg";

export default function Contact() {
  return (
    <section
      className="m-4 flex h-screen snap-start flex-col justify-center"
      id="Contact"
    >
      <h2 className="text-5xl">Contact</h2>
      <p>Feel free to get in touch in the following places:</p>
      <ul className="flex gap-8">
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
    <li>
      <a
        href={url}
        target="_blank"
        className="flex cursor-pointer items-center gap-2 rounded-2xl bg-ewbi-gold p-4 transition hover:scale-110"
        rel="noreferrer"
      >
        <img src={img} alt={text} className="h-10 w-14 object-contain" />
        <span>{text}</span>
      </a>
    </li>
  );
}
