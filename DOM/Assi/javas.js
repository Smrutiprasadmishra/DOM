let btn1 = document.getElementById("de")
let btn2 = document.getElementById("ie")
let btn3 = document.getElementById("re")
let sp = document.getElementById("sp")


btn1.addEventListener("click" , de )
function de(){
    let var1 = Number(sp.innerText)

    if (var1 > 0) {
        sp.innerText = var1 - 1 
    } else {
        alert("Number is out of bounds")
    }
}

// decrement
btn2.addEventListener("click" , ie)
function ie(){
    let var2 = Number(sp.innerText)

    if (var2 < 10) {
        sp.innerText = var2 + 1 
    } else {
        alert("Number exceeds")
    }
}

// increment
btn3.addEventListener("click" , () => {
    sp.innerText = 0
})