

let del=document.createElement("img")
let a=document.getElementById("btn")
let b=document.getElementById("add")
let c=document.getElementById("task-list")
let s=document.getElementById("upd")
del.src="delete.png"

a.onclick=function(){
    document.getElementById("add").style.display="block";
}

a.addEventListener('click',function()
{

b.value

let input=b.value.trim();





if (input === "") {
    alert("Please enter a task");
    return;
} else {
    
    console.log("Task to add:", input);
    
    
}

let text = document.createElement("span")
let edit=document.createElement("img")
edit.src="edit_12435362.png"

edit.addEventListener('click',function(){
    b.value=d.textContent;
   document.getElementById("btn").style.display="none";
   document.getElementById("upd").style.display="block"
   s.onclick=function(){
    d.textContent=b.value
   }
   document.getElementById("btn").style.display="none"


})

let checkbox=document.createElement("input")
let d=document.createElement("li")
checkbox.type="checkbox";
   
   text.textContent = input;
   
d.appendChild(checkbox)
d.appendChild(text)
d.appendChild(del)
d.appendChild(edit)

c.append(d);

checkbox.addEventListener("click",function(){
    alert("target completed")
})
del.addEventListener("click",function(){

 
    let i=document.querySelector('input[type="checkbox"]')
    console.log(i)
    let li=document.querySelector("li")
    console.log(li)
    
    i.remove("checkbox")
    li.remove("li")
    
}
  
)


b.value="";


}) 
























































































































































































