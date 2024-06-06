import Form from "@components/form-ui-kit/Form";
import FormRow from "@components/form-ui-kit/FormRow";
import TextInput from "@components/form-ui-kit/TextInput";
import { Button } from "@components/ui/button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Email is required"),
  })
  .required();

const Subscribe = () => {
  const onSubmit = (data: any) => {
    console.log("data: ", data);
  };
  const methods = useForm({
    resolver: yupResolver(schema) as any,
  });
  return (
    <section className="subscribe">
      <div className="container">
        <div
          style={{
            backgroundImage: "url(/images/card/card-picnic-concept.jpg)",
          }}
          className="subscribe__content"
        >
          <h4>
            Subscribe to our newsletter and receive exclusive offers every week
          </h4>

          <Form methods={methods} onSubmit={onSubmit}>
            <FormRow className="!gap-2">
              <TextInput
                className="w-[300px] bg-color-white !rounded-none"
                name="email"
                required
              />
              <Button
                type="submit"
                className="bg-color-orange text-color-black"
              >
                Subscribe
              </Button>
            </FormRow>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
