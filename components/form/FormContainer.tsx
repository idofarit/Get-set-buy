"use client";

import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { actionFunction } from "@/utils/types";
import { cn } from "@/lib/utils";

const initialState = {
  message: "",
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useFormState(action, initialState);
  const { toast } = useToast();
  useEffect(() => {
    if (state.message) {
      toast({
        description: state.message,
        className: cn(
          "top-0 right-0 flex fixed w-[220px] md:top-4 md:right-4 bg-primary text-white tracking-wider"
        ),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
  return <form action={formAction}>{children}</form>;
}
export default FormContainer;
