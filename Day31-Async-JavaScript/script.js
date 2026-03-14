const productContainer = document.getElementById("product-container");

// Async function - It enables the capability to wait and run a multiple
// task at a time
async function getProducts(){
    try{

        const response = await fetch("https://fakestoreapi.com/products");

        if(!response){
            throw new Error("Data Fetching Failed");
        }

        const products = await response.json();

        console.log(products);

        productContainer.innerHTML = "";

        // [{}, {}, {}]
        // {}
        // {}
        // {}

        products.forEach(data => {
            console.log(data);
            productContainer.innerHTML += 
            `
            <div class="col-sm-6 col-md-4 col-lg-3">

                <div class="card h-100 shadow-sm">
                    <img class="card-img-top" src="${data.image}" />
                    <div class="card-body d-flex flex-column">
                        <p class="text-muted small mb-1 fw-bold">${data.category}</p>
                        <h6 class="card-title text-dark fw-bold text-truncate">${data.title}</h6>
                        <p class="card-text text-primary fs-5 fw-bold mt-auto">$${data.price}</p>
                        <div class="d-grid">
                            <button class="btn btn-primary btn-sm">Add to Cart</button>
                        </div>
                    </div>
                </div>
            
            </div>
            `;
        })


    }catch(err){
        console.log(err);
    }
}

getProducts();

// https://fakestoreapi.com/users