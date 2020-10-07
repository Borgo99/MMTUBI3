
(function() {

    var heightTranslated = 0.65;

    var html = document.querySelector("#html");

    var body = document.querySelector("#body");
    var header = document.querySelector(".header");
    var box1 = document.querySelector(".box1");    
    var box2 = document.querySelector("#box2"); 
    var box3 = document.querySelector("#box3");
    var footer = document.querySelector(".footer");

    //inizializzo
    bodyHeight = header.offsetHeight + box1.offsetHeight + box2.offsetHeight + box3.offsetHeight + footer.offsetHeight - window.innerHeight*heightTranslated;
    body.style.maxHeight = bodyHeight.toString() + "px";
    html.style.maxHeight = bodyHeight.toString() + "px";

    window.addEventListener("resize", function() {
        bodyHeight = header.offsetHeight + box1.offsetHeight + box2.offsetHeight + box3.offsetHeight + footer.offsetHeight - window.innerHeight*heightTranslated;
        body.style.maxHeight = bodyHeight.toString() + "px";
        html.style.maxHeight = bodyHeight.toString() + "px";
    })

})();