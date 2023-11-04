import { z } from "zod";

export const CreateForm = z.object({
  title: z.string({
    required_error: "Title is required",
    invalid_type_error: "Title is required"
  }).min(3, { message: 'Title too short' }),
});
