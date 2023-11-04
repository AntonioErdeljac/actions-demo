"use client";

import { useAction } from "@/hooks/use-action";
import { createForm } from "@/actions/create-form";
import { FormInput } from "@/components/form-input";
import { FormSubmit } from "@/components/form-submit";

const ExampleFormPage = () => {
  const { execute, fieldErrors } = useAction(createForm, {
    onSuccess: (data) => {
      window.alert(`Success: ${JSON.stringify(data, null, 2)}`);
    },
    onError: (error) => {
      window.alert("Error: " + error);
    }
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  };

  return ( 
    <form action={onSubmit} className="space-y-2">
      <FormInput
        id="title"
        errors={fieldErrors}
        placeholder="Enter a title"
      />
      <FormSubmit>
        Submit
      </FormSubmit>
    </form>
  );
};

export default ExampleFormPage;
