// try {
//   console.log(`start`);
//   console.log(value);
//   console.log(`end`);
// } catch (e) {
//   console.log(`Произошла ошибка!`);
// }

// console.log(`start`);
// setTimeout(() => {
//   try {
//     console.log(value);
//   } catch (e) {
//     console.log(`error!`);
//   }
// }, 3000);
// console.log(`end`);

// let a = 10;
// try {
//   if (a === 10) {
//     throw new Error(`aksf`);
//   }
//   console.log(a);
// } catch (e) {
//   console.log(e.name, e.message);
// }

// let a = 10;
// try {
//   try {
//     if (a === 10) {
//       throw new SyntaxError(`aksf`);
//     }
//     console.log(a);
//   } catch (e) {
//     if (e.name === `Error`) {
//       console.log(e.name, e.message);
//     } else {
//       throw e;
//     }
//   }
// } catch (er) {
//   console.log(er.name);
// }
const baseURL = `https://reqres.in/api`;
function getResponseData(data) {
  console.log(data, "DONE!");
  const element = document.createElement(`div`);
  element.style.backgroundColor = `red`;
  element.style.fontSize = `40px`;
  element.innerHTML = `User with ID = ${data.id} created at ${data.createdAt}`;
  document.body.appendChild(element);
}
function getReqestXHR(page, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open(`GET`, `${baseURL}/users?page=${page}`);
  xhr.send();
  xhr.responseType = "json";
  xhr.onload = function () {
    callback(xhr.response.data);
  };
}

getReqestXHR(1, (data) => console.log(data));

function postReqestXHR(body, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open(`POST`, `${baseURL}/users`);
  xhr.send(body);
  xhr.responseType = "json";
  xhr.onload = function () {
    callback(xhr.response);
  };
}

postReqestXHR(
  JSON.stringify({ name: "Vasya", job: "Worker" }),
  getResponseData
);

async function getReqest(page) {
  try {
    const req = await fetch(`${baseURL}/users?page=${page}`);
    const data = await req.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

async function postReqest(body) {
  try {
    const req = await fetch(`${baseURL}/users`, {
      method: `POST`,
      body: JSON.stringify(body),
    });
    const data = await req.json();
    getResponseData(data);
  } catch (e) {
    console.log(e);
  }
}

// getReqest(1);
postReqest({ name: "Vasya", job: "Worker" });
