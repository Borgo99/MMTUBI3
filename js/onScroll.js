(function() {

    //DOMs
    var box2 = document.querySelector("#box2");
    var box2_container = document.querySelector(".box2__container");
    var box2_filter = document.querySelector(".box2--filter");
    var box2_bg = document.querySelector(".box2--bg");
    var box1 = document.querySelector(".box1");

    var box_products = document.querySelector(".box2__products");

    var footer = document.querySelector(".footer");
    var body = document.querySelector("#body");
    var header = document.querySelector(".header");
    var box3 = document.querySelector("#box3");

    var oneTimeCondition = true;
    window.addEventListener("scroll", function() {

        //box2 position
        if (window.scrollY > 500) {
            //box2.classList.add("box2--scrolled");
            box2_filter.style.opacity = "1";
            box2_container.style.opacity = "1";
        } else {
            //box2.classList.remove("box2--scrolled");
            box2_filter.style.opacity = "0";
            box2_container.style.opacity = "0";
        }
        
        if (window.scrollY < 100 || window.scrollY > box1.offsetHeight+box2.offsetHeight) {
            box2_bg.style.opacity = 0;
        } else {
            box2_bg.style.opacity = 1;
        }

        //effetto per i prodotti
        if (oneTimeCondition && window.scrollY > (box_products.offsetHeight - window.screen.height * 0.3) ) {
            oneTimeCondition = false;
            //console.log("It's working");
            for(var i=0; i<box_products.children.length; i++) {
                box_products.children[i].style.transform = "none";
            }
        }

        //blocco dopo il footer
        //console.log(footer.getBoundingClientRect().top + document.documentElement.scrollTop);
        //console.log(footer.offsetHeight);
        /*
        if (window.scrollY+window.innerHeight > (footer.offsetTop - window.screen.height*0.55) ) {
            console.log("JJJ");
            window.scrollTo(0, footer.offsetTop - window.screen.height*1);
        } */

    })   


})();