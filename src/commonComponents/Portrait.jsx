import landingImg from "@assets/portraits/landing.png";

export default function Portrait() {
  return (
    <img
      className="portrait red-filter fixed bottom-0 right-0 z-10 block w-32 object-contain xl:w-96"
      src={landingImg}
      alt="landing image"
    />
  );
}
