async function getUsers(){

    const container = document.getElementById("user-container");

    try{

        const response = await fetch("https://fakestoreapi.com/users");

        const data = await response.json();

        document.getElementById("loading").style.display = "none";

        data.forEach(user => {
            // console.log(user);
            const initials = user.name.firstname[0].toUpperCase() + user.name.lastname[0].toUpperCase();
            // console.log(initials);

            container.innerHTML += `
                <div class="col-sm-6 col-md-4 col-lg-3">


                    <div class="card border-0 h-100 shadow-sm rounded-4">

                        <div class="bg-primary rounded-top-4 p-3 text-white">

                            <div class="d-flex align-items-center gap-3">
                                <div class="bg-white text-primary fw-bold rounded-3 d-flex align-items-center justify-content-center" style="width: 48px; height: 48px; font-size: 1.1rem">${initials}</div>

                                <div>
                                    <div class="fw-bold fs-6">${user.name.firstname} ${user.name.lastname}</div>
                                    <div class="small opacity-75">${user.username}</div>
                                </div>
                            </div>

                        </div>

                        <div class="card-body d-flex flex-column gap-2 py-3">
                            <!-- Email-->
                            <div class="d-flex align-items-center gap-2">
                                <span class="badge bg-primary-subtle text-primary rounded-2 p-2"><i class="bi bi-envelope-fill"></i></span>
                                <div>
                                    <div class="text-muted">Email</div>
                                    <div class="fw-medium small">${user.email}</div>
                                </div>
                            </div>

                            <div class="d-flex align-items-center gap-2">
                                <span class="badge bg-success-subtle text-success rounded-2 p-2"><i class="bi bi-telephone-fill"></i></span>
                                <div>
                                    <div class="text-muted">Phone</div>
                                    <div class="fw-medium small">${user.phone}</div>
                                </div>
                            </div>

                            <div class="d-flex align-items-center gap-2">
                                <span class="badge bg-warning-subtle text-warning rounded-2 p-2"><i class="bi bi-geo-fill"></i></span>
                                <div>
                                    <div class="text-muted">City</div>
                                    <div class="fw-medium small">${user.address.city}</div>
                                </div>
                            </div>
                        </div>

                        <div class="card-footer border-top d-flex justify-content-between align-items-center py-2">
                        <span class="badge bg-light text-muted border">ID #${user.id}</span>
                        <button data-bs-toggle="modal" data-bs-target="#userModal" class="btn btn-primary btn-sm rounded-pill">View</button>

                    </div>

                    </div>

                    <div class="modal" id="userModal">
                    <!-- Modal design here -->
                    </div>


                </div>
            `

        })


    }catch(err){
        document.getElementById("loading").style.display = "none";
        document.getElementById("error-msg").style.display = "block";
    }

}


getUsers();