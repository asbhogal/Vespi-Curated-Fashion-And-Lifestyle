"use client";
import { pt_serif } from "@/lib/types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Buttons } from "../stories/Button";

interface AddToCartProps {
  size?: "small" | "medium" | "large";
  label: number;
  quantity: string;
  onClick?: () => void;
}

const formSchema = z.object({
  quantity: z
    .string()
    .min(1, {
      message: "Please enter quantity",
    })
    .max(10),
});

const itemQuantity: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const itemSize: string[] = ["s", "m", "l"];

export const AddToCartForm = ({
  size = "medium",
  label,
  quantity,
  ...props
}: AddToCartProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: "1",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast({
      title: "Item added to bag",
    });
    console.log(parseInt(data.quantity));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel id="quantity-label" className={pt_serif.className}>
                Choose Quantity
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger
                    aria-labelledby="quantity-label"
                    className={[
                      "rounded-none border border-black input-style",
                      pt_serif.className,
                    ].join(" ")}
                  >
                    <SelectValue placeholder={field.value}></SelectValue>
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="rounded-none">
                  <SelectGroup>
                    {itemQuantity.map((quantity, index) => (
                      <SelectItem
                        key={index}
                        value={quantity.toString()}
                        className={["cursor-pointer", pt_serif.className].join(
                          " "
                        )}
                      >
                        {quantity}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <Buttons primary type="submit" label="Add To Bag" />
      </form>
    </Form>
  );
};
