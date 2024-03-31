export interface FormItem {
  name: string;
  title?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  defaultValue?: any;
  hidden?: boolean;
  value?: string;
  note?: string;
  readonly?: boolean;
}
