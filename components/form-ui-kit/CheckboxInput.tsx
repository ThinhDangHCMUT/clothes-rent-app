import clsx from "clsx";
import { Controller, useFormContext } from "react-hook-form";
import FormItemTitle from "./FormItemTitle";
import { FormItem } from "types/form";
import { Checkbox } from "@components/ui/checkbox";

interface CheckboxInputProps extends FormItem {
  asChild?: boolean;
  defaultChecked?: boolean;
}

export default function CheckboxInput({
  name,
  title,
  className,
  hidden,
  required = false,
  readonly = false,
  note,
}: CheckboxInputProps) {
  const { control } = useFormContext();

  return (
    <div
      className={clsx(
        !!className && className,
        "!w-full flex items-baseline justify-between gap-2"
      )}
    >
      <FormItemTitle title={title} required={required} note={note} />
      <Controller
        name={name}
        control={control}
        rules={{
          required,
        }}
        defaultValue={false}
        render={({ field }) => (
          <Checkbox
            className="ring-color-black"
            {...field}
            checked={field.value}
            hidden={hidden}
            onCheckedChange={(value) => {
              field.onChange(value);
            }}
            disabled={readonly}
          />
        )}
      />
    </div>
  );
}
