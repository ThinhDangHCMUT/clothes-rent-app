import { twMerge } from "tailwind-merge";
import { FormItem } from "types/form";

type FormItemTitleProps = Partial<FormItem> & {
  className?: string;
};

export default function FormItemTitle({
  title,
  required,
  className,
}: FormItemTitleProps) {
  if (!title) {
    return null;
  }

  return (
    <p
      className={twMerge(
        "text-[16px] font-normal leading-[24px] mb-[5px]",
        !!className && className
      )}
    >
      {title} {required && <span className="text-red-500">*</span>}
    </p>
  );
}
