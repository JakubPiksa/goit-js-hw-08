import throttle from 'lodash.throttle';

const formEl = document.querySelectorAll(`.feedback-form`);
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = {
    email: emailInput.value,
    message: messageInput.value
  };

  localStorage.setItem('form-data', JSON.stringify(data));
});

// odczytanie danych z local storage i wypełnienie formularza
const savedData = localStorage.getItem('form-data');
if (savedData) {
  const data = JSON.parse(savedData);

  emailInput.value = data.email;
  messageInput.value = data.message;
}


// Śledź w formularzu zdarzenie input, i za każdym razem zapisuj w local storage obiekt z polami email i message, w których przechowywane są aktualne wartości pól formularza. Niech kluczem do tych danych w storage będzie "feedback-form-state".
// Podczas przeładowywania strony sprawdzaj stan storage i jeśli są tam zapisane dane, wypełniaj nimi pola formularza. W przeciwnym wypadku pola powinny być puste.
// Po wysłaniu formularza wyczyść storage i pola formularza, a także wyloguj obiekt z polami email, message i ich aktualnymi wartościami do konsoli.
// Zrób tak, aby storage aktualizował się nie częściej niż raz na 500 milisekund. Aby to zrobić, użyj metody biblioteki lodash.throttle (dodaj ją do projektu).