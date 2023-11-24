import landingImg from "@assets/portraits/landing.png";

export default function Portrait() {
  return (
    <img className="hidden sm:block object-contain" src={landingImg} alt="landing image" />
  );
}
