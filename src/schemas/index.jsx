import * as yup from "yup";

export const validationSchema = yup.object().shape({
  day: yup
    .string()
    .matches(/^(3[01]|[12][0-9]|[1-9])$/, "Must be a valid day")
    .max(2)
    .required("Can't be blank"),
  month: yup
    .string()
    .matches(/^(1[0-2]|[1-9])$/, "Must be a valid month")
    .max(2)
    .required("Can't be blank"),
  year: yup
    .string()
    .matches(/^(19\d\d|20\d\d|202[0-3])$/, "Must be in the past")
    .min(4)
    .required("Can't be blank"),
});
