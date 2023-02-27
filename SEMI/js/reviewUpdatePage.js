const img = document.getElementById("img");

img.addEventListener("click", function(){
    console.log("test2");
    document.getElementById("query").style.visibility="visible";
    document.getElementById("query").style.width = "400px";
})



// img.addEventListener("mouseleave", function(){
//     console.log("test");
//     document.getElementById("query").style.visibility="hidden";
//     document.getElementById("query").style.width = "0px";
// })

