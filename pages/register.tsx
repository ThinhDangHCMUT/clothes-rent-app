//@ts-ignore
//@ts-nocheck
import TextInput from "@components/form-ui-kit/TextInput";
import Layout from "../layouts/Main";
import FormRow from "@components/form-ui-kit/FormRow";
import Form from "@components/form-ui-kit/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import CheckboxInput from "@components/form-ui-kit/CheckboxInput";
import { Button } from "@components/ui/button";

const schema = yup
  .object({
    first_name: yup.string().required("First Name is required"),
    last_name: yup.string().required("Last Name is required"),
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
  })
  .required();

const RegisterPage = () => {
  const methods = useForm({
    resolver: yupResolver<yup.AnyObject>(schema) as unknown as Resolver<T>,
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Layout>
      <section className="form-page mt-2">
        <div className="container">
          <div className="form-block">
            <h2 className="form-block__title">
              Create an account and discover the benefits
            </h2>

            <Form methods={methods} onSubmit={onSubmit}>
              <FormRow className="flex-col">
                <TextInput name="first_name" title="First Name" required />
                <TextInput name="last_name" title="Last Name" required />
                <TextInput name="email" title="Email" />
                <TextInput
                  name="password"
                  title="Password"
                  required
                  type="password"
                />
                <div className="flex">
                  <CheckboxInput name="is_confirm" required />
                </div>
              </FormRow>
              <Button
                className="text-color-black bg-color-orange w-full"
                type="submit"
              >
                Đăng Ký
              </Button>
            </Form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RegisterPage;
