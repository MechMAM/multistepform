import React, { useState } from "react";
import fakeApi from "./api";
import "./styles.css";

const steps = [
  {
    id: "GENERAL_INFO",
    title: "Informações Gerais"
  },
  {
    id: "ADRESS",
    title: "Informações de Endereço"
  },
  {
    id: "ACCESSIBILITY_SERVICES",
    title: "Informações de Acessibilidade e Serviços"
  },
  {
    id: "PICTURES",
    title: "Fotos do espaço"
  },
  {
    id: "PRICES",
    title: "Informações de limpeza e locação"
  },
  {
    id: "DESCRIPTION",
    title: "Informações sobre o espaço"
  }
];

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    hasProperty: false,
    propertyName: "",
    spaceName: "",
    capacity: "",
    area: "",
    differentials: [],
    purposes: [],
    adress: {
      CEP: "",
      streetName: "",
      number: "",
      country:"",
      state:"",
      city:"",
      district:"",
      complement:""
    },
    parking: {
      hasParking: false,
      spotsNumber: "",
      paidParking: false,
      hourlyPrice: ""
    },
    accessibility: [],
    includedServices: [],
    additionalServices: [],
    photos: {
      originalName: "",
      fileName: "",
      path: "",
      description: "",
    },
    cleaningTime:"",
    cleaningPrice:"",
    hourlyReservationPrice:"",
    discountPercentage:"",
    spaceDescription:"",
    surroundingsAdvantages:""
  });

  function handleNext() {
    setCurrentStep((prevState) => prevState + 1);
  }

  function handlePrevious() {
    setCurrentStep((prevState) => prevState - 1);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("Form sent...", formValues);

    setLoading(true);

    // simulate api
    await fakeApi(() => setLoading(false), 2000);
  }

  return (
    <div className="App">
      <h1>Multi Steps Form</h1>
      <p className="step-guide">
        {currentStep + 1} de {steps.length}
      </p>

      <form className="steps-form" onSubmit={handleSubmit}>
        <div className="fields-container">
          <h2>{steps[currentStep].title}</h2>

          {steps[currentStep].id === "GENERAL_INFO" && (
            <div className="fields">
              <div className="field">
                <label htmlFor="">
                  Seu espaço está inserido em uma propriedade
                </label>
                <input
                  type="radio"
                  placeholder="Nome"
                  name="name"
                  onChange={handleInputChange}
                  value={formValues.name}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="E-mail"
                  name="email"
                  onChange={handleInputChange}
                  value={formValues.email}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Telefone"
                  name="phone"
                  onChange={handleInputChange}
                  value={formValues.phone}
                />
              </div>
            </div>
          )}

          {steps[currentStep].id === "ADRESS" && (
            <div className="fields">
              <div className="field">
                <input
                  type="text"
                  placeholder="Cidade"
                  name="city"
                  onChange={handleInputChange}
                  value={formValues.city}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Rua"
                  name="street"
                  onChange={handleInputChange}
                  value={formValues.street}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Número"
                  name="street_number"
                  onChange={handleInputChange}
                  value={formValues.street_number}
                />
              </div>
            </div>
          )}

          {steps[currentStep].id === "ACCESSIBILITY_SERVICES" && (
            <div className="fields">
              <div className="field">
                <input
                  type="text"
                  placeholder="Número do cartão"
                  name="card_number"
                  onChange={handleInputChange}
                  value={formValues.card_number}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Nome no cartão"
                  name="card_name"
                  onChange={handleInputChange}
                  value={formValues.card_name}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Validade"
                  name="card_validity"
                  onChange={handleInputChange}
                  value={formValues.card_validity}
                />
              </div>
            </div>
          )}



          {currentStep===0 && (
            <div className="buttons">
              <button className="button next" type="button">
                Voltar
              </button>
              <button className="button next" type="button" onClick={handleNext}>
                Próxima Etapa
              </button>
            </div>
          )}

          {(currentStep < steps.length - 1) && currentStep!=0 && (
            <div className="buttons">
              <button className="button next" type="button" onClick={handlePrevious}>
                Voltar
              </button>
              <button className="button next" type="button" onClick={handleNext}>
                Próxima Etapa
              </button>
            </div>
          )}

          {currentStep === steps.length - 1 && (
            <div className="buttons">
              <button className="button next" type="button" onClick={handlePrevious}>
                Voltar
              </button>
              <button className="button submit" type="submit">
                Enviar
              </button>
            </div>
          )}

          {loading && <h1 className="loader">Enviando...</h1>}
        </div>
      </form>
    </div>
  );
}
