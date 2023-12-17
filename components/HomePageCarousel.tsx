"use client";

import Image from "next/image";
import "@splidejs/react-splide/css";

// @ts-ignore - temporarily added to ignore missing declarations file
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import {
  antonio,
  chakra_petch,
  pt_serif,
  roboto_condensed,
  unna,
} from "@/lib/types";

export default function HomePageCarousel() {
  const [direction, setDirection] = useState("");
  // const [wheel, setWheel] = useState(false);

  useEffect(() => {
    function handleResize() {
      const newDirection = window.innerWidth < 768 ? "ltr" : "ttb";
      // const wheelInteraction = window.innerWidth < 768;
      setDirection(newDirection);
      // setWheel(wheelInteraction);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Splide
        className="max-w-[160rem] w-full"
        options={{
          type: "loop",
          // autoplay: true,
          arrows: false,
          height: "100dvh",
          direction: direction,
          paginationDirection: direction,
          wheel: true,
        }}
      >
        <SplideSlide className="grid grid-rows-1 md:grid-cols-2 items-stretch justify-items-center md:justify-items-start">
          <div className="max-w-[28rem] w-full flex flex-col items-center lg:items-start text-center lg:text-left justify-center lg:justify-end order-2 md:order-1 py-6 lg:h-[100vh] lg:pl-16 p-6">
            <p
              className={[
                "uppercase font-serif text-[0.8125rem] mb-4",
                pt_serif.className,
              ].join(" ")}
            >
              Sebastian <span className="font-sans mx-3">&times;</span>Takagawa
            </p>
            <h2 className="heading-2">Elegance & Comfort</h2>
            <div className="flex flex-col items-center lg:items-start gap-5 md:gap-10">
              <p className={["text-[#6a6161]", pt_serif.className].join(" ")}>
                Our new range of overcoats, made from 100%
                <span className="italic">&#32; cashmere</span>, ethically
                sourced and without the price tag of old fashion houses.
              </p>
              <svg
                width="61"
                height="61"
                viewBox="0 0 61 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.5 60C46.7924 60 60 46.7924 60 30.5C60 14.2076 46.7924 1 30.5 1C14.2076 1 1 14.2076 1 30.5C1 46.7924 14.2076 60 30.5 60ZM30.5 61C47.3447 61 61 47.3447 61 30.5C61 13.6553 47.3447 0 30.5 0C13.6553 0 0 13.6553 0 30.5C0 47.3447 13.6553 61 30.5 61Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.99992 51L50.9999 7.99999L51.707 8.70709L8.70703 51.7071L7.99992 51Z"
                  fill="black"
                />
                <path
                  d="M18.2148 24V22.998H13.8965L15.4316 21.4395C17.377 19.5293 18.0566 18.6094 18.0566 17.4961C18.0566 16.207 17.1484 15.3984 15.8008 15.3984C14.4707 15.3984 13.5684 16.1426 13.2168 17.3262L13.4688 17.4199C13.7793 16.6055 14.4297 16.1133 15.291 16.1133C16.2051 16.1133 16.8145 16.7754 16.8145 17.8066C16.8145 18.9199 16.252 19.8691 14.5645 21.8086L13.2695 23.2734V24H18.2148Z"
                  fill="black"
                />
                <path
                  d="M19.2871 19.7695C19.2871 22.4824 21.3672 24.1406 23.5117 24.1406C26.0723 24.1406 27.7422 22.1836 27.7422 19.7637C27.7422 17.0508 25.6562 15.3984 23.5117 15.3984C20.9512 15.3984 19.2871 17.3496 19.2871 19.7695ZM20.6992 19.6699C20.6992 17.502 21.4961 15.7969 23.4473 15.7969C25.2227 15.7969 26.3242 17.5957 26.3242 19.8633C26.3242 22.0312 25.5332 23.7422 23.582 23.7422C21.8066 23.7422 20.6992 21.9375 20.6992 19.6699Z"
                  fill="black"
                />
                <path
                  d="M37.2148 45V43.998H32.8965L34.4316 42.4395C36.377 40.5293 37.0566 39.6094 37.0566 38.4961C37.0566 37.207 36.1484 36.3984 34.8008 36.3984C33.4707 36.3984 32.5684 37.1426 32.2168 38.3262L32.4688 38.4199C32.7793 37.6055 33.4297 37.1133 34.291 37.1133C35.2051 37.1133 35.8145 37.7754 35.8145 38.8066C35.8145 39.9199 35.252 40.8691 33.5645 42.8086L32.2695 44.2734V45H37.2148Z"
                  fill="black"
                />
                <path
                  d="M38.2871 40.7695C38.2871 43.4824 40.3672 45.1406 42.5117 45.1406C45.0723 45.1406 46.7422 43.1836 46.7422 40.7637C46.7422 38.0508 44.6562 36.3984 42.5117 36.3984C39.9512 36.3984 38.2871 38.3496 38.2871 40.7695ZM39.6992 40.6699C39.6992 38.502 40.4961 36.7969 42.4473 36.7969C44.2227 36.7969 45.3242 38.5957 45.3242 40.8633C45.3242 43.0312 44.5332 44.7422 42.582 44.7422C40.8066 44.7422 39.6992 42.9375 39.6992 40.6699Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <Image
            priority
            src="/images/home/elegance-and-comfort.jpg"
            alt="image"
            height={1200}
            width={960}
            className="hidden lg:block order-2 p-16 bg-[#f1eadc]"
            style={{ height: "100%", objectFit: "contain", width: "100%" }}
          />
          <Image
            priority
            src="/images/home/elegance-and-comfort-mobile.jpg"
            alt="image"
            height={1200}
            width={960}
            className="block lg:hidden order-1"
            style={{ height: "100%", objectFit: "contain", width: "100%" }}
          />
        </SplideSlide>
        <SplideSlide className="grid grid-rows-1 md:grid-cols-2 items-stretch justify-items-center md:justify-items-start">
          <div className="max-w-[28rem] w-full flex flex-col items-center md:items-start text-center lg:text-left justify-center lg:justify-end order-2 md:order-1 py-6 md:h-[100vh] lg:pl-16 p-6">
            <h2
              className={[
                "heading-2 lg:relative lg:top-[-15%] tracking-tight",
                unna.className,
              ].join(" ")}
            >
              Womens Spring Range
            </h2>
            <div className="flex flex-col items-center lg:items-start gap-5 md:gap-10">
              <p className="font-serif text-[#6a6161]">
                Our new range of overcoats, made from 100%
                <span className="italic">&#32; cashmere</span>, ethically
                sourced and without the price tag of old fashion houses.
              </p>
              <svg
                width="61"
                height="61"
                viewBox="0 0 61 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.5 60C46.7924 60 60 46.7924 60 30.5C60 14.2076 46.7924 1 30.5 1C14.2076 1 1 14.2076 1 30.5C1 46.7924 14.2076 60 30.5 60ZM30.5 61C47.3447 61 61 47.3447 61 30.5C61 13.6553 47.3447 0 30.5 0C13.6553 0 0 13.6553 0 30.5C0 47.3447 13.6553 61 30.5 61Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.99992 51L50.9999 7.99999L51.707 8.70709L8.70703 51.7071L7.99992 51Z"
                  fill="black"
                />
                <path
                  d="M18.2148 24V22.998H13.8965L15.4316 21.4395C17.377 19.5293 18.0566 18.6094 18.0566 17.4961C18.0566 16.207 17.1484 15.3984 15.8008 15.3984C14.4707 15.3984 13.5684 16.1426 13.2168 17.3262L13.4688 17.4199C13.7793 16.6055 14.4297 16.1133 15.291 16.1133C16.2051 16.1133 16.8145 16.7754 16.8145 17.8066C16.8145 18.9199 16.252 19.8691 14.5645 21.8086L13.2695 23.2734V24H18.2148Z"
                  fill="black"
                />
                <path
                  d="M19.2871 19.7695C19.2871 22.4824 21.3672 24.1406 23.5117 24.1406C26.0723 24.1406 27.7422 22.1836 27.7422 19.7637C27.7422 17.0508 25.6562 15.3984 23.5117 15.3984C20.9512 15.3984 19.2871 17.3496 19.2871 19.7695ZM20.6992 19.6699C20.6992 17.502 21.4961 15.7969 23.4473 15.7969C25.2227 15.7969 26.3242 17.5957 26.3242 19.8633C26.3242 22.0312 25.5332 23.7422 23.582 23.7422C21.8066 23.7422 20.6992 21.9375 20.6992 19.6699Z"
                  fill="black"
                />
                <path
                  d="M37.2148 45V43.998H32.8965L34.4316 42.4395C36.377 40.5293 37.0566 39.6094 37.0566 38.4961C37.0566 37.207 36.1484 36.3984 34.8008 36.3984C33.4707 36.3984 32.5684 37.1426 32.2168 38.3262L32.4688 38.4199C32.7793 37.6055 33.4297 37.1133 34.291 37.1133C35.2051 37.1133 35.8145 37.7754 35.8145 38.8066C35.8145 39.9199 35.252 40.8691 33.5645 42.8086L32.2695 44.2734V45H37.2148Z"
                  fill="black"
                />
                <path
                  d="M38.2871 40.7695C38.2871 43.4824 40.3672 45.1406 42.5117 45.1406C45.0723 45.1406 46.7422 43.1836 46.7422 40.7637C46.7422 38.0508 44.6562 36.3984 42.5117 36.3984C39.9512 36.3984 38.2871 38.3496 38.2871 40.7695ZM39.6992 40.6699C39.6992 38.502 40.4961 36.7969 42.4473 36.7969C44.2227 36.7969 45.3242 38.5957 45.3242 40.8633C45.3242 43.0312 44.5332 44.7422 42.582 44.7422C40.8066 44.7422 39.6992 42.9375 39.6992 40.6699Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <Image
            priority
            src="/images/home/womens-spring-range.jpg"
            alt="image"
            height={1200}
            width={960}
            className="hidden lg:block order-2"
            style={{ height: "100%", objectFit: "cover", width: "100%" }}
          />
          <Image
            priority
            src="/images/home/womens-spring-range-mobile.jpg"
            alt="image"
            height={1200}
            width={960}
            className="block lg:hidden order-1"
            style={{ height: "100%", objectFit: "contain", width: "100%" }}
          />
        </SplideSlide>
        <SplideSlide className="grid grid-rows-1 md:grid-cols-2 items-stretch justify-items-center md:justify-items-start">
          <div className="max-w-[28rem] w-full flex flex-col items-center md:items-start text-center lg:text-left justify-center lg:justify-end order-2 md:order-1 py-6 md:h-[100vh] lg:pl-16 p-6">
            <h2
              className={[
                "heading-2 lg:relative lg:top-[-15%] uppercase",
                chakra_petch.className,
              ].join(" ")}
            >
              Winter Warmers
            </h2>
            <div className="flex flex-col items-center lg:items-start gap-5 md:gap-10">
              <p className="font-serif text-[#6a6161]">
                Our new range of overcoats, made from 100%
                <span className="italic">&#32; cashmere</span>, ethically
                sourced and without the price tag of old fashion houses.
              </p>
              <svg
                width="61"
                height="61"
                viewBox="0 0 61 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.5 60C46.7924 60 60 46.7924 60 30.5C60 14.2076 46.7924 1 30.5 1C14.2076 1 1 14.2076 1 30.5C1 46.7924 14.2076 60 30.5 60ZM30.5 61C47.3447 61 61 47.3447 61 30.5C61 13.6553 47.3447 0 30.5 0C13.6553 0 0 13.6553 0 30.5C0 47.3447 13.6553 61 30.5 61Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.99992 51L50.9999 7.99999L51.707 8.70709L8.70703 51.7071L7.99992 51Z"
                  fill="black"
                />
                <path
                  d="M18.2148 24V22.998H13.8965L15.4316 21.4395C17.377 19.5293 18.0566 18.6094 18.0566 17.4961C18.0566 16.207 17.1484 15.3984 15.8008 15.3984C14.4707 15.3984 13.5684 16.1426 13.2168 17.3262L13.4688 17.4199C13.7793 16.6055 14.4297 16.1133 15.291 16.1133C16.2051 16.1133 16.8145 16.7754 16.8145 17.8066C16.8145 18.9199 16.252 19.8691 14.5645 21.8086L13.2695 23.2734V24H18.2148Z"
                  fill="black"
                />
                <path
                  d="M19.2871 19.7695C19.2871 22.4824 21.3672 24.1406 23.5117 24.1406C26.0723 24.1406 27.7422 22.1836 27.7422 19.7637C27.7422 17.0508 25.6562 15.3984 23.5117 15.3984C20.9512 15.3984 19.2871 17.3496 19.2871 19.7695ZM20.6992 19.6699C20.6992 17.502 21.4961 15.7969 23.4473 15.7969C25.2227 15.7969 26.3242 17.5957 26.3242 19.8633C26.3242 22.0312 25.5332 23.7422 23.582 23.7422C21.8066 23.7422 20.6992 21.9375 20.6992 19.6699Z"
                  fill="black"
                />
                <path
                  d="M37.2148 45V43.998H32.8965L34.4316 42.4395C36.377 40.5293 37.0566 39.6094 37.0566 38.4961C37.0566 37.207 36.1484 36.3984 34.8008 36.3984C33.4707 36.3984 32.5684 37.1426 32.2168 38.3262L32.4688 38.4199C32.7793 37.6055 33.4297 37.1133 34.291 37.1133C35.2051 37.1133 35.8145 37.7754 35.8145 38.8066C35.8145 39.9199 35.252 40.8691 33.5645 42.8086L32.2695 44.2734V45H37.2148Z"
                  fill="black"
                />
                <path
                  d="M38.2871 40.7695C38.2871 43.4824 40.3672 45.1406 42.5117 45.1406C45.0723 45.1406 46.7422 43.1836 46.7422 40.7637C46.7422 38.0508 44.6562 36.3984 42.5117 36.3984C39.9512 36.3984 38.2871 38.3496 38.2871 40.7695ZM39.6992 40.6699C39.6992 38.502 40.4961 36.7969 42.4473 36.7969C44.2227 36.7969 45.3242 38.5957 45.3242 40.8633C45.3242 43.0312 44.5332 44.7422 42.582 44.7422C40.8066 44.7422 39.6992 42.9375 39.6992 40.6699Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <Image
            priority
            src="/images/home/winter-warmers.jpg"
            alt="image"
            height={1200}
            width={960}
            className="hidden lg:block order-2"
            style={{ height: "100%", objectFit: "cover", width: "100%" }}
          />
          <Image
            priority
            src="/images/home/winter-warmers-mobile.jpg"
            alt="image"
            height={1200}
            width={960}
            className="block lg:hidden order-1"
            style={{ height: "100%", objectFit: "contain", width: "100%" }}
          />
        </SplideSlide>
        <SplideSlide className="grid grid-rows-1 md:grid-cols-2 items-stretch justify-items-center md:justify-items-start">
          <div className="max-w-[28rem] w-full flex flex-col items-center md:items-start text-center lg:text-left justify-center lg:justify-end order-2 md:order-1 py-6 md:h-[100vh] lg:pl-16 p-6">
            <h2
              className={[
                "heading-2 lg:relative lg:top-[-15%] uppercase font-medium tracking-tighter",
                roboto_condensed.className,
              ].join(" ")}
            >
              New Womens Range
            </h2>
            <div className="flex flex-col items-center lg:items-start gap-5 md:gap-10">
              <p className="font-serif text-[#6a6161]">
                Our new range of overcoats, made from 100%
                <span className="italic">&#32; cashmere</span>, ethically
                sourced and without the price tag of old fashion houses.
              </p>
              <svg
                width="61"
                height="61"
                viewBox="0 0 61 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.5 60C46.7924 60 60 46.7924 60 30.5C60 14.2076 46.7924 1 30.5 1C14.2076 1 1 14.2076 1 30.5C1 46.7924 14.2076 60 30.5 60ZM30.5 61C47.3447 61 61 47.3447 61 30.5C61 13.6553 47.3447 0 30.5 0C13.6553 0 0 13.6553 0 30.5C0 47.3447 13.6553 61 30.5 61Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.99992 51L50.9999 7.99999L51.707 8.70709L8.70703 51.7071L7.99992 51Z"
                  fill="black"
                />
                <path
                  d="M18.2148 24V22.998H13.8965L15.4316 21.4395C17.377 19.5293 18.0566 18.6094 18.0566 17.4961C18.0566 16.207 17.1484 15.3984 15.8008 15.3984C14.4707 15.3984 13.5684 16.1426 13.2168 17.3262L13.4688 17.4199C13.7793 16.6055 14.4297 16.1133 15.291 16.1133C16.2051 16.1133 16.8145 16.7754 16.8145 17.8066C16.8145 18.9199 16.252 19.8691 14.5645 21.8086L13.2695 23.2734V24H18.2148Z"
                  fill="black"
                />
                <path
                  d="M19.2871 19.7695C19.2871 22.4824 21.3672 24.1406 23.5117 24.1406C26.0723 24.1406 27.7422 22.1836 27.7422 19.7637C27.7422 17.0508 25.6562 15.3984 23.5117 15.3984C20.9512 15.3984 19.2871 17.3496 19.2871 19.7695ZM20.6992 19.6699C20.6992 17.502 21.4961 15.7969 23.4473 15.7969C25.2227 15.7969 26.3242 17.5957 26.3242 19.8633C26.3242 22.0312 25.5332 23.7422 23.582 23.7422C21.8066 23.7422 20.6992 21.9375 20.6992 19.6699Z"
                  fill="black"
                />
                <path
                  d="M37.2148 45V43.998H32.8965L34.4316 42.4395C36.377 40.5293 37.0566 39.6094 37.0566 38.4961C37.0566 37.207 36.1484 36.3984 34.8008 36.3984C33.4707 36.3984 32.5684 37.1426 32.2168 38.3262L32.4688 38.4199C32.7793 37.6055 33.4297 37.1133 34.291 37.1133C35.2051 37.1133 35.8145 37.7754 35.8145 38.8066C35.8145 39.9199 35.252 40.8691 33.5645 42.8086L32.2695 44.2734V45H37.2148Z"
                  fill="black"
                />
                <path
                  d="M38.2871 40.7695C38.2871 43.4824 40.3672 45.1406 42.5117 45.1406C45.0723 45.1406 46.7422 43.1836 46.7422 40.7637C46.7422 38.0508 44.6562 36.3984 42.5117 36.3984C39.9512 36.3984 38.2871 38.3496 38.2871 40.7695ZM39.6992 40.6699C39.6992 38.502 40.4961 36.7969 42.4473 36.7969C44.2227 36.7969 45.3242 38.5957 45.3242 40.8633C45.3242 43.0312 44.5332 44.7422 42.582 44.7422C40.8066 44.7422 39.6992 42.9375 39.6992 40.6699Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <Image
            priority
            src="/images/home/new-womens-range.jpg"
            alt="image"
            height={1200}
            width={960}
            className="hidden lg:block order-2"
            style={{ height: "100%", objectFit: "cover", width: "100%" }}
          />
          <Image
            priority
            src="/images/home/new-womens-range-mobile.jpg"
            alt="image"
            height={1200}
            width={960}
            className="block lg:hidden order-1"
            style={{ height: "100%", objectFit: "contain", width: "100%" }}
          />
        </SplideSlide>
        <SplideSlide className="grid grid-rows-1 md:grid-cols-2 items-stretch justify-items-center md:justify-items-start">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center lg:justify-end order-2 md:order-1 py-6 md:h-[100vh] lg:pl-16 p-6">
            <h2
              className={[
                "heading-2 lg:relative lg:top-[-15%] uppercase font-semibold text-antonio",
                antonio.className,
              ].join(" ")}
            >
              Fall Season
            </h2>
            <div className="max-w-[22.5rem] w-full flex flex-col items-center lg:items-start gap-5 md:gap-10">
              <p className="font-serif text-[#6a6161]">
                Our new range of overcoats, made from 100%
                <span className="italic">&#32; cashmere</span>, ethically
                sourced and without the price tag of old fashion houses.
              </p>
              <svg
                width="61"
                height="61"
                viewBox="0 0 61 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.5 60C46.7924 60 60 46.7924 60 30.5C60 14.2076 46.7924 1 30.5 1C14.2076 1 1 14.2076 1 30.5C1 46.7924 14.2076 60 30.5 60ZM30.5 61C47.3447 61 61 47.3447 61 30.5C61 13.6553 47.3447 0 30.5 0C13.6553 0 0 13.6553 0 30.5C0 47.3447 13.6553 61 30.5 61Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.99992 51L50.9999 7.99999L51.707 8.70709L8.70703 51.7071L7.99992 51Z"
                  fill="black"
                />
                <path
                  d="M18.2148 24V22.998H13.8965L15.4316 21.4395C17.377 19.5293 18.0566 18.6094 18.0566 17.4961C18.0566 16.207 17.1484 15.3984 15.8008 15.3984C14.4707 15.3984 13.5684 16.1426 13.2168 17.3262L13.4688 17.4199C13.7793 16.6055 14.4297 16.1133 15.291 16.1133C16.2051 16.1133 16.8145 16.7754 16.8145 17.8066C16.8145 18.9199 16.252 19.8691 14.5645 21.8086L13.2695 23.2734V24H18.2148Z"
                  fill="black"
                />
                <path
                  d="M19.2871 19.7695C19.2871 22.4824 21.3672 24.1406 23.5117 24.1406C26.0723 24.1406 27.7422 22.1836 27.7422 19.7637C27.7422 17.0508 25.6562 15.3984 23.5117 15.3984C20.9512 15.3984 19.2871 17.3496 19.2871 19.7695ZM20.6992 19.6699C20.6992 17.502 21.4961 15.7969 23.4473 15.7969C25.2227 15.7969 26.3242 17.5957 26.3242 19.8633C26.3242 22.0312 25.5332 23.7422 23.582 23.7422C21.8066 23.7422 20.6992 21.9375 20.6992 19.6699Z"
                  fill="black"
                />
                <path
                  d="M37.2148 45V43.998H32.8965L34.4316 42.4395C36.377 40.5293 37.0566 39.6094 37.0566 38.4961C37.0566 37.207 36.1484 36.3984 34.8008 36.3984C33.4707 36.3984 32.5684 37.1426 32.2168 38.3262L32.4688 38.4199C32.7793 37.6055 33.4297 37.1133 34.291 37.1133C35.2051 37.1133 35.8145 37.7754 35.8145 38.8066C35.8145 39.9199 35.252 40.8691 33.5645 42.8086L32.2695 44.2734V45H37.2148Z"
                  fill="black"
                />
                <path
                  d="M38.2871 40.7695C38.2871 43.4824 40.3672 45.1406 42.5117 45.1406C45.0723 45.1406 46.7422 43.1836 46.7422 40.7637C46.7422 38.0508 44.6562 36.3984 42.5117 36.3984C39.9512 36.3984 38.2871 38.3496 38.2871 40.7695ZM39.6992 40.6699C39.6992 38.502 40.4961 36.7969 42.4473 36.7969C44.2227 36.7969 45.3242 38.5957 45.3242 40.8633C45.3242 43.0312 44.5332 44.7422 42.582 44.7422C40.8066 44.7422 39.6992 42.9375 39.6992 40.6699Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <Image
            priority
            src="/images/home/fall-season.jpg"
            alt="image"
            height={1200}
            width={960}
            className="hidden lg:block order-2"
            style={{ height: "100%", objectFit: "cover", width: "100%" }}
          />
          <Image
            priority
            src="/images/home/fall-season-mobile.jpg"
            alt="image"
            height={1200}
            width={960}
            className="block lg:hidden order-1"
            style={{ height: "100%", objectFit: "contain", width: "100%" }}
          />
        </SplideSlide>
      </Splide>
    </main>
  );
}
