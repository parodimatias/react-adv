import { ChangeEvent, useState } from "react";

export const useForm = <T>(initState: T) => {
  const [formData, setFormData] = useState(initState);

  const resetForm = () => {
    setFormData({ ...initState });
  };
  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return { ...formData, setFormData, onChange, resetForm, isValidEmail };
};
