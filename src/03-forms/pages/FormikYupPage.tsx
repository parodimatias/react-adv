import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikYupPage = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: { firstName: "", lastName: "", email: "" },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must have 15 characthers or less")
        .required("Required"),
      lastName: Yup.string()
        .max(15, "Must have 15 characthers or less")
        .required("Required"),
      email: Yup.string().email("Wrong email format").required("Required"),
    }),
  });
  return (
    <div>
      <h1>Formik Yup</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...getFieldProps("firstName")}></input>
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}{" "}
        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...getFieldProps("lastName")}></input>
        {touched.lastName && errors.lastName && (
          <span>{errors.lastName}</span>
        )}{" "}
        <label htmlFor="email">Email</label>
        <input type="email" {...getFieldProps("email")}></input>
        {touched.email && errors.email && <span>{errors.email}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};