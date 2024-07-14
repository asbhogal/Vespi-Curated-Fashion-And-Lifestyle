"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Buttons } from "./Button";
import { toast } from "sonner";
import Link from "next/link";
import { AddToCartProps } from "@/lib/types";
import { addProductFormSchema } from "@/lib/schemas";

const itemQuantity: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const itemSize: string[] = ["xs", "s", "m", "l"];

export const AddToCartForm = (
  {
    // size = "medium",
    // label,
    // quantity,
    // ...props
  }: AddToCartProps,
) => {
  const form = useForm<z.infer<typeof addProductFormSchema>>({
    resolver: zodResolver(addProductFormSchema),
    mode: "onChange",
    defaultValues: {
      quantity: "1",
      size: "s",
    },
  });

  function onSubmit(data: z.infer<typeof addProductFormSchema>) {
    console.log(data);
    toast("Added to cart");
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-serif form-label">
                Choose Quantity
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger
                    className="rounded-none border border-black input-style font-serif"
                    aria-label="Select quantity"
                  >
                    <SelectValue placeholder={field.value} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="rounded-none">
                  {itemQuantity.map((quantity, index) => (
                    <SelectItem
                      key={index}
                      value={quantity.toString()}
                      className="cursor-pointer font-serif"
                    >
                      {quantity}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="size"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-serif form-label">
                Choose Size
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex radio-group"
                >
                  {itemSize.map((size) => (
                    <FormItem key={size} className="relative">
                      <FormControl className="radio-group-item">
                        <RadioGroupItem
                          value={size}
                          aria-label={size}
                          className={`radio-button-indicator h-12 w-12 border border-platinum ${field.value === size ? "selected" : ""}`}
                        />
                      </FormControl>
                      <FormLabel className="size-label uppercase font-sans font-bold">
                        {size}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormDescription className="font-serif">
                Unsure? Check our{" "}
                <Link href="/#" className="underline">
                  sizing guide
                </Link>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Buttons id="add-to-cart" primary type="submit" label="Add To Bag" />
      </form>
    </Form>
  );
};
