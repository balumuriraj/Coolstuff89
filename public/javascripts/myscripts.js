/**
 * Created by MohanRaj on 7/8/2014.
 */


function showsection1do(){
    var hi = $("#section1-face-do");
    hi.show();
}
function hidesection1do(){
    var hi = $("#section1-face-do");
    hi.hide();
}
function showsection2do(){
    var hi = $("#section2-face-do");
    hi.show();
}
function hidesection2do(){
    var hi = $("#section2-face-do");
    hi.hide();
}
function shows1brow(){
    var hi = $("#section1-face-brow");
    hi.show();
}
function hides1brow(){
    var hi = $("#section1-face-brow");
    hi.hide();
}
function shows2brow(){
    var hi = $("#section2-face-brow");
    hi.show();
}
function hides2brow(){
    var hi = $("#section2-face-brow");
    hi.hide();
}
function showhi(){
    var hi = $("#face-hi");
    hi.show();
}
function hidehi(){
    var hi = $("#face-hi");
    hi.hide();
}
function showmulti(){
    var hi = $("#face-multi");
    hi.show();
}
function hidemulti(){
    var hi = $("#face-multi");
    hi.hide();
}
function showtie(){
    var hi = $("#face-tie");
    hi.show();
}
function hidetie(){
    var hi = $("#face-tie");
    hi.hide();
}
function showtrue(){
    var hi = $("#face-true");
    hi.show();
}
function hidetrue(){
    var hi = $("#face-true");
    hi.hide();
}
function showmove(){
    var hi = $("#face-move");
    hi.show();
}
function hidemove(){
    var hi = $("#face-move");
    hi.hide();
}
function showeyebrow(){
    var hi = $("#face-eyebrow");
    hi.show();
}
function hideeyebrow(){
    var hi = $("#face-eyebrow");
    hi.hide();
}

function whys1(){
    var hi = $("#why-s1");
    hi.toggle();
    setTimeout(function(){hi.hide();}, 8000);
}
function whys2(){
    var hi = $("#why-s2");
    hi.toggle();
    setTimeout(function(){hi.hide();}, 8000);
}
function whys3(){
    var hi = $("#why-s3");
    hi.toggle();
    setTimeout(function(){hi.hide();}, 8000);
}
$(document).ready(function () {

    $("#face-hi").hide();
    $("#face-multi").hide();
    $("#face-tie").hide();
    $("#face-true").hide();
    $("#face-move").hide();
    $("#face-eyebrow").hide();
    $("#section1-face-do").hide();
    $("#section2-face-do").hide();
    $("#section1-face-brow").hide();
    $("#section2-face-brow").hide();

    $("#why-s1").hide();
    $("#why-s2").hide();
    $("#why-s3").hide();

    var tabfun = function () {

        var tab = $("#img-tab");
        tab.css({
            'opacity': '1',
            '-webkit-transform': 'translateY(70%)',
            '-moz-transform': 'translateY(70%)',
            '-o-transform': 'translateY(70%)',
            'transform': 'translateY(70%)'
        });
    }

    var bulbfun = function () {
        var bulb = $('#img-bulb');
        bulb.css({
            'opacity': '1'
        });
    }

    var monitorfun = function () {

        var monitor = $("#img-monitor");
        monitor.css({
            'opacity': '1',
            '-webkit-transform': 'translateY(-70%)',
            '-moz-transform': 'translateY(-70%)',
            '-o-transform': 'translateY(-70%)',
            'transform': 'translateY(-70%)'
        });
    }

    var iconsfun = function () {
        var icons = $('#img-icons-monitor');
        icons.css({
            'opacity': '1'
        });
    }

    var picfun = function () {

        var pic = $("#img-pic");
        pic.css({
            'opacity': '1',
            '-webkit-transform': 'translateX(70%)',
            '-moz-transform': 'translateX(70%)',
            '-o-transform': 'translateX(70%)',
            'transform': 'translateX(70%)'
        });
    }

    var codefun = function () {

        var code = $("#img-code");
        code.css({
            'opacity': '1',
            '-webkit-transform': 'translateX(70%)',
            '-moz-transform': 'translateX(70%)',
            '-o-transform': 'translateX(70%)',
            'transform': 'translateX(70%)'
        });
    }

    var pendrivefun = function () {

        var pendrivefun = $("#img-pendrive");
        pendrivefun.css({
            'opacity': '1',
            '-webkit-transform': 'translateX(80%)',
            '-moz-transform': 'translateX(80%)',
            '-o-transform': 'translateX(80%)',
            'transform': 'translateX(80%)'
        });
    }



    var phone1fun = function () {

        var phone1 = $("#img-phone1");
        phone1.css({
            'opacity': '1',
            '-webkit-transform': 'translateY(-70%)',
            '-moz-transform': 'translateY(-70%)',
            '-o-transform': 'translateY(-70%)',
            'transform': 'translateY(-70%)'
        });
    }

    var sharefun = function () {
        $('#share').addClass('share-moveup');
    }


    setTimeout(tabfun, 500);
    setTimeout(bulbfun, 1000);
    setTimeout(monitorfun, 1500);
    setTimeout(pendrivefun, 2000);
    setTimeout(iconsfun, 2500);
    setTimeout(picfun, 3000);
    setTimeout(codefun, 3500);
    setTimeout(phone1fun, 3500);


    $('#fullpage').fullpage({
        slidesColor: ['#fff', '#fbc73b', '#f7efe2', '#fff'],
        css3: true,
        navigation: false,
        'navigationPosition': 'right',

        'afterLoad': function (anchorLink, index) {
            if (index == 1) {

            }

            if (index == 2) {
                var monitorfun = function () {

                    var monitor = $("#img-monitor-s2");
                    monitor.css({
                        'opacity': '1',
                        '-webkit-transform': 'translateY(-50%)',
                        '-moz-transform': 'translateY(-50%)',
                        '-o-transform': 'translateY(-50%)',
                        'transform': 'translateY(-50%)'
                    });
                }

                var multiiconsfun = function () {

                    var multiicons = $("#img-multimedia-icons-s2");
                    multiicons.css({
                        'opacity': '1'
                    });
                }

                var handfun = function () {

                    var hand = $("#img-hand-mobile-s2");
                    hand.css({
                        'opacity': '1',
                        '-webkit-transform': 'translateY(-50%)',
                        '-moz-transform': 'translateY(-50%)',
                        '-o-transform': 'translateY(-50%)',
                        'transform': 'translateY(-50%)'
                    });
                }

                var clickfun = function () {

                    var click = $("#img-click-s2");
                    click.css({
                        'opacity': '1',
                        '-webkit-transform': 'translate(50%, -50%)',
                        '-moz-transform': 'translate(50%, -50%)',
                        '-o-transform': 'translate(50%, -50%)',
                        'transform': 'translate(50%, -50%)'
                    });
                }

                var facefun = function () {

                    var face = $("#section1-face");
                    face.css({
                        'opacity': '1',
                        '-webkit-transform': 'translateY(-100%)',
                        '-moz-transform': 'translateY(-100%)',
                        '-o-transform': 'translateY(-100%)',
                        'transform': 'translateY(-100%)'
                    });
                }

                setTimeout(monitorfun, 1);
                setTimeout(multiiconsfun, 800);
                setTimeout(handfun, 500);
                setTimeout(clickfun, 1000);
                setTimeout(facefun, 300);
            }

            if (index == 3) {
                var boardfun = function () {

                    var board = $("#img-board");
                    board.css({
                        'opacity': '1',
                        '-webkit-transform': 'translateY(-70%)',
                        '-moz-transform': 'translateY(-70%)',
                        '-o-transform': 'translateY(-70%)',
                        'transform': 'translateY(-70%)'
                    });
                }

                var pencilfun = function () {

                    var pencil = $("#img-pencil");
                    pencil.css({
                        'opacity': '1',
                        '-webkit-transform': 'translateY(50%)',
                        '-moz-transform': 'translateY(50%)',
                        '-o-transform': 'translateY(50%)',
                        'transform': 'translateY(50%)'
                    });
                }

                var chemtubefun = function () {

                    var chemtube = $("#img-chemtube");
                    chemtube.css({
                        'opacity': '1',
                        '-webkit-transform': 'translateY(-70%)',
                        '-moz-transform': 'translateY(-70%)',
                        '-o-transform': 'translateY(-70%)',
                        'transform': 'translateY(-70%)'
                    });
                }

                var clickfun = function () {

                    var click = $("#img-click-s3");
                    click.css({
                        'opacity': '1',
                        '-webkit-transform': 'translate(50%, -50%)',
                        '-moz-transform': 'translate(50%, -50%)',
                        '-o-transform': 'translate(50%, -50%)',
                        'transform': 'translate(50%, -50%)'
                    });
                }

                var facefun = function () {

                    var face = $("#section2-face");
                    face.css({
                        'opacity': '1',
                        '-webkit-transform': 'translateY(-100%)',
                        '-moz-transform': 'translateY(-100%)',
                        '-o-transform': 'translateY(-100%)',
                        'transform': 'translateY(-100%)'
                    });
                }

                setTimeout(boardfun, 1);
                setTimeout(pencilfun, 500);
                setTimeout(chemtubefun, 1000);
                setTimeout(clickfun, 1500);
                setTimeout(facefun, 300);
            }

            if (index == 4) {
                var facefun = function () {

                    var face = $("#face-tech");
                    face.css({
                        'opacity': '1',
                        '-webkit-transform': 'translateY(-70%)',
                        '-moz-transform': 'translateY(-70%)',
                        '-o-transform': 'translateY(-70%)',
                        'transform': 'translateY(-70%)'
                    });
                }

                setTimeout(facefun, 1);
            }
        },

        'onLeave': function (index, newIndex, direction) {
            if (index == 3 && direction == 'down') {
                $('.section').eq(index - 1).removeClass('moveDown').addClass('moveUp');
            } else if (index == 3 && direction == 'up') {
                $('.section').eq(index - 1).removeClass('moveUp').addClass('moveDown');
            }

            $('#staticImg').toggleClass('active', (index == 2 && direction == 'down') || (index == 4 && direction == 'up'));
            $('#staticImg').toggleClass('moveDown', index == 3 && direction == 'down');
        }
    });
});