import Content from "../Content";

export default function Body() {
  return (
    <div className="content h-screen w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <Content />
    </div>
  );
}
