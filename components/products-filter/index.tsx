import { useState } from "react";
import Checkbox from "./form-builder/checkbox";
import CheckboxColor from "./form-builder/checkbox-color";

// data
import productsTypes from "./../../utils/data/products-types";
import productsColors from "./../../utils/data/products-colors";
import productsSizes from "./../../utils/data/products-sizes";
import { FormProvider, useForm } from "react-hook-form";
import CheckboxInput from "./form-builder/ui-checkbox";
import { Slider } from "@components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@components/ui/radio";

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
          Lọc <i className="icon-down-open"></i>
        </button>

        <div
          className={`products-filter__wrapper ${
            filtersOpen ? "products-filter__wrapper--open" : ""
          }`}
        >
          {/* <button
            type="button"
            className="mb-3 !border text-color-black bg-color-orange-light w-fit px-3 py-1 text-base hover:opacity-70"
          >
            Apply
          </button> */}
          <div className="products-filter__block">
            <button type="button">Chủ đề</button>
            <div className="products-filter__block__content space-y-3 underline cursor-pointer">
              <p className="cursor-pointer">Váy dạ hội</p>
              <p className="cursor-pointer">Đầm</p>
              <p className="cursor-pointer">Vest Nam</p>
              <p className="cursor-pointer">Áo dài</p>
            </div>
          </div>
          {/* <div className="products-filter__block">
            <button type="button"></button>
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
          </div> */}

          <div className="products-filter__block">
            <button type="button">Price</button>
            <div className="products-filter__block__content flex">
              <Slider
                onValueChange={(value) => {
                  console.log(value);
                }}
                defaultValue={[50]}
                max={1000000}
                min={100000}
                step={50000}
                suppressHydrationWarning
              />
            </div>
          </div>
          <div className="products-filter__block">
            <button type="button">Giới tính</button>
            <div className="products-filter__block__content space-y-3">
              <RadioGroup defaultValue="comfortable">
                <div className="flex items-center space-x-2 gap-2">
                  <RadioGroupItem value="default" id="r1" />
                  Nam
                </div>
                <div className="flex items-center space-x-2 gap-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  Nữ
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="products-filter__block">
            <button type="button">Size</button>
            <div className="products-filter__block__content space-y-3">
              {productsSizes.map((type) => (
                <CheckboxInput
                  className="w-1/3"
                  key={type.id}
                  name={`product-size.${type.value}`}
                  title={type.name}
                />
              ))}
            </div>
          </div>

          <div className="products-filter__block">
            <button type="button">Color</button>
            <div className="products-filter__block__content">
              <div className="checkbox-color-wrapper">
                {productsColors.map((type) => (
                  <CheckboxColor
                    key={type.id}
                    valueName={type.color}
                    name="product-color"
                    color={type.color}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default ProductsFilter;
