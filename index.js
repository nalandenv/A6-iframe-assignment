const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name");
  const age = document.querySelector("#age");
  const list = document.querySelector("#list");
  const h1 = document.createElement("h1");
  h1.innerText = `Name: ${name.value} | Age: ${age.value}`;
  list.append(h1);
});
