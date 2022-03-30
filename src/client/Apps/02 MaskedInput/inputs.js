import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { useField } from "formik";

import './styles.css'

export const TextInput = (input) => {
  const [field, meta] = useField(input);
  return (
    <div
      style={{ backgroundColor: "#fff", borderRadius: "15px" }}
      className="d-flex flex-column px-4 py-2 input-container"
    >
      <label htmlFor={field.name}>{input.label}</label>
      <input autoComplete="off" className="border-0 py-1" {...field} {...input} />
      {meta.touched && meta.error && (
        <div className="text-danger ml-3 mt-1">{meta.error}</div>
      )}
    </div>
  );
};

export const NumberInput = (input) => {
  const [field, meta] = useField(input);
  return (
    <div
      style={{ backgroundColor: "#fff", borderRadius: "15px" }}
      className="d-flex flex-column px-4 py-2 input-container"
    >
      <label htmlFor={field.name}>{input.label}</label>
      <NumberFormat
        autoComplete="off"
        className="border-0 py-1"
        {...input}
        {...field}
      />
      {meta.touched && meta.error && (
        <div className="text-danger ml-3 mt-1">{meta.error}</div>
      )}
    </div>
  );
};
