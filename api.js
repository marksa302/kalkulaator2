//1.Get input values
const first = document.querySelector("#first")
const second = document.querySelector("#second")
const btn = document.querySelector("button")
const answer = document.querySelector("#answer")
//2.Create calc function
function calc(){
    answer.innerText =parseInt(first.value) + parseInt(second.value);
}
//3.Add Event listener to button



//4.Display output to user
btn.addEventListener("click", calc);