"use client";

// @ts-expect-error temporarily added to ignore missing declarations file
import { Splide } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css";
import { Buttons } from "./Button";
import { pt_serif } from "@/lib/types";
import useSWR from "swr";
import { fetcher } from "@/lib/functions/fetcher";

type IGPostType = {
  id: number;
  imgSrc: string;
  imgAlt: string;
};

type IGResponse = {
  data: IGPostType[];
};

export default function Page() {
  const {
    data: posts,
    error,
    isLoading,
  } = useSWR<IGResponse>("https://vespi-fashion.vercel.app/api/IG", fetcher);

  return (
    <div className="grid gap-8 overflow-hidden">
      <div className="flex justify-between">
        <h2 className={["text-[1.3125rem]", pt_serif.className].join(" ")}>
          On the gram
        </h2>
        <Buttons
          icon
          label="Follow us on the gram"
          className="hidden sm:flex"
        />
      </div>
      <section>
        <Splide
          options={{
            type: "loop",
            perPage: 5,
            perMove: 1,
            autoplay: true,
            loop: true,
            gap: "1.5rem",
            breakpoints: {
              1024: {
                perPage: 4,
              },
              768: {
                perPage: 3,
              },
            },
          }}
          aria-label="instagram posts"
        >
          {isLoading ? (
            <p>Loading posts</p>
          ) : error ? (
            <p>Error fetching posts</p>
          ) : (
            posts?.data.map((post) => (
              <div key={post.id} className="splide__slide">
                <Image
                  src={`/images/IGPost-${post.imgSrc}`}
                  alt={post.imgSrc}
                  width={200}
                  height={200}
                />
              </div>
            ))
          )}
        </Splide>
      </section>
      <Buttons icon label="Follow us on the gram" className="flex sm:hidden" />
    </div>
  );
}
