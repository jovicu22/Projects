let countPeople=document.getElementById("people-counter")
let count=0

function increment(){
    count= count + 1
    countPeople.innerText=count
}

function save(){
    console.log(count)
}

