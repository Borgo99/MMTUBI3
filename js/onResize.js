
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

    var onetime_condition = true;
    window.addEventListener("resize", function() {
        if (window.screen.width > 500 || onetime_condition) {
            bodyHeight = header.offsetHeight + box1.offsetHeight + box2.offsetHeight + box3.offsetHeight + footer.offsetHeight - window.innerHeight*heightTranslated;
            body.style.maxHeight = bodyHeight.toString() + "px";
            html.style.maxHeight = bodyHeight.toString() + "px";
            onetime_condition = false;
        }
    })

})();