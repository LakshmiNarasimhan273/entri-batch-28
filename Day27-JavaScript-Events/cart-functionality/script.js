let count = 0;

const button = document.getElementById("addtoCart");
const cartCount = document.getElementById("cartCount");

button.addEventListener("click", () => {
    count++;
    cartCount.innerText = count;
})