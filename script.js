let btnConfirm = document.getElementById("btn_confirm");
let btnContinue  = document.getElementById("btn_continue");
const cardInput = document.getElementById("card_input");
const cardConfirm = document.getElementById("card_confirm");

// Sélectionner les éléments du DOM où les informations de la carte doivent être affichées
const cardNameSpan = document.querySelector("#card_name span");
const cardNumberSpan = document.querySelector("#card_number span");
const cardMonthSpan = document.querySelector("#card_date span:first-child");
const cardYearSpan = document.querySelector("#card_date span:last-child");
const cardCvcSpan = document.querySelector("#card_cvc");

// Sélectionner les éléments d'entrée utilisateur
const inputName = document.querySelector('input[placeholder="e.g. Jane Appleseed"]');
const inputNumber = document.querySelector('input[placeholder="e.g. 1234 5678 9123 0000"]');
const inputMonth = document.querySelector("#text_monat");
const inputYear = document.querySelector("#text_year");
const inputCvc = document.querySelector("#text_cvc");

// Sélection des éléments où afficher les messages d'erreur
const errorName = document.querySelector("#error-name");
const errorNumber = document.querySelector("#error-number");
const errorDate = document.querySelector("#error-date");
const errorCvc = document.querySelector("#error-cvc");

// Fonction pour vérifier si un champ est vide
function validateInput(input, errorMessageElement, errorMessage) {
  if (input.value.trim() === "") {
    errorMessageElement.textContent = errorMessage;
    errorMessageElement.style.display = "block";
    return false;
  } else {
    errorMessageElement.style.display = "none";
    return true;
  }
}

// Validation et affichage des erreurs lors de la soumission
document.querySelector("#btn_confirm").addEventListener("click", (event) => {
  event.preventDefault(); // Empêche l'envoi du formulaire par défaut

  const isNameValid = validateInput(inputName, errorName, "Cardholder Name can't be blank");
  const isNumberValid = validateInput(inputNumber, errorNumber, "Card Number can't be blank");
  const isDateValid = validateInput(inputMonth, errorDate, "Expiration date can't be blank") &&
                      validateInput(inputYear, errorDate, "Expiration date can't be blank");
  const isCvcValid = validateInput(inputCvc, errorCvc, "CVC can't be blank");

  // Si tous les champs sont valides, afficher la section de confirmation
  if (isNameValid && isNumberValid && isDateValid && isCvcValid) {
    document.querySelector("#card_input").style.display = "none";
    document.querySelector("#card_confirm").style.display = "block";
  }
});

// Fonction pour réinitialiser le formulaire et les valeurs affichées
function resetForm() {
    // Réinitialiser les champs de saisie
    inputName.value = "";
    inputNumber.value = "";
    inputMonth.value = "";
    inputYear.value = "";
    inputCvc.value = "";
  
    // Réinitialiser les valeurs affichées sur la carte
    cardNameSpan.textContent = "Jane Appleseed";
    cardNumberSpan.textContent = "0000 0000 0000 0000";
    cardMonthSpan.textContent = "00";
    cardYearSpan.textContent = "00";
    cardCvcSpan.textContent = "000";
  }
  
  // Mettre à jour les informations de la carte en fonction de la saisie utilisateur
  inputName.addEventListener("input", () => {
    cardNameSpan.textContent = inputName.value || "Jane Appleseed";
  });
  
  inputNumber.addEventListener("input", () => {
    cardNumberSpan.textContent = inputNumber.value || "0000 0000 0000 0000";
  });
  
  inputMonth.addEventListener("input", () => {
    cardMonthSpan.textContent = inputMonth.value || "00";
  });
  
  inputYear.addEventListener("input", () => {
    cardYearSpan.textContent = inputYear.value || "00";
  });
  
  inputCvc.addEventListener("input", () => {
    cardCvcSpan.textContent = inputCvc.value || "000";
  });
   
  // Revenir au formulaire vide après avoir cliqué sur "Continue"
  document.querySelector("#btn_continue").addEventListener("click", () => {
    resetForm(); 
    document.querySelector("#card_input").style.display = "block";
    document.querySelector("#card_confirm").style.display = "none";
  });