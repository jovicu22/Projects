
let saveEl= document.getElementById("save-el")
let countPeople=document.getElementById("people-counter")
let count=0
let ada=0

function increment(){
    count += 1
    countPeople.innerText=count
}

function save(){
    ada= count +"-"
    saveEl.innerText+= ada
    console.log(count)
    count = 0
    countPeople.innerText=count
}

