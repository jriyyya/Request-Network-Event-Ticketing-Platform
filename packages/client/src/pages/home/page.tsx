import Featured from "./components/Featured.tsx";

export default function HomePage() {
  return (
    <article className="flex flex-col gap-y-10">
      <div>
        <img src="/images/home-carousel-1.webp" alt="MST promotional offer" />
      </div>

      <Featured />
    </article>
  );
}
