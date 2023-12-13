import HomePageCarousel from "@/components/HomePageCarousel";
import { Header } from "@/stories/Header";

export default function Home() {
  return (
    <>
      <Header defaultLayout={false} />
      <HomePageCarousel />
    </>
  );
}
