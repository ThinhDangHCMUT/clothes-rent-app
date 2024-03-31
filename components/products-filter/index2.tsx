import { useState } from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import Checkbox from "./form-builder/checkbox";
import CheckboxColor from "./form-builder/checkbox-color";
import Slider, { createSliderWithTooltip } from "rc-slider";
import productsTypes from "./../../utils/data/products-types";
import productsColors from "./../../utils/data/products-colors";
import productsSizes from "./../../utils/data/products-sizes";
import CheckboxInput from "./form-builder/ui-checkbox";

const Range = createSliderWithTooltip(Slider.Range);

const ProductsFilter = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <button
          type="button"
          onClick={() => setFiltersOpen(!filtersOpen)}
          className={`products-filter__menu-btn ${
            filtersOpen ? "products-filter__menu-btn--active" : ""
          }`}
        >
          Add Filter <i className="icon-down-open"></i>
        </button>

        <div
          className={`products-filter__wrapper ${
            filtersOpen ? "products-filter__wrapper--open" : ""
          }`}
        >
          <div className="products-filter__block w-fit">
            <button type="button">Product type</button>
            <div className="products-filter__block__content">
              {productsTypes.map((type) => (
                <CheckboxInput
                  className=""
                  key={type.id}
                  name={`product-type.${type.id}`}
                  title={type.name}
                />
              ))}
            </div>
          </div>

          <div className="products-filter__block">
            <button type="button">Price</button>
            <div className="products-filter__block__content">
              {/* <Controller
                control={control}
                name="price-range"
                render={({ field }) => (
                  <Range
                    {...field}
                    min={0}
                    max={20}
                    defaultValue={[3, 10]}
                    tipFormatter={(value) => `${value}%`}
                  />
                )}
              /> */}
            </div>
          </div>

          <div className="products-filter__block">
            <button type="button" className="text-black">
              Size
            </button>
            <div className="products-filter__block__content checkbox-square-wrapper flex flex-col pl-2">
              {productsSizes.map((size) => (
                <CheckboxInput
                  key={size.id}
                  name={`product-size.${size.value}`}
                  title={size.label}
                />
              ))}
            </div>
          </div>

          <div className="products-filter__block">
            <button type="button">Color</button>
            <div className="products-filter__block__content">
              <div className="checkbox-color-wrapper">
                {/* {productsColors.map((color) => (
                  <CheckboxColor
                    key={color.id}
                    valueName={color.color}
                    // name="product-color"
                    color={color.color}
                    {...register("product-color")}
                  />
                ))} */}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-submit btn--rounded btn--yellow"
          >
            Apply
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ProductsFilter;
