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
    price: 125.0,
  },
  {
    id: 2,
    img: "/basic-parker.jpg",
    imgAlt:
      "A man wearing a parker jacket standing sideways in front of a fence",
    product: "Basic Parker",
    quantity: 1,
    size: "s",
    price: 125.0,
  },
  {
    id: 3,
    img: "/patterned-short-sleeve-shirt.jpg",
    imgAlt:
      "A black young man wearing a patterned short sleeve shirt standing in the street",
    product: "Patterned Short Sleeve Shirt",
    quantity: 1,
    size: "s",
    price: 125.0,
  },
];

export default function ShoppingCart() {
  return (
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
              <li key={products.id}>
                <div className="flex justify-between">
                  <div className="flex gap-7">
                    <Image
                      width={79}
                      height={91}
                      alt={products.imgAlt}
                      src={`/images/products/small/${products.img}`}
                    />
                    <div>
                      <p className={["text-xl", pt_serif.className].join(" ")}>
                        {products.product}
                      </p>
                      <div className="flex gap-4">
                        <p>Qty: {products.quantity}</p>
                        <p>
                          Size:
                          <span className="uppercase">{products.size}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg">{`${formatCurrency(
                    products.price
                  )}`}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
