(function(){

    var bgChanger = function(n) {

        var el = document.querySelector(".header");

        var Counter = function(n) {

            this.n = n;
            var i = 2;
            return {
                increase: function() {
                    i = i % n;
                    i = i + 1;
                },

                get: function() {
                    return i;
                }
            }

        }

        var counter = new Counter(n);
        
        var changeBg = function() {
            var i = counter.get();
            el.style.backgroundImage = 'url("img/img' + i + '-min.jpg")';
            counter.increase();
        }
        
        for(var i=0; i<4; i++) {
            changeBg();
        }
        setInterval(changeBg, 5000);

    }

    var headbarController = function() {

        //inizializzo
        var bar = document.querySelector(".headbar");
        var logo = document.querySelector(".header__logo");
        var box1 = document.querySelector(".box1");
        var box1_img = document.querySelector(".box1__container--img");
        var box1_subtitle = document.querySelector(".box1--subtitle");

        if (window.top > 5) {
            bar.classList.add("headbar--active");
            logo.classList.add("header__logo--scroll");
        } else {
            bar.classList.remove("headbar--active");
            logo.classList.remove("header__logo--scroll");
        }

        window.addEventListener("scroll", function() {
            
            if (window.scrollY > 5) {
                bar.classList.add("headbar--active");
                logo.classList.add("header__logo--scroll");
                box1.style.transform = "translateY(-55vh)";
                box1_img.style.opacity = "1";

                box1_subtitle.style.opacity = "1";
                box1_subtitle.style.transform = "none";

            } else {
                bar.classList.remove("headbar--active");
                logo.classList.remove("header__logo--scroll");
                box1.style.transform = "none";
                box1_img.style.opacity = "0";
            }

        });

    }

    var headbarBtnController = function() {

        var header = document.querySelector(".header");
        var box1 = document.querySelector(".box1");    
        var box2 = document.querySelector("#box2"); 
        
        var chisiamo = document.querySelector("#chi-siamo");
        var prodotti = document.querySelector("#prodotti");
        var contatti = document.querySelector("#contatti");
        var logo = document.querySelector("#logo");

        var nav1 = document.querySelector("#nav1");
        var nav2 = document.querySelector("#nav2");
        var nav3 = document.querySelector("#nav3");
        var nav = document.querySelector("#nav");
        var checkbox = document.querySelector("#navi-btn");

        chisiamo.addEventListener("click", function() {
            window.scrollTo({top: header.offsetHeight - window.screen.height*0.5, behavior: 'smooth' });
        });
        nav1.addEventListener("click", function() {
            checkbox.checked = false;
            window.scrollTo({top: header.offsetHeight - window.screen.height*0.5, behavior: 'smooth' });
        });

        prodotti.addEventListener("click", function() {
            window.scrollTo({top: header.offsetHeight + box1.offsetHeight - window.screen.height*0.42, behavior: 'smooth' });
        });
        nav2.addEventListener("click", function() {
            checkbox.checked = false;
            window.scrollTo({top: header.offsetHeight + box1.offsetHeight - window.screen.height*0.42, behavior: 'smooth' });
        });

        contatti.addEventListener("click", function() {
            window.scrollTo({top: header.offsetHeight + box1.offsetHeight + box2.offsetHeight - window.screen.height*0.5, behavior: "smooth" });
        });
        nav3.addEventListener("click", function() {
            checkbox.checked = false;
            window.scrollTo({top: header.offsetHeight + box1.offsetHeight + box2.offsetHeight - window.screen.height*0.5, behavior: 'smooth' });
        });

        logo.addEventListener("click", function() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        })

    }

    var controller = (function(){
        bgChanger(4);
        headbarController();
        headbarBtnController();
    })();

})();