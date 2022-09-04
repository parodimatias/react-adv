import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyCheckbox, MySelect, MyTextInput } from "../components";
import "../styles/styles.css";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must have 15 characthers or less")
            .required("Required"),
          lastName: Yup.string()
            .max(15, "Must have 15 characthers or less")
            .required("Required"),
          email: Yup.string().email("Wrong email format").required("Required"),
          terms: Yup.boolean().oneOf(
            [true],
            "Must accept terms and conditions"
          ),
          jobType: Yup.string().notOneOf(["it-junior"]).required("Required"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput label="First Name" name="firstName"></MyTextInput>
            <MyTextInput label="Last Name" name="lastName"></MyTextInput>
            <MyTextInput label="Email" name="email" type="email"></MyTextInput>

            <MySelect label="Job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Jr</option>
            </MySelect>
            <MyCheckbox label="Terms and Conditions" name="terms"></MyCheckbox>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
