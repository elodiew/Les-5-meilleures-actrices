$(function () {

    var $mainMenuItems = $("#main-menu ul").children("li"),
        totalMainMenuItems = $mainMenuItems.length,
        openedIndex = 1,

        init = function () {
            bindEvents();
            if (validIndex(openedIndex)) animateItem($mainMenuItems.eq(openedIndex), true, 700);
        },

        bindEvents = function () {

            $mainMenuItems.children(".images").click(function () {
                var newIndex = $(this).parent().index();
                checkAndAnimateItem(newIndex);
            });

            $(".button").hover(
                function () {
                    $(this).addClass("hovered");
                },
                function () {
                    $(this).removeClass("hovered");
                }
            );

            $(".button").click(function () {
                var newIndex = $(this).index();
                checkAndAnimateItem(newIndex);
            });


        },

        validIndex = function (indexToCheck) {
            return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
        },

        animateItem = function ($item, toOpen, speed) {
            var $colorImage = $item.find(".color"),
                itemParam = toOpen ? {
                    width: "420px"
                } : {
                    width: "140px"
                },
                colorImageParam = toOpen ? {
                    left: "0px"
                } : {
                    left: "140px"
                };
            $colorImage.animate(colorImageParam, speed);
            $item.animate(itemParam, speed);
        },

        checkAndAnimateItem = function (indexToCheckAndAnimate) {
            if (openedIndex === indexToCheckAndAnimate) {
                animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
                openedIndex = -1;
            } else {
                if (validIndex(indexToCheckAndAnimate)) {
                    animateItem($mainMenuItems.eq(openedIndex), false, 250);
                    openedIndex = indexToCheckAndAnimate;
                    animateItem($mainMenuItems.eq(openedIndex), true, 250);
                }
            }
        };

    init();



    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml1 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({
            loop: false
        })
        .add({
            targets: '.ml1 .letter',
            scale: [0.3, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 600,
            delay: (el, i) => 70 * (i + 1)
        }).add({
            targets: '.ml1 .line',
            scaleX: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 700,
            offset: '-=875',
            delay: (el, i, l) => 80 * (l - i)
        })






});