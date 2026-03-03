// JS DOM

// getElementById
function changeTitle(){
    const heading = document.getElementById("title");
    heading.innerText = "Welcome Admin!, You're logged in";
}

// getElementsByClassName
function changeColor(){
    const courses = document.getElementsByClassName("course");
    // courses = 4 length
    // 0 < 4;
    // let numbers = [2, 3, 4, 5]
    // console.log(numbers.length);
    for(let i = 0; i < courses.length; i++){
        courses[i].style.color = "blue";
        courses[i].style.fontWeight = "bold";
        courses[i].style.fontSize = "30px";
    }
}