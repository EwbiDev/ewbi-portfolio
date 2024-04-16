export default function NextPage({ nextSection }) {
  return (
    <div className="material-symbols-outlined fixed bottom-12 right-1/2 -mr-5 -translate-y-1/4 cursor-pointer text-4xl will-change-transform hover:animate-bounce">
      <a href={`#${nextSection}`}>keyboard_arrow_down</a>
    </div>
  );
}
