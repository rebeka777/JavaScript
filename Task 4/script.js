/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', async () => {
  const ENDPOINT = 'cars.json';
  const renderData = (brands) => {
    const outputContainer = document.getElementById('output');
    outputContainer.innerHTML = '';
    brands.forEach((carData) => {
      const car = document.createElement('div');
      car.classList.add('car');
      const brandName = document.createElement('span');
      brandName.classList.add('brand-name');
      brandName.textContent = carData.brand;
      const modelsName = document.createElement('span');
      modelsName.textContent = carData.models;
      modelsName.classList.add('models-list');
      car.append(brandName);
      car.append(modelsName);
      outputContainer.append(car);
    });
  };

  const brands = async () => {
    try {
      const response = await fetch(ENDPOINT);
      const data = await response.json();
      if (response.ok) {
        renderData(data);
      }
    } catch (err) {
      console.error(err);
    }
  };
  await brands();
});
