import landingImg from "@assets/portraits/landing.png";

export default function Portrait() {
  return (
    <img
      className="portrait hidden object-contain sepia-[.10] sm:block"
      src={landingImg}
      alt="landing image"
    />
  );
}
