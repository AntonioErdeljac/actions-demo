import { useFormStatus } from "react-dom";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
};

export const FormSubmit = ({
  children,
  disabled,
  className,
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button 
      disabled={pending || disabled} 
      type="submit" 
      size="sm" 
      className={cn(className)}
    >
      {children}
    </Button>
  );
};
