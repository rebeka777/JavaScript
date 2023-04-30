/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const weightKg = Number(event.target.search.value);
  const weightLb = weightKg * 2.2046;
  const weightG = weightKg / 0.001;
  const weightOz = weightKg * 35.274;
  const output = document.getElementById('output');
  const outputLb = document.createElement('div');
  outputLb.textContent = `Weight lb: ${weightLb}`;
  const outputG = document.createElement('div');
  outputG.textContent = `Weight g: ${weightG}`;
  const outputOz = document.createElement('div');
  outputOz.textContent = `Weight oz: ${weightOz}`;
  output.appendChild(outputLb);
  output.appendChild(outputG);
  output.appendChild(outputOz);
});
