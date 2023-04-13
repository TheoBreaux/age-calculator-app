import React, { useState } from "react";
import "./DateInputForm.css";
import { useFormik } from "formik";
import { validationSchema } from "./schemas";

const DataInputForm = ({ formState, setFormState }) => {
  const { values, errors, handleBlur, handleChange, touched } = useFormik({
    initialValues: {
      day: "",
      month: "",
      year: "",
    },
    validationSchema: validationSchema,
  });

  const customHandleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
    handleChange(e);
  };

  return (
    <form>
      <div className="birthdate-input">
        <div className="bd-info">
          <label
            htmlFor="day"
            className={errors.day && touched.day ? "label-error" : ""}>
            DAY
          </label>
          <input
            id="day"
            value={values.day}
            type="text"
            onChange={customHandleChange}
            onBlur={handleBlur}
            placeholder="DD"
            maxLength="2"
            className={errors.day && touched.day ? "input-error" : ""}
          />
          {errors.day && touched.day && <p className="error">{errors.day}</p>}
        </div>

        <div className="bd-info">
          <label
            htmlFor="month"
            className={errors.month && touched.month ? "label-error" : ""}>
            MONTH
          </label>
          <input
            id="month"
            value={values.month}
            type="text"
            onChange={customHandleChange}
            onBlur={handleBlur}
            placeholder="MM"
            maxLength="2"
            className={errors.month && touched.month ? "input-error" : ""}
          />
          {errors.month && touched.month && (
            <p className="error">{errors.month}</p>
          )}
        </div>

        <div className="bd-info">
          <label
            htmlFor="year"
            className={errors.year && touched.year ? "label-error" : ""}>
            YEAR
          </label>
          <input
            id="year"
            value={values.year}
            type="text"
            onChange={customHandleChange}
            onBlur={handleBlur}
            placeholder="YYYY"
            maxLength="4"
            className={errors.year && touched.year ? "input-error" : ""}
          />
          {errors.year && touched.year && (
            <p className="error">{errors.year}</p>
          )}
        </div>
      </div>
    </form>
  );
};

export default DataInputForm;
