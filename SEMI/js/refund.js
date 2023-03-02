const img = document.getElementById("img");

img.addEventListener("click", function(){
    document.getElementById("query").style.visibility="visible";
    document.getElementById("query").style.width = "400px";
})

function refundTest(){

    const options="width=300, height=300, top=50, left=700";

    window.open("refund-pop-up.html", "popupWindow", options);


}
