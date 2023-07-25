let formElement = document.querySelector(".form-inline");
let inputElem = document.querySelector('input[id="item"]');
let ulItem = document.querySelector("ul");

let list = document.getElementsByClassName("list-group-item");

// ***** add items when click on submit ****************
// let datakey=4;
formElement.addEventListener("submit", (e) => {

    e.preventDefault();

    let createElem = document.createElement("li");
    createElem.className = "list-group-item";

    let camelCase = inputElem.value[0].toUpperCase() + inputElem.value.slice(1);
    createElem.append(camelCase);
    // console.log(camelCase)

    let btn = document.createElement("button");
    btn.className = "btn btn-danger btn-sm float-right delete";
    btn.append("X");
    createElem.append(btn);

    ulItem.append(createElem);

    // toStoreItem((datakey++).toString(),inputElem.value)
    inputElem.value = "";
});



// ********** remove Itmes ///////

ulItem.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-danger")) {
        if (confirm("Have you done?")) {
            if (list.length > 1)
                ulItem.removeChild(e.target.parentElement);

            // console.log("first")
            else {
                ulItem.removeChild(e.target.parentElement);

                ulItem.innerHTML = "<h1>Done</h1>"
            }
        }

    }

});

// *************************** filter in search item *********************************\\

let filterItem = document.querySelector("#filter");



filterItem.addEventListener("keyup", (e) => {
    
if(e.key==="Enter"){
    let curVal = e.target.value.toLowerCase();
    Array.from(list).forEach((val) => {
        let arrItems = val.childNodes[0].textContent.toLowerCase()
        if(arrItems.includes(curVal)) //indexOf(curVal)!=-1//
            {
       val.style.display="block"; 
       filterItem.value="";                                       
            }
            else{
                val.style.display="none";
                e.target.value="";
            }
    
        })
}
    

    // Array.from(list).filter((val) => {
    //     let arrItems = val.childNodes[0].textContent.toLowerCase();
    //     if (arrItems.includes(curVal)) {
    //         val.style.display = "block";
    //     }
    //     else {
    //         val.style.display = "none"
    //     }
    // })

    

// filterItem.value="";

})

// getting target value on theme and swnding to store fun*//


let theme = document.querySelectorAll('input[type="radio"]')


console.log(theme)
theme.forEach((themeOption)=>{
    themeOption.addEventListener("click", (e)=>{
    saveItem(themeOption.id);
    console.log(e.target)
    })
   
})


// storing in local storage
function saveItem(para){
    localStorage.setItem("name",para)
}

// Apply that value

function applyTheme(){

        const getData = localStorage.getItem("name");
        theme.forEach((themeop)=>{
            if(getData===themeop.id){
                themeop.checked="true";
            }
        })


}

window.onload=applyTheme();


// storing item value to local storage

// function toStoreItem(key,lidata){
//     localStorage.setItem("data "+key.toString(),lidata);
// }

// function togetItem(){
// const data = localStorage.getItem("data 4")


// }

// let todoItems= document.querySelectorAll(".list-group-item")
// console.log(todoItems)
// todoItems.forEach((val,key)=>{
//     let tCont=val.childNodes[0].textContent;
//     toStoreItem(key,tCont);
// })

// window.onload=togetItem();






