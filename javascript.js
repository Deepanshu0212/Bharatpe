const bt = document.querySelector("#btn");
const di = document.querySelector("#news-2");

let count=0;

bt.addEventListener("click",()=>{
    if(count==0){
    bt.style.backgroundColor  = "rgb(0, 170, 255)"
    bt.style.color = "white";
    bt.textContent = "VIEW LESS";
    di.style.display = "flex";
    count=1;
}
  else{
        bt.style.backgroundColor  = "white"
        bt.style.color = "rgb(0, 170, 255)";
        bt.textContent = "VIEW MORE";
        di.style.display = "none";
        console.log("Hello")
        count=0;
}
})
