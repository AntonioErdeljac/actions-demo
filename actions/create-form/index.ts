"use server";

import { revalidatePath } from "next/cache";

import { createSafeAction } from "@/lib/create-safe-action";

import { CreateForm } from "./schema";
import { InputType, ReturnType } from "./types";
import { simulateDatabaseCall } from "@/lib/mock";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { title } = data;
  let item;

  try {
    // Mock database call;
    item = await simulateDatabaseCall({ title})

  } catch (error) {
    return { error: 'Failed to create!' };
  }

  revalidatePath(`/examples/form`);
  return { data: item };
};

export const createForm = createSafeAction(CreateForm, handler);
