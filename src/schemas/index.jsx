import * as yup from "yup";

export const validationSchema = yup.object().shape({
  day: yup
    .string()
    .matches(/^(?:0[1-9]|[12]\d|3[01])$/, "Must be a valid day between 01 - 31")
    .max(2)
    .required("Can't be blank"),
  month: yup
    .string()
    .matches(/^0[1-9]|1[0-2]$/, "Must be a valid month between 01 - 12")
    .max(2)
    .required("Can't be blank"),
  year: yup
    .string()
    .matches(/^(?:[0-1]\d{3}|2(?:0[0-1]\d|02[0-3]))$/, "Must be in the past")
    .min(4)
    .required("Can't be blank"),
});
