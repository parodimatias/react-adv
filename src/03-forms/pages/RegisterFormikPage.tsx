import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";
import "../styles/styles.css";
export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must have 15 characthers or less")
            .min(15, "Must have 2 characters min")
            .required("Required"),
          email: Yup.string().email("Wrong email format").required("Required"),
          password1: Yup.string()
            .min(6, "Must have 6 characters min")
            .required("Required"),
          password2: Yup.string()
            .min(6, "Must have 6 characters min")
            .required("Required")
            .oneOf([Yup.ref("password1"), null], "Passwords must match"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput label="Name" name="name"></MyTextInput>
            <MyTextInput label="Email" name="email" type="email"></MyTextInput>
            <MyTextInput
              label="Password"
              name="password1"
              type="password"
            ></MyTextInput>
            <MyTextInput
              label="Password Confirmation"
              name="password2"
              type="password"
            ></MyTextInput>

            <button type="submit">Submit</button>
            <button type="button" onClick={formik.handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
