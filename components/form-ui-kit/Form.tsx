import React from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";

export interface FormProps {
  methods: UseFormReturn<any, any>;
  defaultValues?: any;
  children?: React.ReactNode;
  type?: string;
  onSubmit?(params: any): void;
  className?: string;
}

export default function Form({
  methods,
  children,
  className,
  onSubmit = () => {},
}: FormProps) {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  );
}
