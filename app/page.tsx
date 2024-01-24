import HomePageCarousel from "@/components/HomePageCarousel";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <h1 className="sr-only">Vespi - Homepage</h1>
      <Header defaultLayout={false} />
      <HomePageCarousel />
    </>
  );
}
