
// document.querySelector("#red").onclick=function(){

//     document.querySelector("#text-color").style.color="red"
// }
// document.querySelector("#blue").onclick=function(){

//     document.querySelector("#text-color").style.color="blue"
// }
// document.querySelector("#yellow").onclick=function(){

//     document.querySelector("#text-color").style.color="yellow"
// }


document.querySelectorAll(".button-color").forEach(function(item){
    item.onclick=function(event){
        console.log(item.dataset.color);
        
        document.querySelector("#text-color").style.color=item.dataset.color;
    }
})


document.querySelector("#myform").addEventListener("submit", function(event){

    let work=document.querySelector("#work").value;
    let result=document.querySelector("#result");

    if(work==""){
        alert("enter data");
    }
    else{
        let li=document.createElement("li");
        // li.innerHTML=work;
        let button_delete=document.createElement("button");
        let span=document.createElement("span")
        span.innerHTML=work;
        button_delete.innerHTML="delete";
        li.append(span)
        li.append(button_delete)
        li.classList.add("d-flex", "justify-content-between")
        result.append(li)
        document.querySelector("#work").value="";


        button_delete.addEventListener("click",function(){
            li.remove()
        })

        event.preventDefault();
    }

})


