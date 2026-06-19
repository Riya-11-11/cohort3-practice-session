let createBtn = document.querySelector("#create");
let formDiv = document.querySelector(".form");
let closeBtn = document.querySelector(".close");

let productDiv = document.querySelector(".products");
let form = document.querySelector("form");

let productArr = [];
let updateIdx = null;

let ui = () => {
  productDiv.innerHTML = "";

  productArr.forEach((elem, index) => {
    //productArr k andar obj hai aur uska value aise excess krenge
    productDiv.innerHTML += `<div class="product-card">
          <div class="img">
            <img
              src="${elem.image}"
              alt=""
            />
          </div>

          <div class="text">
            <h3>${elem.productName}</h3>
            <p>${elem.description}</p>
            <p>${elem.price}</p>
          </div>

          <div class="btns">
            <button onclick="updateProduct('${elem.productName}')" id="update">Update</button>
            <button onclick = "deleteProduct(${index})" id="delete">Delete</button>
          </div>
        </div>`;
  });

  formDiv.style.display = "none";
};

createBtn.addEventListener("click", () => {
  formDiv.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  formDiv.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let productName = e.target[0].value;
  let description = e.target[1].value;
  let price = e.target[2].value;
  let image = e.target[3].value;

  if (
    productName.trim() === "" ||
    description.trim() === "" ||
    price.trim() === "" ||
    image.trim() === ""
  ) {
    alert("Please fill all the field!!!");
    return;
  }

  //object
  let obj = {
    productName, //key-val is same
    description,
    price,
    image,
  };

  //UPDATE PART...
  if (updateIdx !== null) {
    productArr[updateIdx] = obj; //sirf usi idx p update hoga obj
    updateIdx = null;
  } else {
    productArr.push(obj);
  }

  ui();
  console.log(productArr);

  form.reset(); //form khaali ho jaayega
});

const updateProduct = (name) => {
  formDiv.style.display = "flex";
  let product = productArr.find((elem) => elem.productName === name); //return full obj
  updateIdx = productArr.findIndex((elem) => elem.productName === name);

  //form m saare values set kr rhe h
  form[0].value = product.productName;
  form[1].value = product.description;
  form[2].value = product.price;
  form[3].value = product.image;
};

const deleteProduct = (index) => {
  productArr.splice(index, 1);
  ui();
};
