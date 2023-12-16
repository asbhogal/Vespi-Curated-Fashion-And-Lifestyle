// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css";
import { Buttons } from "./Button";
import { pt_serif } from "@/lib/types";

type IGPostType = {
  id: number;
  imgSrc: string;
  imgAlt: string;
};

type IGResponse = {
  data: IGPostType[];
};

export default async function Page() {
  const getData = async (): Promise<IGResponse> => {
    const res = await fetch("https://vespi-fashion.vercel.app/api/IG");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  };

  try {
    const posts = await getData();
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
            {posts.data.map((post) => (
              <SplideSlide key={post.id}>
                <Image
                  src={`/images/IGPost-${post.imgSrc}`}
                  alt={post.imgSrc}
                  width={200}
                  height={200}
                />
              </SplideSlide>
            ))}
          </Splide>
        </section>
        <Buttons
          icon
          label="Follow us on the gram"
          className="flex sm:hidden"
        />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:");
    return <main>Error fetching data</main>;
  }
}
