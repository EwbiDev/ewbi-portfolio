import landingImg from "@assets/portraits/landing.png";

export default function Portrait() {
  return (
    <img
      className="portrait red-filter fixed bottom-0 right-0 hidden h-4/5 object-contain md:block"
      src={landingImg}
      alt="landing image"
    />
  );
}
