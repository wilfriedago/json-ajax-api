const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });

});
