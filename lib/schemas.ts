import * as z from "zod";

export const emailFormSchema = z.object({
  email: z
    .string()
    .email({ message: "⋅ Please provide a valid email address" }),
});

export const addProductFormSchema = z.object({
  quantity: z
    .string()
    .min(1, {
      message: "Please enter quantity",
    })
    .max(10),
  size: z.enum(["xs", "s", "m", "l"], {
    required_error: "Please select a size",
  }),
});
