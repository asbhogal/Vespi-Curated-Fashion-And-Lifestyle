import HomePageCarousel from "@/components/HomePageCarousel";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header defaultLayout={false} />
      <HomePageCarousel />
    </>
  );
}
