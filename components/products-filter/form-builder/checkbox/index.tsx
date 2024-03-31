type CheckboxType = {
  type?: string;
  label: string;
  name: string;
  onChange: (...event: any[]) => void;
  onBlur: (...event: any[]) => void;
  ref: React.Ref<any>;
};

const Checkbox = ({ type = "", label, name, ...rest }: CheckboxType) => (
  <label
    htmlFor={label + "-" + name}
    className={`checkbox ${type ? "checkbox--" + type : ""}`}
  >
    <input type="radio" id={label + "-" + name} {...rest} />
    <span className="checkbox__check"></span>
    <p>{label}</p>
  </label>
);

export default Checkbox;
