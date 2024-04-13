import clsx from "clsx";
import { Controller, FieldErrors, useFormContext } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import FormItemTitle from "./FormItemTitle";
import { get, isEmpty } from "lodash";
import { FormItem } from "types/form";
import { Input } from "@components/ui/input";
import { cn } from "@utils/helper";

interface TextInputProps extends FormItem {
  type?: string;
  min?: string;
  onlyNumber?: boolean;
}

const integerRegex = /[^-0-9]/g;
const parseValueNumber = (value: string) => {
  return (value || "").replace(/[^0-9.]/g, "");
};
const convertErrors = (name: string, err?: FieldErrors) => {
  if (isEmpty(err)) return undefined;

  if (!name.includes(".")) return err?.[name];

  return get(err, name);
};
export default function TextInput({
  name,
  title,
  placeholder,
  className,
  hidden,
  required = false,
  readonly = false,
  onlyNumber,
  note,
  type,
  defaultValue,
}: TextInputProps) {
  const { control, formState, setValue, watch } = useFormContext();

  const handleChangeInput = (e: any) => {
    if (onlyNumber) {
      const val = e.target.value;
      e.target.value = parseValueNumber(val);
    }

    setValue(name, e.target.value);
  };
  const errorMessage = convertErrors(name, formState.errors)?.message as string;
  return (
    <div className={clsx(!!className && className, "w-full")}>
      <FormItemTitle title={title} required={required} note={note} />
      <Controller
        name={name}
        control={control}
        rules={{
          required,
        }}
        render={({ field }) => (
          <Input
            {...field}
            className={cn(
              "w-full border-red outline-emerald-100 ring-color-gray",
              errorMessage && "ring-color-red"
            )}
            placeholder={placeholder}
            hidden={hidden}
            disabled={readonly}
            onChange={handleChangeInput}
            type={type}
            defaultValue={defaultValue}
          />
        )}
      />

      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
}
