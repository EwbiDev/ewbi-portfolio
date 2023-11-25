import landingImg from "@assets/portraits/landing.png";

export default function Portrait() {
  return (
    <img
      className="portrait red-filter hidden object-contain sm:block"
      src={landingImg}
      alt="landing image"
    />
  );
}
