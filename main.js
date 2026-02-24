const mark = document.querySelector("#mark");
const price = document.querySelector("#price");
const img = document.querySelector("#img");
const btn = document.querySelector("#btn");
const container = document.querySelector(".container");

btn.addEventListener("click", () => {
  let obj = {
    mark: mark.value,
    price: price.value,
    img: img.value,
    id: Date.now(),
  };
  let data = JSON.parse(localStorage.getItem("contact")) || [];
  data.push(obj);
  localStorage.setItem("contact", JSON.stringify(data));

  mark.value = "";
  price.value = "";
  img.value = "";
  readProduct();
});

function readProduct() {
  container.innerHTML = "";
  let data = JSON.parse(localStorage.getItem("contact")) || [];
  data.forEach((el) => {
    const mark = document.createElement("h2");
    const price = document.createElement("h4");
    const img = document.createElement("img");
    const deleit = document.createElement("button");
    const div = document.createElement("div");

    img.src = el.img;
    mark.textContent = el.mark;
    price.textContent = el.price;
    deleit.textContent = "delete";
    div.append(img, mark, price, deleit);
    container.append(div);

    container.style.display = "flex";
    container.style.flexWrap = "wrap";

    deleit.addEventListener("click", () => {
      deleteProduct(el.id);
    });
  });
}

function deleteProduct(id) {
  let data = JSON.parse(localStorage.getItem("contact")) || [];
  data = data.filter((el) => el.id !== id);
  localStorage.setItem("contact", JSON.stringify(data));
  readProduct();
}
readProduct();
