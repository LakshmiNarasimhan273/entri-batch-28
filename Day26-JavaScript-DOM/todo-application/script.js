function todoFunctionality(){
    const input = document.getElementById("taskInput");
    const list = document.getElementById("taskList");

    if(input.value.trim() === ""){
        alert("Please enter your todo");
    }
    const now = new Date();
    const timestamp = now.toLocaleString();

    console.log(now);
    console.log(timestamp);

    const listElement = document.createElement("li");
    listElement.innerText = `${input.value} - Added on ${timestamp}`;

    list.appendChild(listElement);
    input.value = "";
}

