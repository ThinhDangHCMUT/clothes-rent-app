//@ts-ignore
//@ts-nocheck
"use client";

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
import { signInEmailPassword, signInGoogle } from "@utils/auth";
import { USER_INFO } from "constants";
import { saveState } from "@utils/localstorage";
import { useToast } from "@components/ui/use-toast";
import { ToastAction } from "@components/ui/toast";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import { UserData } from "types";
import { useEffect } from "react";

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
  const { toast } = useToast();
  // const params = useSear();
  const router = useRouter();

  const methods = useForm({
    // @ts-ignore
    resolver: yupResolver(schema) as unknown as Resolver<T>,
  });

  useEffect(() => {
    if (router.email) {
      methods.setValue("email", router.email);
    }
  }, [router]);

  const onSubmit = async (data: LoginMail) => {
    const response = await signInEmailPassword(data.email, data.password);
    console.log("response: ", response);

    if (response.errorCode) {
      toast({
        title: "Error",
        description: response.errorCode,
      });
      return;
    }
    saveState(USER_INFO, response.data as UserData);
    toast({
      variant: "success",
      title: "Success",
      description: "Login successfully",
    });
    router.push("/");
  };

  const handleLoginByGoogle = async () => {
    try {
      const response = await signInGoogle();
      saveState(USER_INFO, response.data as UserData);
      if (response.errorCode) {
        throw new Error(response.errorCode);
      }
      toast({
        variant: "success",
        title: "Success",
        description: "Login successfully",
      });
      router.push("/");
    } catch (err) {
      console.log("err: ", err);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
    }
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
                  onClick={handleLoginByGoogle}
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
