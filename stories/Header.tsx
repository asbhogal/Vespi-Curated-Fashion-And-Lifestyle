"use client";

import "./header.css";
import Link from "next/link";
import { lato, pt_serif } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Buttons } from "./Button";

type Status = {
  status: string;
};

interface HeaderProps {
  status?: string; // temporarily changed to string
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

type MenuType = {
  href: string;
  label: string;
};

const menu: MenuType[] = [
  {
    href: "/mens",
    label: "Mens",
  },
  {
    href: "/womens",
    label: "Womens",
  },
  {
    href: "/journal",
    label: "Journal",
  },
  {
    href: "/aboutus",
    label: "About Us",
  },
];

type CartType = {
  id: number;
  img: string;
  product: string;
  quantity: number;
  size: string;
  price: number;
};

const sampleCart: CartType[] = [
  {
    id: 1,
    img: "/basic-turtleneck.jpg",
    product: "Basic Turtleneck",
    quantity: 1,
    size: "s",
    price: 125.0,
  },
  {
    id: 2,
    img: "/basic-parker.jpg",
    product: "Basic Parker",
    quantity: 1,
    size: "s",
    price: 125.0,
  },
  {
    id: 3,
    img: "/patterned-short-sleeve-shirt.jpg",
    product: "Patterned Short Sleeve Shirt",
    quantity: 1,
    size: "s",
    price: 125.0,
  },
];
function onLogin() {
  console.log("Logged in");
}

function onLogout() {
  console.log("Logged out");
}

export const Header = ({
  status,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => {
  return (
    <header className="flex items-center justify-between p-5 lg:py-6 lg:px-20 border border-b-slate-300 w-full absolute z-10">
      <div className="flex items-center lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="bg-transparent hover:bg-transparent rounded-none p-0"
              aria-labelledby="menu-toggle"
            >
              <span id="menu-toggle" hidden>
                Menu Toggle
              </span>
              <svg
                aria-hidden="true"
                focusable="false"
                width="21"
                height="12"
                viewBox="0 0 21 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="21"
                  height="2"
                  rx="1"
                  transform="matrix(1 0 0 -1 0 2)"
                  fill="black"
                />
                <rect
                  width="21"
                  height="2"
                  rx="1"
                  transform="matrix(1 0 0 -1 0 7)"
                  fill="black"
                />
                <rect
                  width="21"
                  height="2"
                  rx="1"
                  transform="matrix(1 0 0 -1 0 12)"
                  fill="black"
                />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav>
              <ul className="flex flex-col max-w-lg w-full gap-4">
                {menu.map((menu) => (
                  <li key={menu.label}>
                    <Link
                      className={[
                        "border border-transparent hover:border-black hover:border p-2 transition",
                        lato.className,
                      ].join(" ")}
                      href={menu.href}
                    >
                      {menu.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
        <Button
          className="block lg:hidden search bg-transparent hover:bg-transparent"
          aria-labelledby="mobile-search-label"
        >
          <span id="mobile-search-label" hidden>
            Mobile Search
          </span>
          <svg
            aria-hidden="true"
            focusable="false"
            width="15"
            height="17"
            viewBox="0 0 15 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="6.5"
              cy="7.5"
              r="5.75"
              stroke="black"
              stroke-width="1.5"
            />
            <line
              y1="-0.75"
              x2="5.21116"
              y2="-0.75"
              transform="matrix(0.697461 0.716622 -0.697461 0.716622 10 13)"
              stroke="black"
              stroke-width="1.5"
            />
          </svg>
        </Button>
      </div>
      <div className="flex header-left">
        <svg
          width="64" // adjusted value directly - will review
          height="26" // adjusted value directly - will review
          viewBox="0 0 302 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M69.76 11.312C67.712 10.8853 65.792 10.416 64 9.904C62.208 9.30666 60.4587 8.70933 58.752 8.112V4.39999H87.552V8.112C85.0773 9.47733 82.0053 10.544 78.336 11.312L49.408 94L42.368 95.536L9.728 11.312C8.02133 10.8853 6.35733 10.416 4.736 9.904C3.11467 9.30666 1.536 8.70933 0 8.112V4.39999H33.92V8.112C32.4693 8.70933 30.848 9.30666 29.056 9.904C27.264 10.416 25.3867 10.8853 23.424 11.312L45.312 69.808L48 80.048H48.256L50.816 69.552L69.76 11.312ZM132.963 85.04C132.28 86.4907 131.214 87.856 129.763 89.136C128.312 90.416 126.648 91.5253 124.771 92.464C122.894 93.4027 120.846 94.128 118.627 94.64C116.408 95.2373 114.147 95.536 111.843 95.536C106.808 95.536 102.371 94.768 98.531 93.232C94.691 91.6107 91.491 89.3493 88.931 86.448C86.371 83.4613 84.4083 79.92 83.043 75.824C81.763 71.728 81.123 67.12 81.123 62C81.123 51.0773 83.6403 42.7573 88.675 37.04C93.7097 31.3227 100.835 28.464 110.051 28.464C113.038 28.464 115.982 28.8907 118.883 29.744C121.784 30.512 124.344 31.8347 126.563 33.712C128.867 35.5893 130.702 38.1067 132.067 41.264C133.518 44.336 134.243 48.176 134.243 52.784C134.243 54.2347 134.158 55.728 133.987 57.264C133.902 58.7147 133.688 60.2933 133.347 62H93.411C93.411 65.584 93.8377 68.9547 94.691 72.112C95.6297 75.184 96.995 77.872 98.787 80.176C100.579 82.48 102.84 84.3147 105.571 85.68C108.302 86.96 111.502 87.6 115.171 87.6C118.158 87.6 121.187 87.1733 124.259 86.32C127.331 85.4667 129.635 84.3573 131.171 82.992L132.963 85.04ZM109.539 34.096C104.675 34.096 100.963 35.76 98.403 39.088C95.843 42.3307 94.307 48.0907 93.795 56.368H121.955C122.04 55.6 122.083 54.8747 122.083 54.192C122.168 53.424 122.211 52.6987 122.211 52.016C122.211 46.5547 121.187 42.2027 119.139 38.96C117.091 35.7173 113.891 34.096 109.539 34.096ZM178.01 79.408C178.01 77.0187 177.242 75.0133 175.706 73.392C174.255 71.6853 172.378 70.1067 170.074 68.656C167.77 67.2053 165.295 65.7973 162.65 64.432C160.09 63.0667 157.658 61.488 155.354 59.696C153.05 57.8187 151.13 55.6853 149.594 53.296C148.143 50.9067 147.418 47.9627 147.418 44.464C147.418 42.16 147.93 40.0267 148.954 38.064C150.063 36.1013 151.514 34.4373 153.306 33.072C155.098 31.6213 157.189 30.512 159.578 29.744C161.967 28.8907 164.527 28.464 167.258 28.464C171.866 28.464 175.621 28.72 178.522 29.232C181.509 29.744 184.367 30.4693 187.098 31.408C186.757 34.1387 186.33 36.912 185.818 39.728C185.391 42.4587 184.751 45.2747 183.898 48.176H180.698L175.834 35.12C174.81 34.6933 173.658 34.4373 172.378 34.352C171.098 34.1813 169.775 34.096 168.41 34.096C166.874 34.096 165.509 34.3947 164.314 34.992C163.205 35.504 162.223 36.1867 161.37 37.04C160.602 37.8933 160.005 38.8747 159.578 39.984C159.151 41.0933 158.938 42.2027 158.938 43.312C158.938 45.616 159.663 47.6213 161.114 49.328C162.65 50.9493 164.57 52.4853 166.874 53.936C169.178 55.3013 171.61 56.6667 174.17 58.032C176.815 59.3973 179.29 60.9333 181.594 62.64C183.898 64.3467 185.775 66.352 187.226 68.656C188.762 70.8747 189.53 73.5627 189.53 76.72C189.53 79.6213 188.89 82.224 187.61 84.528C186.415 86.832 184.709 88.7947 182.49 90.416C180.357 92.0373 177.839 93.2747 174.938 94.128C172.122 95.0667 169.093 95.536 165.85 95.536C162.181 95.536 158.81 95.1947 155.738 94.512C152.666 93.9147 149.466 93.0187 146.138 91.824C146.309 88.752 146.693 85.808 147.29 82.992C147.887 80.0907 148.655 77.3173 149.594 74.672H152.794L158.426 88.624C159.365 89.3067 160.474 89.6907 161.754 89.776C163.119 89.8613 164.357 89.904 165.466 89.904C169.221 89.904 172.25 88.88 174.554 86.832C176.858 84.784 178.01 82.3093 178.01 79.408ZM228.009 119.6H199.593V116.4C202.494 115.035 205.31 114.011 208.041 113.328V37.424L199.593 36.4V33.072C202.324 31.8773 205.097 30.9387 207.913 30.256C210.814 29.488 213.63 28.8907 216.361 28.464H219.561V42.8H219.689C221.396 38.448 223.785 34.992 226.857 32.432C229.929 29.7867 233.94 28.464 238.889 28.464C246.484 28.464 252.372 30.9813 256.553 36.016C260.734 41.0507 262.825 49.2427 262.825 60.592C262.825 65.968 262.1 70.832 260.649 75.184C259.284 79.536 257.278 83.2053 254.633 86.192C252.073 89.1787 248.916 91.4827 245.161 93.104C241.492 94.7253 237.396 95.536 232.873 95.536C229.716 95.536 227.241 95.3227 225.449 94.896C223.657 94.5547 221.694 93.9147 219.561 92.976V113.328C220.926 113.499 222.292 113.797 223.657 114.224C225.022 114.736 226.473 115.461 228.009 116.4V119.6ZM234.793 36.4C230.612 36.4 227.284 37.7227 224.809 40.368C222.334 43.0133 220.585 46.64 219.561 51.248V87.088C221.097 88.0267 222.804 88.752 224.681 89.264C226.644 89.6907 229.161 89.904 232.233 89.904C235.049 89.904 237.566 89.1787 239.785 87.728C242.089 86.2773 244.009 84.2293 245.545 81.584C247.166 78.9387 248.404 75.8667 249.257 72.368C250.11 68.784 250.537 64.8587 250.537 60.592C250.537 57.0933 250.238 53.8933 249.641 50.992C249.129 48.0053 248.233 45.4453 246.953 43.312C245.758 41.0933 244.137 39.3867 242.089 38.192C240.126 36.9973 237.694 36.4 234.793 36.4ZM301.789 94H273.373V90.8C274.653 90.1173 275.976 89.5627 277.341 89.136C278.706 88.624 280.2 88.1547 281.821 87.728V37.424L273.373 36.4V33.072C275.848 32.048 278.536 31.152 281.437 30.384C284.338 29.616 287.24 28.976 290.141 28.464H293.341V87.728C295.048 88.1547 296.584 88.624 297.949 89.136C299.314 89.5627 300.594 90.1173 301.789 90.8V94ZM279.389 8.24C279.389 5.936 280.114 4.10133 281.565 2.73599C283.101 1.37066 285.106 0.687996 287.581 0.687996C290.056 0.687996 292.018 1.37066 293.469 2.73599C294.92 4.10133 295.645 5.936 295.645 8.24C295.645 10.544 294.92 12.3787 293.469 13.744C292.018 15.024 290.056 15.664 287.581 15.664C285.106 15.664 283.101 15.024 281.565 13.744C280.114 12.3787 279.389 10.544 279.389 8.24Z"
            fill="black"
          />
        </svg>
      </div>
      <div className="hidden lg:block header-middle">
        <nav>
          <ul className="flex max-w-lg w-full gap-16">
            {menu.map((menu) => (
              <li key={menu.label}>
                <Link
                  className={[
                    "border border-transparent hover:border-black hover:border p-2 transition",
                    lato.className,
                  ].join(" ")}
                  href={menu.href}
                >
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-8 header-right">
        <Button
          className="hidden lg:block search bg-transparent hover:bg-transparent rounded-none border border-transparent hover:border-black transition"
          aria-labelledby="search-label"
        >
          <span id="search-label" hidden>
            Search
          </span>
          <svg
            aria-hidden="true"
            focusable="false"
            width="15"
            height="17"
            viewBox="0 0 15 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="6.5"
              cy="7.5"
              r="5.75"
              stroke="black"
              stroke-width="1.5"
            />
            <line
              y1="-0.75"
              x2="5.21116"
              y2="-0.75"
              transform="matrix(0.697461 0.716622 -0.697461 0.716622 10 13)"
              stroke="black"
              stroke-width="1.5"
            />
          </svg>
        </Button>
        <svg
          className="hidden lg:block"
          width="1"
          height="21"
          viewBox="0 0 1 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.5"
            y1="-2.18557e-08"
            x2="0.500001"
            y2="21"
            stroke="black"
            stroke-opacity="0.2"
          />
        </svg>
        {status ? (
          <>
            <Link
              className={[
                "hidden lg:block border border-transparent hover:border-black hover:border p-2 transition",
                lato.className,
              ].join(" ")}
              href="#"
              onClick={onLogout}
            >
              Log Out
            </Link>
          </>
        ) : (
          <>
            <Link
              className={[
                "hidden lg:block border border-transparent hover:border-black hover:border p-2 transition",
                lato.className,
              ].join(" ")}
              href="#"
              onClick={onLogin}
            >
              Log In
            </Link>
          </>
        )}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className={[
                "bg-[#f1eadc] text-black font-bold hover:bg-black hover:text-white rounded-full h-12 w-12 p-8",
                lato.className,
              ].join("")}
            >
              1
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex items-center gap-5">
              <span
                className={[
                  "flex items-center justify-center border border-black rounded-full h-12 w-12 font-bold text-sm",
                  lato.className,
                ].join(" ")}
              >
                3
              </span>
              <p className={["font-bold", pt_serif.className].join(" ")}>
                Items in My Bag
              </p>
            </div>
            <div>
              <ul>
                {sampleCart.map((products) => (
                  <li key={products.id}></li>
                ))}
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
