/* ======== Animation Variables ======== */
var chicken,
    chickenBody,
    chickenFeet,
    chickenTail,
    scene12,
    logoBgBig,
    maskingGrass,
    maskingGrass2,
    glow,
    text1,
    text2,
    text3,
    text4,
    text5,
    scene5,
    logo,
    logo2,
    logo3,
    logo4,
    flag,
    replayText,
    replayBtn,
    mask,
    mask2,
    shine,
    cta;
/* ======== Preload Images ======== */
var preloadImages = [
    "Chicken_FullLegs.png",
    "Chicken_NOLegs.png",
    "chicken-tail.png",
    "flag-1.png",
    "flag-2.png",
    "glow.png",    
    "logo.png",
    "logo-2.png",
    "logo-3.png",
    "logo-bg-big.png",
    "masking-grass.png",    
    "masking-grass-2.png",
    "replay-btn.png",
    "replay-text.png",
    "shine.png",
    "cta.png",
    "text-4.png",
    "text-5.png"
];
function preload() {
    var lastLoadedImage = 0;
    document.getElementById("container_dc").style.display = "none";
    loadNext();
    function loadNext() {
        if (lastLoadedImage >= preloadImages.length) {
            init();
        } else {
            var img = new Image();
            img.src = preloadImages[lastLoadedImage];
            img.onload = loadNext;
        }
        lastLoadedImage++;
    }
}

function init() {  
    /* ======== Show Ad ======== */
    document.getElementById("container_dc").style.display = "block";

    /* ======== Animation Variables ======== */
    chicken = document.querySelector(".chicken");
    chickenBody = document.querySelector(".chicken-body");
    chickenFeet = document.querySelector(".chicken-feet");
    chickenTail = document.querySelector(".chicken-tail");
    scene12 = document.querySelector(".scene-1-2");
    logoBgBig = document.querySelector(".logo-bg-big");
    maskingGrass = document.querySelector(".masking-grass");
    maskingGrass2 = document.querySelector(".masking-grass-2");
    glow = document.querySelector(".glow");
    text1 = document.querySelector(".text-1");
    text2 = document.querySelector(".text-2");
    text3 = document.querySelector(".text-3");
    text4 = document.querySelector(".text-4");
    text5 = document.querySelector(".text-5");
    scene5 = document.querySelector(".scene-5");
    logo = document.querySelector(".logo");
    logo2 = document.querySelector(".logo-2");
    logo3 = document.querySelector(".logo-3");
    flag = document.querySelector(".flag");
    replayText = document.querySelector(".replay-text");
    replayBtn = document.querySelector(".replay-btn");
    mask = document.querySelector(".mask");
    mask2 = document.querySelector(".mask-2");
    shine = document.querySelector(".shine");
    cta = document.querySelector(".cta");

    addListeners();
    timeline();  
}

/* ======== TIMELINE ======== */
function timeline() {
        
    /* ======== Animation Timing ======== */

    // Scene 1 - Static

    // Scene 2 
    setTimeout(function() {
        chicken.className = "chicken chicken-anim-1";
    }, 0);
    setTimeout(function() {
        chicken.className = "chicken chicken-jump-0";
        logoBgBig.className = "logo-bg-big hide-2";
        maskingGrass.className = "masking-grass hide-2";
    }, 1000);
    setTimeout(function() {
        text1.className = "text-1 text-offset show";
    }, 1300);
    setTimeout(function() {
        glow.className = "glow show-opacity-2";
        mask.style.height = "270px";
    }, 1500);

    // Scene 3
    setTimeout(function() {
        glow.style.opacity = "0.7";
        glow.className = "glow hide-opacity-2";

        chickenBody.className = "chicken-body chicken-body-anim-1";
        chickenFeet.className = "chicken-feet chicken-feet-anim-1";
    }, 3000);
    setTimeout(function() {
        scene12.className = "scene12 hide-1";
        chicken.className = "chicken chicken-jump-1";
        mask.style.height = "600px";
    }, 3500);
    setTimeout(function() {
        text2.className = "text-2 text-offset show";
    }, 3700);
    setTimeout(function() {
        chickenBody.className = "chicken-body chicken-body-anim-2";
        chickenTail.className = "chicken-tail chicken-tail-anim-1";
        chickenFeet.className = "chicken-feet";
    }, 4100);

    // Scene 4
    setTimeout(function() {
        chickenBody.className = "chicken-body chicken-body-anim-1";
        chickenFeet.className = "chicken-feet chicken-feet-anim-1";
    }, 6200);

    setTimeout(function() {
        chicken.className = "chicken chicken-jump-2";
        text2.className = "text-2 hide-1";
    }, 6700);
    setTimeout(function() {
        text3.className = "text-3 text-offset show";
    }, 6900);
    setTimeout(function() {
        chicken.className = "chicken chicken-roll-in";
    }, 7600);
    setTimeout(function() {
        logo2.className = "logo-2 logo-roll-in";
        chicken.className = "chicken chicken-scale";
    }, 7800);

    setTimeout(function() {
        logo2.className = "logo-2 logo-roll-out";
    }, 9350);
    setTimeout(function() {
        chicken.className = "chicken chicken-roll-out";
        chickenBody.className = "chicken-body";
        chickenFeet.className = "chicken-feet";
    }, 9600);

    // Scene 5
    setTimeout(function() {
        chickenBody.className = "chicken-body chicken-body-anim-1";
        chickenFeet.className = "chicken-feet chicken-feet-anim-1";
    }, 10100);

    setTimeout(function() {
        chicken.className = "chicken chicken-jump-3";
        text3.className = "text-3 hide-1";

        scene5.className = "scene-5 text-offset show";
        maskingGrass2.className = "masking-grass-2 text-offset show";
    }, 10600); 
    setTimeout(function() {
        flag.className = "flag show";
    }, 11100);
    setTimeout(function() {
        flag.style.left = "41px";
        flag.src = "flag-2.png";
    }, 11400);

    // // Scene 6
    setTimeout(function() {
        logo3.style.opacity = "1";

        flag.className = "flag";
        flag.style.opacity = "0";

        maskingGrass2.className = "masking-grass-2";
        maskingGrass2.style.opacity = "0";
        chicken.style.opacity = "0";
        text4.style.opacity = "0";
        logo.style.opacity = "0";
        logo3.className = "logo-3 logo-move";
        mask2.className = "mask-2 show";
    }, 12300);
    setTimeout(function() {
        cta.className = "cta show-opacity";
    }, 13000);

    setTimeout(function() {
        replayText.className = "replay-text show-opacity";
        replayBtn.className = "replay-btn show-opacity";
        replayBtn.style.zIndex = "110";
        // mask2.style.height = "69px";
    }, 13300);

    // End of animation
}

/* ======== Event Listeners ======== */
function is_touch_device() {
    return 'ontouchstart' in window; 
}
function addListeners() {
    var bgExit = document.getElementById("background_exit_dc");

    var shine = document.querySelector(".shine"),
        replayBtn = document.querySelector(".replay-btn");

    // click listeners 
    var eventName = is_touch_device() ? 'touchstart' : 'click';    
    bgExit.addEventListener(eventName, bgExitHandler, false);
    replayBtn.addEventListener(eventName, replayBanner, false);

    // hover
    bgExit.addEventListener("mouseover", function() {
        shine.style.transition = "all 2s ease-out";
        shine.style.webkitTransition = "all 2s ease-out";

        shine.style.left = "300px";
    }, false);

    bgExit.addEventListener("mouseout", function() {
        shine.style.transition = "all 0s";
        shine.style.webkitTransition = "all 0s";

        shine.style.left = "-100px";
    }, false);
    
    // // hover replay btn 
    // replayBtn.addEventListener("mouseover", function() {
    //     replayBtn.className = "replay-btn show-opacity replay-btn-hover";
    // }, false);

    // replayBtn.addEventListener("mouseout", function() {
    //     replayBtn.className = "replay-btn show-opacity";
    // }, false);




}
/* ======== Function Definitions ======== */

function bgExitHandler() {
    Enabler.exit('HTML5_Background_Clickthrough');
}

/* ======== Reset class names, position, opacity, z-index ======== */
function replayBanner() {
  
    scene12.className="scene-1-2";
    scene5.className="scene-5 text-offset";
    glow.className="glow";
    logoBgBig.className="logo-bg-big";
    text1.className="text-1 text-offset";
    flag.className="flag";
    flag.style.left = "29px";

    text4.className="text-4";
    logo.className="logo";
    chicken.className="chicken";
    maskingGrass.className="masking-grass";
    maskingGrass2.className="masking-grass-2";
    text2.className="text-2 text-offset";
    text3.className="text-3 text-offset";
    text5.className="text-5";
    mask2.className="mask-2";
    logo3.className="logo-3";
    cta.className="cta";
    replayText.className="replay-text";
    replayBtn.className="replay-btn";
    replayBtn.style.zIndex = "90";

    chickenBody.className = "chicken-body";
    chickenTail.className = "chicken-tail";
    chickenFeet.className = "chicken-feet";
    logo2.className = "logo-2";

    flag.src = "flag-1.png";

    text4.style.opacity = "1";
    logo.style.opacity = "1";
    logo3.style.opacity = "0";
    chicken.style.opacity = "";
    glow.style.opacity = "0";

    // mask2.style.height = "125px";

    timeline();
}