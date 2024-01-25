"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Buttons } from "./Button";
import { toast } from "sonner"


interface AddToCartProps {
  size?: "small" | "medium" | "large";
  label: number;
  quantity: string;
  onClick?: () => void;
}
const itemQuantity: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const itemSize: string[] = ["s", "m", "l"];

const FormSchema = z.object({
  quantity: z
    .string()
    .min(1, {
      message: "Please enter quantity",
    })
    .max(10),
  size: z.enum(["s", "m", "l"], {
    required_error: "Please select a size",
  }),
});

export const AddToCartForm = ({
  size = "medium",
  label,
  quantity,
  ...props
}: AddToCartProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    defaultValues: {
      quantity: "1",
      size: "s",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    toast("Added to cart")
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
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
                    className="rounded-none border border-black input-style font-serif" aria-label="Select quantity"
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
              <FormLabel className="sr-only">Select a size</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex radio-group"
                >
                  {itemSize.map((size) => (
                    <FormItem key={size}>
                      <FormControl className="radio-group-item">
                        <RadioGroupItem value={size} aria-label={size} className="radio-button-indicator" />
                      </FormControl>
                      <FormLabel>{size}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      <Buttons id="add-to-cart" primary type="submit" label="Add To Bag" />
      </form>
    </Form>
  );
};
