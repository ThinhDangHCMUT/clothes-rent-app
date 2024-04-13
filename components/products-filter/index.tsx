import { useState } from "react";
import Checkbox from "./form-builder/checkbox";
import CheckboxColor from "./form-builder/checkbox-color";
import Slider from "rc-slider";

// data
import productsTypes from "./../../utils/data/products-types";
import productsColors from "./../../utils/data/products-colors";
import productsSizes from "./../../utils/data/products-sizes";
import { FormProvider, useForm } from "react-hook-form";
import CheckboxInput from "./form-builder/ui-checkbox";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const ProductsFilter = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const methods = useForm();

  const addQueryParams = () => {
    // query params changes
  };

  const handleSubmitQuery = (data) => {
    console.log("dataSubmitQuery", data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="products-filter"
        onChange={methods.handleSubmit(handleSubmitQuery)}
      >
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
          <div className="products-filter__block">
            <button type="button">Product type</button>
            <div className="products-filter__block__content space-y-3">
              {productsTypes.map((type) => (
                <CheckboxInput
                  className=""
                  key={type.id}
                  name={`product-type.${type.name}`}
                  title={type.name}
                />
              ))}
            </div>
          </div>

          <div className="products-filter__block">
            <button type="button">Price</button>
            <div className="products-filter__block__content">
              {/* <Range
                min={0}
                max={20}
                defaultValue={[3, 10]}
                tipFormatter={(value) => `${value}%`}
              /> */}
            </div>
          </div>

          <div className="products-filter__block">
            <button type="button">Size</button>
            <div className="products-filter__block__content checkbox-square-wrapper">
              {/* {productsSizes.map((type) => (
                <Checkbox
                  type="square"
                  key={type.id}
                  name="product-size"
                  label={type.label}
                />
              ))} */}
            </div>
          </div>

          <div className="products-filter__block">
            <button type="button">Color</button>
            <div className="products-filter__block__content">
              <div className="checkbox-color-wrapper">
                {/* {productsColors.map((type) => (
                  <CheckboxColor
                    key={type.id}
                    valueName={type.color}
                    name="product-color"
                    color={type.color}
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
