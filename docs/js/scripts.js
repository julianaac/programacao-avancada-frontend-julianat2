$(document).ready(function () {

    /* Progressbar */
    /* falta inserir esquema para só fazer com que carregue quando chegar no container os elementos */

    let bar = new ProgressBar.Circle(circleA, {
        color: '#aaa',
        strokeWidth: 20,
        duration: 500,
        from: { color: '#eee', width: 1 },
        to: { color: '#ddd', width: 4 },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * 256);
            circle.setText(value);
        }
    });

    bar.animate(1.0)

    bar = new ProgressBar.Circle(circleB, {
        color: '#aaa',
        strokeWidth: 20,
        duration: 500,
        from: { color: '#aaa', width: 1 },
        to: { color: '#333', width: 4 },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * 47);
            circle.setText(value);
        }
    });

    bar.animate(1.0)

    bar = new ProgressBar.Circle(circleC, {
        color: '#aaa',
        strokeWidth: 20,
        duration: 500,
        from: { color: '#aaa', width: 1 },
        to: { color: '#333', width: 4 },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * 1253);
            circle.setText(value);
        }
    });

    bar.animate(1.0)

    bar = new ProgressBar.Circle(circleD, {
        color: '#aaa',
        strokeWidth: 20,
        duration: 500,
        from: { color: '#aaa', width: 1 },
        to: { color: '#333', width: 4 },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * 17);
            circle.setText(value);
        }
    });

    bar.animate(1.0)


    /* Parallax */
    
    $('#numbers-area').parallax({ imageSrc: 'img/cidadeparallax.png' });
    $('#pattern-img').parallax({ imageSrc: 'img/pattern.png' });

    /* Filtro da seção de portfólio */
    
    $('.filter-btn').on('click', function () {

        let type = $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        if (type == 'dsg-btn') {
            eachBoxes('dsg', boxes);
        } else if (type == 'dev-btn') {
            eachBoxes('dev', boxes);
        } else if (type == 'seo-btn') {
            eachBoxes('seo', boxes);
        } else {
            eachBoxes('all', boxes);
        }

    });

    function eachBoxes(type, boxes) {

        if (type == 'all') {
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function () {
                if (!$(this).hasClass(type)) {
                    $(this).fadeOut('slow');
                } else {
                    $(this).fadeIn();
                }
            });
        }
    }

    // Scroll do menu para as seções

    let navBtn = $('.nav-item');

    let bannerSection = $('#mainSlider');
    let aboutSection = $('#about-area');
    let servicesSection = $('#services-area');
    let teamSection = $('#team-area');
    let portfolioSection = $('#portfolio-area');
    let contactSection = $('#contact-area');

    let scrollTo = '';

    $(navBtn).click(function () {

        let btnId = $(this).attr('id');

        if (btnId == 'about-menu') {
            scrollTo = aboutSection;
        } else if (btnId == 'services-menu') {
            scrollTo = servicesSection;
        } else if (btnId == 'team-menu') {
            scrollTo = teamSection;
        } else if (btnId == 'portfolio-menu') {
            scrollTo = portfolioSection;
        } else if (btnId == 'contact-menu') {
            scrollTo = contactSection;
        } else {
            scrollTo = bannerSection;
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 1500);
    });

})