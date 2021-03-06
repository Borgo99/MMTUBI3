(function(){

    var heightTranslation = "65vh"; 

    var bar = document.querySelector(".headbar");
    var logo = document.querySelector(".header__logo");
    var logo_bar = document.querySelector(".header__logo-bar");
    var box1 = document.querySelector(".box1");
    var box1_img = document.querySelector(".box1__container--img");
    var box1_subtitle = document.querySelector(".box1--subtitle");
    //var nav_btn = document.querySelector(".navigation_checkbox");

    var header = document.querySelector(".header");
    var box2 = document.querySelector("#box2"); 
    
    var chisiamo = document.querySelector("#chi-siamo");
    var prodotti = document.querySelector("#prodotti");
    var contatti = document.querySelector("#contatti");

    var nav1 = document.querySelector("#nav1");
    var nav2 = document.querySelector("#nav2");
    var nav3 = document.querySelector("#nav3");
    var nav = document.querySelector("#nav");
    var checkbox = document.querySelector("#navi-btn");

    var header_scroll_icon = document.querySelector("#header-scroll-icon");

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
            //el.style.backgroundImage = 'url("img/img' + i + '-min.jpg")';
            el.style.backgroundImage = 'url("img/slide' + i + '.jpg")';
            counter.increase();
        }
        
        for(var i=0; i<n; i++) {
            changeBg();
        }
        setInterval(changeBg, 5000);

    }

    var headbarController = function() {

        if (window.top > 5) {
            bar.classList.add("headbar--active");
            logo.classList.add("header__logo--scroll");
        } else {
            bar.classList.remove("headbar--active");
            logo.classList.remove("header__logo--scroll");
        }

        checkbox.addEventListener("change", function(){
            if (nav_btn.checked) {
                logo_bar.style.zIndex = "-1";
            } else {
                logo_bar.style.zIndex = "10";
            }
        });

        window.addEventListener("scroll", function() {
            
            if (window.pageYOffset > 5) {
                bar.classList.add("headbar--active");
                logo.classList.add("header__logo--scroll");
                box1.style.transform = "translateY(-" + heightTranslation + ")";
                box1_img.style.opacity = "1";
                logo_bar.style.left = "2rem";

                box1_subtitle.style.opacity = "1";
                box1_subtitle.style.transform = "none";

            } else {
                bar.classList.remove("headbar--active");
                logo.classList.remove("header__logo--scroll");
                logo_bar.style.left = "-20rem";
                box1.style.transform = "none";
                box1_img.style.opacity = "0";
            }

        }, false);

    }

    var headbarBtnController = function() {

        chisiamo.addEventListener("click", function() {
            window.scrollTo({top: header.offsetHeight - window.screen.height*0.54, behavior: 'smooth' });
        });
        nav1.addEventListener("click", function() {
            checkbox.checked = false;
            logo.style.zIndex = "10";
            if (window.screen.width < 500) {
                window.scrollTo({top: header.offsetHeight - window.screen.height*0.65, behavior: 'smooth' });
            } else {
                window.scrollTo({top: header.offsetHeight - window.screen.height*0.55, behavior: 'smooth' });
            }
        });

        prodotti.addEventListener("click", function() {
            window.scrollTo({top: header.offsetHeight + box1.offsetHeight - window.screen.height*0.55, behavior: 'smooth' });
        });
        nav2.addEventListener("click", function() {
            checkbox.checked = false;
            logo.style.zIndex = "10";
            if (window.screen.width < 500) {
                window.scrollTo({top: header.offsetHeight + box1.offsetHeight - window.screen.height*0.65, behavior: 'smooth' });
            } else {
                window.scrollTo({top: header.offsetHeight + box1.offsetHeight - window.screen.height*0.48, behavior: 'smooth' });
            }
        });

        contatti.addEventListener("click", function() {
            window.scrollTo({top: header.offsetHeight + box1.offsetHeight + box2.offsetHeight - window.screen.height*0.5, behavior: "smooth" });
        });
        nav3.addEventListener("click", function() {
            checkbox.checked = false;
            logo.style.zIndex = "10";
            if (window.screen.width < 500) {
                window.scrollTo({top: header.offsetHeight + box1.offsetHeight + box2.offsetHeight - window.screen.height*0.65, behavior: 'smooth' });
            } else {
                window.scrollTo({top: header.offsetHeight + box1.offsetHeight + box2.offsetHeight - window.screen.height*0.5, behavior: 'smooth' });
            }
        });

        logo_bar.addEventListener("click", function() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        })

    }

    header_scroll_icon.addEventListener("click", function() {
        window.scrollTo(0, 10);
    });

    var controller = (function(){
        bgChanger(3);
        headbarController();
        headbarBtnController();
    })();

})();