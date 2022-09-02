import { useState } from "react";

export default function useForm(initialValue) {
  const [values, setValues] = useState(initialValue);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return {
    handleInputChange,
    values,
    setValues,
  };
}
