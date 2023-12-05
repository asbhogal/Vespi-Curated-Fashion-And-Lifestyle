"use client";

import Image from "next/image";
import "@splidejs/react-splide/css";

// @ts-ignore - temporarily added to ignore missing declarations file
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Splide
        options={{
          type: "loop",
          // autoplay: true,
          arrows: false,
          direction: "ttb",
          height: "100dvh",
          paginationDirection: "ttb",
        }}
      >
        <SplideSlide
          options={{ height: "100dvh" }}
          className="grid grid-cols-1 md:grid-cols-2"
        >
          <div>
            <h2>Elegance & Comfort</h2>
          </div>
          <Image
            src="/images/home/elegance-and-comfort.jpg"
            alt="image"
            height={1000}
            width={500}
            style={{ minHeight: "100vh", objectFit: "cover", width: "100%" }}
          />
        </SplideSlide>
        <SplideSlide className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h2>Womens Spring Range</h2>
          </div>
          <Image
            src="/images/home/womens-spring-range.jpg"
            alt="image"
            width={1000}
            height={500}
          />
        </SplideSlide>
        <SplideSlide className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h2>Winter Warmers</h2>
          </div>
          <Image
            src="/images/home/winter-warmers.jpg"
            alt="image"
            width={1000}
            height={500}
          />
        </SplideSlide>
        <SplideSlide className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h2>New Womens Range</h2>
          </div>
          <Image
            src="/images/home/new-womens-range.jpg"
            alt="image"
            width={1000}
            height={500}
          />
        </SplideSlide>
        <SplideSlide className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h2>Fall Season</h2>
          </div>
          <Image
            src="/images/home/fall-season.jpg"
            alt="image"
            width={1000}
            height={500}
          />
        </SplideSlide>
      </Splide>
    </main>
  );
}
