"use client";

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
import Image from "next/image";
import { formatCurrency } from "@/utils/formatCurrency";
import { pt_serif, lato } from "@/lib/types";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Buttons } from "@/components/Button";
import Link from "next/link";

type CartType = {
  id: number;
  img: string;
  imgAlt: string;
  product: string;
  quantity: number;
  size: string;
  price: number;
};

const sampleCart: CartType[] = [
  {
    id: 1,
    img: "/basic-turtleneck.jpg",
    imgAlt: "A black middle-aged man wearing a black turtleneck",
    product: "Basic Turtleneck",
    quantity: 1,
    size: "s",
    price: 125,
  },
  {
    id: 2,
    img: "/basic-parker.jpg",
    imgAlt:
      "A man wearing a parker jacket standing sideways in front of a fence",
    product: "Basic Parker",
    quantity: 1,
    size: "s",
    price: 125,
  },
  {
    id: 3,
    img: "/patterned-short-sleeve-shirt.jpg",
    imgAlt:
      "A black young man wearing a patterned short sleeve shirt standing in the street",
    product: "Patterned Short Sleeve Shirt",
    quantity: 1,
    size: "s",
    price: 125,
  },
];

export default function ShoppingCart() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className={[
            "bg-[#f1eadc] text-black font-bold hover:bg-black hover:text-white rounded-full h-7 w-7 lg:h-12 lg:w-12 p-0 lg:p-8",
            lato.className,
          ].join("")}
        >
          1
        </Button>
      </SheetTrigger>
      <SheetContent
        className="max-w-[24rem] w-full h-auto overflow-y-scroll"
        side="right"
      >
        <div className="flex items-center gap-5">
          <span
            className={[
              "flex items-center justify-center border border-[#545454] rounded-full h-12 w-12 font-bold text-sm",
              lato.className,
            ].join(" ")}
          >
            3
          </span>
          <p className={["font-bold text-xl", pt_serif.className].join(" ")}>
            Items in My Bag
          </p>
        </div>
        <Separator className="h-[0.0625rem] bg-[#e2e2e2] my-6" />
        <div>
          <ul>
            {sampleCart.map((products) => (
              <li key={products.id}>
                <div className="grid grid-cols-3 gap-5">
                  <Image
                    width={149}
                    height={172}
                    alt={products.imgAlt}
                    src={`/images/products/small/${products.img}`}
                  />
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                      <p className={["text-xl", pt_serif.className].join(" ")}>
                        {products.product}
                      </p>
                      <div className="flex gap-3">
                        <p className={["text-sm", lato.className].join(" ")}>
                          Qty: {products.quantity}
                        </p>
                        <p className={["text-sm", lato.className].join(" ")}>
                          Size:
                          <span className="uppercase">{products.size}</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <p
                        className={[
                          "text-sm text-[#595959]",
                          lato.className,
                        ].join(" ")}
                      >
                        Edit
                      </p>
                      <Separator className="h-[0.0625rem] w-2 bg-[#595959]" />
                      <p
                        className={[
                          "text-sm text-[#595959]",
                          lato.className,
                        ].join(" ")}
                      >
                        Remove
                      </p>
                    </div>
                  </div>
                  <p
                    className={["text-lg", pt_serif.className].join(" ")}
                  >{`${formatCurrency(products.price)}`}</p>
                </div>
                <Separator className="h-[0.0625rem] bg-[#e2e2e2] my-6" />
              </li>
            ))}
          </ul>
          <div>
            <div className="flex justify-between mb-8">
              <p className={["text-[1.0625rem]", pt_serif.className].join(" ")}>
                Sub-total
              </p>
              <p className={["text-[1.0625rem]", pt_serif.className].join(" ")}>
                $375
              </p>
            </div>
            <div className="flex items-center gap-9">
              <Link
                href="#"
                className={[
                  "text-[1.0625rem] border-b border-black",
                  pt_serif.className,
                ].join(" ")}
              >
                View Bag
              </Link>
              <Buttons primary label="Check Out" className="flex-1" />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
