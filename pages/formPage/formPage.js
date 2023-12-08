import { save, remove, STORAGE_KEYS } from "../../services/storage.js";

const formData = {
  year: {
    max: new Date().getFullYear(),
    min: 1900,
    current: 2000,
  },
  temperature: {
    max: 23,
    min: 15,
    current: 18,
  },
};

const refs = {
  mainForm: document.getElementById("mainForm"),
  yearRange: document.getElementById("yearRange"),
  yearRangeValue: document.getElementById("yearRangeValue"),
  roomTemperature: document.getElementById("roomTemperature"),
  roomTemperatureValue: document.getElementById("roomTemperatureValue"),
  heatingCostInfoYes: document.getElementById("heatingCostInfoYes"),
  heatingCostInfoNo: document.getElementById("heatingCostInfoNo"),
  heatingCostValue: document.getElementById("heatingCostValue"),
};

fillFormData(formData); // fill forms data like min and max year and temp (you can edit these values using formData object)

//* Events Handlers

refs.mainForm.addEventListener("submit", handleSubmit);
refs.mainForm.addEventListener("input", handleFormInput);

//* Functions Handler

function handleSubmit(event) {
  event.preventDefault();

  // get values from all fields
  const formElements = event.currentTarget.elements;

  const formData = {
    livingSpace: formElements.livingSpace.value,
    area: Number(formElements.area.value),
    year: Number(formElements.year.value),
    heatingType: formElements.heatingType.value,
    residents: Number(formElements.residents.value),
    roomTemperature: Number(formElements.roomTemperature.value),
    isUserKnowHeatingCostInfo: formElements.heatingCostInfo.value,
    heatingCostValue: Number(formElements.heatingCostValue.value)
      ? Number(formElements.heatingCostValue.value)
      : undefined,
  };

  save(STORAGE_KEYS.formData, formData);
  window.location.href = "../resultPage/resultPage.html";
}

function handleFormInput(event) {
  const {
    target: { value },
  } = event;

  if (event.target === refs.yearRange) {
    refs.yearRangeValue.textContent = value;

    return;
  }

  if (event.target === refs.roomTemperature) {
    refs.roomTemperatureValue.textContent = value;

    return;
  }

  if (event.target === refs.heatingCostInfoNo) {
    refs.heatingCostValue.disabled = true;
    refs.heatingCostValue.value = "";
  } else if (event.target === refs.heatingCostInfoYes) {
    refs.heatingCostValue.disabled = false;
  }
}

//* Functions Inits

function fillFormData(formData) {
  remove(STORAGE_KEYS.formData);

  refs.roomTemperature.min = formData.temperature.min;
  refs.roomTemperature.max = formData.temperature.max;
  refs.roomTemperature.value = formData.temperature.current;

  refs.roomTemperatureValue.textContent = formData.temperature.current;

  refs.yearRange.max = formData.year.max;
  refs.yearRange.min = formData.year.min;
  refs.yearRange.value = formData.year.current;

  refs.yearRangeValue.textContent = formData.year.current;
}
