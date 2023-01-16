const throttle = require('lodash.throttle');

const form = document.getElementById('form');
const email = document.getElementById('email');
const message = document.getElementById('message');

const formData = {};

window.addEventListener('DOMContentLoaded', onPageLoading);

form.addEventListener('input', throttle(saveFormData, 500));

form.addEventListener('submit', onSubmit);

function saveFormData(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onPageLoading() {
  if (JSON.parse(localStorage.getItem('feedback-form-state')) === null) {
    return;
  }

  const formData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (formData.email) {
    email.value = formData.email;
  } else email.value = '';

  if (formData.message) {
    message.value = formData.message;
  } else message.value = '';
}

function onSubmit(event) {
  event.preventDefault();

  const formData = {
    email: email.value,
    message: message.value,
  };

  console.log(formData);

  form.reset();
  localStorage.removeItem('feedback-form-state');
}
