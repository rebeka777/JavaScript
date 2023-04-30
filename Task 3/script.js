/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const renderData = (users) => {
  const outputContainer = document.getElementById('output');
  outputContainer.innerHTML = '';
  users.forEach((user) => {
    const card = document.createElement('div');
    card.classList.add('card');
    const loginName = document.createElement('span');
    loginName.classList.add('login-name');
    loginName.textContent = user.login;
    const avatarUrl = document.createElement('span');
    avatarUrl.textContent = user.avatar_url;
    avatarUrl.classList.add('avatar-url');
    card.append(loginName);
    card.append(avatarUrl);
    outputContainer.append(card);
  });
};

const users = async () => {
  try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    if (response.ok) {
      const newArray = data.map(({ login, avatar_url }) => ({
        login,
        avatar_url,
      }));
      renderData(newArray);
      return newArray;
    }
  } catch (err) {
    console.error(err);
  }
};

const button = document.getElementById('btn');
button.addEventListener('click', users);
