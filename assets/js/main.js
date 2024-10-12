/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js


****************************************************/
(function ($) {
    "use strict";

    var windowOn = $(window);
    ////////////////////////////////////////////////////
    // 01. PreLoader Js
    windowOn.on("load", function () {
        $(".preloader").fadeOut(500);
    });

    var headerArea = $(".sticky-active"),
        headerClone = headerArea.clone();

    function menuSticky(w) {
        if (w.matches) {
            $(".header").after('<div class="sticky-header-wrap"></div>');
            $(".sticky-header-wrap").html(headerClone);
            $(window).on("scroll", function () {
                var headerSelector = $(".sticky-header-wrap");
                var scroll = $(window).scrollTop();
                if (scroll >= 110) {
                    headerSelector.addClass("fixed");
                } else {
                    headerSelector.removeClass("fixed");
                }
            });
        }
    }
    var minWidth = window.matchMedia("(min-width: 992px)");
    if ($(".header").hasClass("sticky-active")) {
        menuSticky(minWidth);
    } else {
        windowOn.on("scroll", function () {
            var scroll = $(window).scrollTop();
            if (scroll < 100) {
                $(".header").removeClass("header__sticky");
            } else {
                $(".header").addClass("header__sticky");
            }
        });
    }

    ////////////////////////////////////////////////////
    // 02. Mobile Menu Js
    $(".mobile-menu-items").meanmenu({
        meanMenuContainer: ".side-menu-wrap",
        meanScreenWidth: "991",
        meanMenuCloseSize: "30px",
        meanRemoveAttrs: true,
        meanExpand: ['<i class="fal fa-plus"></i>'],
    });

    // Mobile Sidemenu
    $(".mobile-side-menu-toggle").on("click", function () {
        $(".mobile-side-menu, .mobile-side-menu-overlay").toggleClass("is-open");
    });

    $(".mobile-side-menu-close, .mobile-side-menu-overlay").on(
        "click",
        function () {
            $(".mobile-side-menu, .mobile-side-menu-overlay").removeClass("is-open");
        }
    );

    ////////////////////////////////////////////////////
    // 05. Search Js
    $(".search-toggle").on("click", function () {
        $(".search__area").addClass("opened");
    });
    $(".search-close-btn").on("click", function () {
        $(".search__area").removeClass("opened");
    });

    ////////////////////////////////////////////////////
    // 06. Sticky Header Js
    windowOn.on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $("#main-header").removeClass("header__sticky");
        } else {
            $("#main-header").addClass("header__sticky");
        }
    });

    ////////////////////////////////////////////////////
    // 07. Data CSS Js
    $("[data-background").each(function () {
        $(this).css(
            "background-image",
            "url( " + $(this).attr("data-background") + "  )"
        );
    });

    $("[data-width]").each(function () {
        $(this).css("width", $(this).attr("data-width"));
    });

    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });

    ////////////////////////////////////////////////////
    // 07. Nice Select Js
    $("select").niceSelect();

    ////////////////////////////////////////////////////
    //  Datetimepicker Js
    $(".date-picker").datetimepicker({
        timepicker: false,
        format: "d/m/Y",
    });
    $(".time-picker").datetimepicker({
        datepicker: false,
        format: "H:i",
        step: 5,
    });

    ////////////////////////////////////////////////////
    // 08. Odometer
    $(".odometer").waypoint(
        function () {
            var odo = $(".odometer");
            odo.each(function () {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        }, {
        offset: "80%",
        triggerOnce: true,
    }
    );

    // Side menu
    $(".side-menu-icon").on("click", function () {
        $(".side-menu-wrapper, .side-menu-overlay").toggleClass("is-open");
    });

    $(".side-menu-close, .side-menu-overlay").on("click", function () {
        $(".side-menu-wrapper, .side-menu-overlay").removeClass("is-open");
    });

    ///////////////////////////////////////////////////
    // 13. Masonary Js
    if ($(".property-gallery").length > 0) {
        var owlGallery = $(".property-gallery").owlCarousel({
            //add owl carousel in activation class
            loop: true,
            margin: 5,
            items: 4,
            navText: [
                '<button class="nav-left"><i class="fa-thin fa-chevron-left"></i></button>',
                '<button class="nav-right"><i class="fa-thin fa-chevron-right"></i></button>',
            ],
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                },
                767: {
                    items: 1,
                },
                992: {
                    items: 1,
                },
                1200: {
                    items: 1,
                },
            },
        });

        var filterItem = $(".gallery-filter .item").data("owl-filter");
        owlGallery.owlcarousel2_filter(filterItem);

        $(".gallery-filter").on("click", ".item", function () {
            $(this).siblings(".active").removeClass("active");
            $(this).addClass("active");
            var $item = $(this);
            var filter = $item.data("owl-filter");

            owlGallery.owlcarousel2_filter(filter);
            $(".popup-video").magnificPopup({
                type: "iframe",
            });
            event.preventDefault();
        });
    }

    // Sponsor Carousel
    $(".sponsor-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            992: {
                items: 5,
            },
            668: {
                items: 4,
            },
            300: {
                items: 2,
            },
        },
    });

    // Project Carousel
    $(".project-carousel").owlCarousel({
        center: true,
        items: 2,
        loop: true,
        nav: true,
        navText: [
            '<button class="nav-left"><i class="fa-thin fa-chevron-left"></i></button>',
            '<button class="nav-right"><i class="fa-thin fa-chevron-right"></i></button>',
        ],
        navContainer: ".custom-next-prev-wrap",
        margin: 30,
        responsive: {
            1200: {
                items: 4,
            },
            992: {
                items: 3,
            },
            600: {
                items: 2,
            },
            300: {
                items: 1,
                margin: 0,
            },
        },
    });

    $(".testimonial-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        Infinity: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    });

    // Project Carousel
    $(".beauly-apartment-carousel").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        nav: true,
        navText: [
            '<button class="nav-left"><i class="fa-thin fa-chevron-left"></i></button>',
            '<button class="nav-right"><i class="fa-thin fa-chevron-right"></i></button>',
        ],
        nav: true,
        margin: 30,
        responsive: {
            992: {
                items: 1,
            },
            600: {
                items: 1,
            },
            300: {
                items: 1,
            },
        },
    });

    ////////////////////////////////////////////////////
    // 13. Masonary Js
    $(".grid").imagesLoaded(function () {
        /* ======= ISOTOP Active ======= */
        $(".project-filter-items").imagesLoaded(function () {
            // Add isotope click function
            $(".project-filter li").on("click", function () {
                $(".project-filter li").removeClass("active");
                $(this).addClass("active");
                var selector = $(this).attr("data-filter");
                $(".project-filter-items").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: "linear",
                        queue: false,
                    },
                });
                return false;
            });

            $(".project-filter-items").isotope({
                itemSelector: ".single-item",
                layoutMode: "masonry",
            });
        });

        // filter items on button click
        $(".masonary-menu").on("click", "button", function () {
            var filterValue = $(this).attr("data-filter");
            $grid.isotope({
                filter: filterValue
            });
        });

        //for menu active class
        $(".masonary-menu button").on("click", function (event) {
            $(this).siblings(".active").removeClass("active");
            $(this).addClass("active");
            event.preventDefault();
        });
    });

    /* magnificPopup img view */
    $(".popup-image").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
    });

    /* magnificPopup video view */
    $(".popup-video").magnificPopup({
        type: "iframe",
    });

    ////////////////////////////////////////////////////
    // 14. Wow Js
    $(window).on("load", function () {
        var wow = new WOW({
            boxClass: "wow", // default
            animateClass: "animated", // default
            offset: 0, // default
            mobile: true, // default
            live: true, // default
        });
        wow.init();
    });

    ////////////////////////////////////////////////////
    // 16. Cart Quantity Js
    $(".cart-minus").click(function () {
        var $input = $(this).parent().find("input");
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $(".cart-plus").click(function () {
        var $input = $(this).parent().find("input");
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    ////////////////////////////////////////////////////
    // 17. Show Login Toggle Js
    $("#showlogin").on("click", function () {
        $("#checkout-login").slideToggle(900);
    });

    ////////////////////////////////////////////////////
    // 18. Show Coupon Toggle Js
    $("#showcoupon").on("click", function () {
        $("#checkout_coupon").slideToggle(900);
    });

    ////////////////////////////////////////////////////
    // 19. Create An Account Toggle Js
    $("#cbox").on("click", function () {
        $("#cbox_info").slideToggle(900);
    });

    ////////////////////////////////////////////////////
    // 20. Shipping Box Toggle Js
    $("#ship-box").on("click", function () {
        $("#ship-box-info").slideToggle(1000);
    });

    ////////////////////////////////////////////////////
    // 22. Parallax Js
    if ($(".scene").length > 0) {
        $(".scene").parallax({
            scalarX: 10.0,
            scalarY: 15.0,
        });
    }

    ////////////////////////////////////////////////////
    // 23. InHover Active Js
    $(".hover__active").on("mouseenter", function () {
        $(this)
            .addClass("active")
            .parent()
            .siblings()
            .find(".hover__active")
            .removeClass("active");
    });

    ////////////////////////////////////////////////////
    // 01. PreLoader Js
    windowOn.on("load", function () {
        $("#loading").fadeOut(500);
    });
    if ($("#loading").length > 0) {
        $(".closeLoader").each(function () {
            $(this).on("click", function (e) {
                e.preventDefault();
                $("#loading").fadeOut(500);
            });
        });
    }

    ////////////////////////////////////////////////////
    // 23. scrollTop init
    var beaulyScrollTop = document.querySelector(".beauly-scroll-top");
    if (beaulyScrollTop != null) {
        var scrollProgressPatch = document.querySelector(".beauly-scroll-top path");
        var pathLength = scrollProgressPatch.getTotalLength();
        var offset = 50;
        scrollProgressPatch.style.transition =
            scrollProgressPatch.style.WebkitTransition = "none";
        scrollProgressPatch.style.strokeDasharray = pathLength + " " + pathLength;
        scrollProgressPatch.style.strokeDashoffset = pathLength;
        scrollProgressPatch.getBoundingClientRect();
        scrollProgressPatch.style.transition =
            scrollProgressPatch.style.WebkitTransition =
            "stroke-dashoffset 10ms linear";
        window.addEventListener("scroll", function (event) {
            var scroll =
                document.body.scrollTop || document.documentElement.scrollTop;
            var height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            var progress = pathLength - (scroll * pathLength) / height;
            scrollProgressPatch.style.strokeDashoffset = progress;
            var scrollElementPos =
                document.body.scrollTop || document.documentElement.scrollTop;
            if (scrollElementPos >= offset) {
                beaulyScrollTop.classList.add("progress-done");
            } else {
                beaulyScrollTop.classList.remove("progress-done");
            }
        });
        beaulyScrollTop.addEventListener("click", function (e) {
            e.preventDefault();
            window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        });
    }
    // 23. scrollTop end

    // Restrict Save Webpage
    // window.addEventListener(
    //         "contextmenu",
    //         function(e) {
    //             e.preventDefault();
    //         }, !1
    //     ),
    //     (document.onkeydown = function(e) {
    //         return (
    //             123 != event.keyCode &&
    //             83 != event.keyCode &&
    //             (!e.ctrlKey || !e.shiftKey || e.keyCode != "I".charCodeAt(0)) &&
    //             (!e.ctrlKey || !e.shiftKey || e.keyCode != "C".charCodeAt(0)) &&
    //             (!e.ctrlKey || !e.shiftKey || e.keyCode != "J".charCodeAt(0)) &&
    //             (!e.ctrlKey || e.keyCode != "U".charCodeAt(0)) &&
    //             void 0
    //         );
    //     });
    // $(document).ready(function () {
        $("#request_qoute_form").validate({
            rules: {
                name: { required: true },
                email: { required: true, email: true },
                phone: { required: true, minlength: 10, maxlength: 10, digits: true },
                ride_time: { required: true },
                message: { required: true }
            },
            messages: {
                name: { required: "Please enter your Full Name" },
                email: {
                    required: "Please enter your email address",
                    email: "Please enter a valid email address",
                },
                phone: {
                    required: "Please enter your phone number",
                    minlength: "Phone number must be exactly 10 digits",
                    maxlength: "Phone number must be exactly 10 digits",
                    digits: "Please enter a valid phone number with only digits",
                },
                ride_time: { required: "Please enter your Time" },
                message: { required: "Please enter your Message" },
            },
            submitHandler: function (form, event) {
                // Prevent the form's default submit action (page reload)
                event.preventDefault();

                // Show SweetAlert loader before the AJAX call starts
                Swal.fire({
                    title: 'Submitting your request...',
                    text: 'Please wait a moment',
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading(); // Show Swal loader
                    },
                });

                // Create FormData object
                var formData = new FormData($(form)[0]);
                $.ajax({
                    type: "POST",
                    url: "/email-temp/mail_send.php",
                    data: formData,
                    contentType: false, // Don't set contentType
                    processData: false, // Don't process data
                    success: function (message) {
                        // Close the loader when the request completes
                        Swal.close();

                        console.log(message);
                        if (message === "Mail has been sent successfully!") {
                            Swal.fire("Successful!", "Your message has been sent!", "success");
                            $(form).trigger("reset");
                        } else {
                            Swal.fire("Error", "There was an issue sending your message.", "error");
                        }
                    },
                    error: function (t) {
                        // Close the loader if an error occurs
                        Swal.close();
                        Swal.fire("Error", "Error submitting form: " + t.statusText, "error");
                    },
                });
            },
        });
        $("#popupForm").validate({
            rules: {
                email: { required: true, email: true },
                name: { required: true },
                phone: { required: true, minlength: 10, maxlength: 10, digits: true },
            },
            messages: {
                email: {
                    required: "Please enter your email address",
                    email: "Please enter a valid email address",
                },
                name: { required: "Please enter your Full Name" },
                phone: {
                    required: "Please enter your phone number",
                    minlength: "Phone number must be exactly 10 digits",
                    maxlength: "Phone number must be exactly 10 digits",
                    digits: "Please enter a valid phone number with only digits",
                }
            },
            submitHandler: function (form, event) {
                // Prevent the form's default submit action (page reload)
                event.preventDefault();

                $("#enquiryModal").modal("hide");
                // Show SweetAlert loader before the AJAX call starts
                Swal.fire({
                    title: 'Submitting your request...',
                    text: 'Please wait a moment',
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading(); // Show Swal loader
                    },
                });

                // Create FormData object
                var formData = new FormData($(form)[0]);
                $.ajax({
                    type: "POST",
                    url: "/email-temp/mail_popupForm_send.php",
                    data: formData,
                    contentType: false, // Don't set contentType
                    processData: false, // Don't process data
                    success: function (message) {
                        // Close the loader when the request completes
                        Swal.close();

                        console.log(message);
                        if (message === "Mail has been sent successfully!") {
                            Swal.fire("Successful!", "Your message has been sent!", "success");
                            $(form).trigger("reset");
                        } else {
                            Swal.fire("Error", "There was an issue sending your message.", "error");
                        }

                        
                    },
                    error: function (t) {
                        // Close the loader if an error occurs
                        Swal.close();
                        Swal.fire("Error", "Error submitting form: " + t.statusText, "error");
                    },
                });
            },
        });
    // });
})(jQuery);