import clsx from "clsx";
import { Controller, useFormContext } from "react-hook-form";
// import { FormItem } from '../../../model/FormItem';
import { Checkbox } from "@components/ui/checkbox";
import { FormItem } from "types/form";
// import FormItemTitle from './FormItemTitle';

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
}: CheckboxInputProps) {
  const { control } = useFormContext();

  return (
    <div
      className={clsx(
        !!className && className,
        "w-full flex items-baseline gap-2 justify-between"
      )}
    >
      <div>{title}</div>
      {/* <FormItemTitle title={title} required={required} note={note} /> */}
      <Controller
        name={name}
        control={control}
        rules={{
          required,
        }}
        defaultValue={false}
        render={({ field }) => (
          <Checkbox
            type="button"
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
