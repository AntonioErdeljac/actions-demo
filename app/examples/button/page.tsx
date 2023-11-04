"use client";

import { useAction } from "@/hooks/use-action";
import { createForm } from "@/actions/create-form";
import { Button } from "@/components/ui/button";

const ExampleButtonPage = () => {
  const { execute, isLoading, } = useAction(createForm, {
    onSuccess: (data) => {
      window.alert(`Success: ${JSON.stringify(data, null, 2)}`);
    },
    onError: (error) => {
      window.alert("Error: " + error);
    }
  });

  const onClick = (title: string) => {
    execute({ title });
  };

  return ( 
    <Button disabled={isLoading} onClick={() => onClick("Button")}>
      Click to make a database call using server action
    </Button>
  );
};

export default ExampleButtonPage;
