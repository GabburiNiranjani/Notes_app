const Container = document.querySelector(".container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    Container.innerHTML = localStorage.getItem("notes");
}

function updateStorage(){
    localStorage.setItem("notes",Container.innerHTML);
}
showNotes();

createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
     inputBox.className = "input-box";
     inputBox.setAttribute("contenteditable","true");
     img. src = "./images/images/delete.png";
     Container.appendChild(inputBox).appendChild(img);
})

Container.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentNode.remove();
        updateStorage();
    }
    else if(e.target.tagname === "p"){
        notes = document.querySelectorAll(".input-box");
        notes.foeEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})