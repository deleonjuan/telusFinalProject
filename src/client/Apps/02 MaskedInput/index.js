import React from "react";
import "./styles.css";

import { NumberInput, TextInput } from "./inputs";
import { Formik, Form } from "formik";
import * as Yup from "yup";

function MaskedInputApp() {
  let requiredMessage = "campo requerido"
  const initialValues = {
    name: "",
    firstLastName: "",
    secondLastName: "",
    dateOfBirth: "",
    email: "",
    address: "",
    phone: "",
    homePhone: "",
    dpi: "",
    passport: "",
    card: {
      cardNumber: "",
      cardExpirationDate: "",
      cardCVC: "",
    },
  };

  const validate = Yup.object({
    name: Yup.string().required(requiredMessage),
    firstLastName: Yup.string().required(requiredMessage),
    secondLastName: Yup.string().required(requiredMessage),
    dateOfBirth: Yup.date().required(requiredMessage),
    email: Yup.string().email().required(requiredMessage),
    address: Yup.string().required(requiredMessage),
    phone: Yup.string().required(requiredMessage),
    homePhone: Yup.string(),
    dpi: Yup.string().required(requiredMessage),
    passport: Yup.string().required(requiredMessage),
    card: Yup.object().shape({
      cardNumber: Yup.string().required(requiredMessage),
      cardExpirationDate: Yup.string().required(requiredMessage),
      cardCVC: Yup.string().required(requiredMessage),
    }),
  });

  return (
    <div
      id="maskedinput"
      style={{
        height: "100%",
        backgroundColor: "#EEE",
      }}
      className="py-4 d-flex align-items-center justify-content-center"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(values) => console.log(values)}
      >
        {() => (
          <Form>
            <h1>Solicitud de visa</h1>
            <div className="d-flex flex-column gap-3">
              <TextInput name="name" label="Nombre" placeholder="ej. Juan" />

              <div className="d-flex flex-row gap-2">
                <TextInput
                  name="firstLastName"
                  label="Primer Apellido"
                  placeholder="ej. Martinez"
                />
                <TextInput
                  name="secondLastName"
                  label="Segundo Apellido"
                  placeholder="ej. Martinez"
                />
              </div>

              <NumberInput
                name="dateOfBirth"
                label="Fecha de nacimiento"
                placeholder="mes / dia / año"
                format="##/##/####"
              />

              <TextInput
                name="email"
                label="E-mail"
                placeholder="ej. juan@mail.com"
              />
              <TextInput
                name="address"
                label="Direccion"
                placeholder="ej. Xela, zona 11"
              />

              <NumberInput
                name="phone"
                label="Telefono"
                placeholder="0000 0000"
                format="+502 ####-####"
              />

              <NumberInput
                name="homePhone"
                label="Telefono de casa"
                placeholder="0000 0000"
                format="+502 ####-####"
              />

              <NumberInput
                name="dpi"
                label="DPI"
                placeholder="0000 00000 0000"
                format="#### ##### ####"
              />

              <NumberInput
                name="passport"
                label="Pasaporte"
                placeholder="0000 00000 0000"
                format="#### ##### ####"
              />

              <NumberInput
                name="card.cardNumber"
                label="tarjeta de credito / debito"
                placeholder="0000 00000 0000"
                format="#### ##### ####"
              />

              <div className="d-flex flex-row gap-2">
                <NumberInput
                  name="card.cardExpirationDate"
                  label="Mes y año"
                  placeholder="ej. Martinez"
                  format="## / ##"
                />
                <NumberInput
                  name="card.cardCVC"
                  label="CVC"
                  placeholder="ej. Martinez"
                  format="###"
                />
              </div>
            </div>
          
            <button className="btn btn-primary mt-4" type="submit">Aceptar</button>

          </Form>
        )}
      </Formik>
    </div>
  );
}

export default MaskedInputApp;
