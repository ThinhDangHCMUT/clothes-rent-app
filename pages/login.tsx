// @ts-ignore
import Layout from "../layouts/Main";
import Link from "next/link";
import { useForm } from "react-hook-form";
import TextInput from "@components/form-ui-kit/TextInput";
import FormRow from "@components/form-ui-kit/FormRow";
import Form from "@components/form-ui-kit/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@components/ui/button";

type LoginMail = {
  email: string;
  password: string;
};

const schema = yup
  .object({
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

const LoginPage = () => {
  const methods = useForm({
    // @ts-ignore
    resolver: yupResolver<yup.AnyObject>(schema),
  });

  const onSubmit = async (data: LoginMail) => {
    console.log("data: ", data);

    // const res = await postData(`${server}/api/login`, {
    //   email: data.email,
    //   password: data.password,
    // });
  };

  return (
    <Layout title="Login">
      <section className="form-page mt-5">
        <div className="container">
          <div className="form-block w-full flex flex-col justify-center items-center">
            <h2 className="form-block__title">Log in</h2>
            <Form
              methods={methods}
              onSubmit={onSubmit}
              className="max-w-[350px] w-full mb-5"
            >
              <FormRow className="flex-col gap-1">
                <TextInput name="email" title="Email" required />
                <div className="w-full space-y-1">
                  <TextInput
                    name="password"
                    title="Password"
                    type="password"
                    required
                  />
                  <p className="text-xs underline flex justify-end w-full">
                    Forgot password?
                  </p>
                </div>
              </FormRow>
              <div className="flex-col gap-2 flex">
                <Button className="w-full bg-color-orange text-color-black">
                  Login
                </Button>
                <Button
                  type="button"
                  className="ring-1 !ring-color-black w-full bg-white text-black ring-slate-500 space-x-2"
                >
                  <FcGoogle className="w-6 h-6" />
                  <p>Login by Google</p>
                </Button>
              </div>
            </Form>
            <div className="text-sm flex gap-1">
              <p>Not a Member</p>
              <Link href="/register">
                <p className="underline underline-offset-2">Sign Up?</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LoginPage;
