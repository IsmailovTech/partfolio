$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});



chat_ids = [1458688226]




async function sendMessage(text) {
    var errors = [];
    for (var chat_id in chat_ids) {
        console.log(chat_id)
        let res = await (await fetch(`https://api.telegram.org/bot2004981236:AAE3uNqCfSCL-kI9HdnKenjS7RGrkW4d5_M/sendMessage?chat_id=${chat_ids[chat_id]}&text=${text}`)).json()

        if (!res.ok) {
            errors.push(chat_id);
        }
    }
}

document.getElementById('send_tg_msg').onclick = async() => {
    var name = $("#message_name").val()
    var email = $("#message_email").val()
    var subject = $("#message_subject").val()
    var text = $("#message_message").val()
    await sendMessage(`name: ${name}    email: ${email}    subject: ${subject}    Message: ${text}`)
};