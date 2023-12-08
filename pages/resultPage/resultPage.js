import { load, STORAGE_KEYS } from "../../services/storage.js";

const refs = {
  livingSpace: document.getElementById("livingSpace"),
  area: document.getElementById("area"),
  year: document.getElementById("year"),
  heatingType: document.getElementById("heatingType"),
  residents: document.getElementById("residents"),
  roomTemperature: document.getElementById("roomTemperature"),
};

const formData = load(STORAGE_KEYS.formData);

fillMarkupWithData(formData);

console.log(formData);

function fillMarkupWithData(formData) {
  refs.livingSpace.textContent = formData.livingSpace;
  refs.area.textContent = formData.area;
  refs.year.textContent = formData.year;
  refs.heatingType.textContent = formData.heatingType;
  refs.residents.textContent = formData.residents;
  refs.roomTemperature.textContent = formData.roomTemperature;
}
