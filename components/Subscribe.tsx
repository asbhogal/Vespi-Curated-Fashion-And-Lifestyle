"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values);
}
export default function Subscribe() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 max-w-[960px] w-full">
      <div className="grid gap-2">
        <div className="flex items-center gap-2">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7" cy="7" r="7" fill="black" />
            <path
              d="M3 8.5C5.5 10.5 8.5 10.5 11 8.5"
              stroke="white"
              stroke-width="1.5"
            />
            <circle cx="4" cy="5" r="1" fill="white" />
            <circle cx="10" cy="5" r="1" fill="white" />
          </svg>
          <p className="uppercase text-sm font-serif tracking-[0.01625rem]">
            We also make emails
          </p>
        </div>
        <p className="text-[#6A6161] text-sm font-serif">
          Receive updates and offers you&apos;ll actually be interested in.
          Unsubscribe any time.
        </p>
      </div>
      <Form {...form}>
        <form
          className="relative inline-block"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Email Address</FormLabel>
                <FormControl>
                  <Input
                    className="max-w-80 w-full h-[3.625rem] rounded-none border border-black placeholder:text-black placeholder:text-[1.0625rem] placeholder:font-serif"
                    placeholder="Your email"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            className="bg-transparent hover:bg-transparent rounded-none absolute right-[.3125rem] top-2"
            aria-labelledby="submit-email"
            type="submit"
          >
            <span id="submit-email" hidden>
              Submit Email
            </span>
            <svg
              aria-hidden="true"
              focusable="false"
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.29286 4.50004L7.6464 6.14643L8.3535 6.85355L10.8535 4.3536L11.2071 4.00004L10.8536 3.64648L8.35355 1.14648L7.64645 1.85359L9.29289 3.50004L0 3.50004V4.50004L9.29286 4.50004Z"
                fill="black"
              />
            </svg>
          </Button>
        </form>
      </Form>
    </div>
  );
}
