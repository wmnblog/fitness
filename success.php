<!DOCTYPE html>
<html lang="ar">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="description" content="">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700&display=swap" rel="stylesheet">
    <style>
        body{margin:0;font-family:Roboto,sans-serif;font-weight:300;color:#141011}canvas{width:100%;height:100%;position:absolute}#particles-js{position:fixed;width:100%;height:100%;padding:0;background-color:#f2f2f2;background-repeat:no-repeat;z-index:999}@keyframes twist{0%{transform:scale(0)}60%{transform:scale(1.2)}70%{transform:scale(.9)}85%{transform:scale(1.1)}100%{transform:scale(1)}}#wrapper{position:relative;width:100vw;height:100vh}#content{position:absolute;top:0;bottom:0;left:0;right:0;max-width:520px;width:100%;height:430px;margin:auto;z-index:99999;text-align:center}.success-page-header{box-shadow: 0px 0px 80px rgba(223, 223, 223, 0.4);background:#fff;padding:39px 0}h2,h3{margin:0;font-weight:400}h2{font-size:24px;margin-top:20px;margin-bottom:5px}h3{font-size:16px}hr{background-color:#e2e2e2;height:1px;border:none;margin:32px 0}.success-page__text{font-size:24px;font-weight:500;line-height:30px;padding:0 50px;margin:0}.phone{font-weight:700;font-size:32px}.list-info{margin:10px 0;display:flex;justify-content:center;align-items:center}.edit-btn{display:flex;justify-content:center;align-items:center;text-decoration:none;background:#64aa75;color:#fff;width:75px;height:30px;font-size:16px;font-weight:400;margin-left:16px}.edit-btn span{margin-right:9px}.success-page-footer a{color:#64aa75;text-decoration:none}@media screen and (max-width:425px){#content{width:90%}}@media screen and (max-width:375px){.phone{font-size:26px}.success-page__text{padding:0 10px;font-size:22px}}@media screen and (max-width:320px){.phone{font-size:22px}}
    </style>
    <script>
        //Цвет фона
        var backgroundColor = "#f2f2f2";
        //Цвет тени
        var shadowColor = "#E2E2E2";
        //Цвет текста " If the number above is correct"
        var textColor = "#64aa75"
        //Цвет частичек (плавающих кружочков)
        var particleColor = "#739c3e";
        //Цвет фона кнопки Edit
        var btnbackground = "#64aa75";
        //Цвет текст кнопки Edit
        var btnColor = "#fff";
        //Цвет галочки
        var checkMarkColor = "#F1A900";
        // Скруглять края? да - true / нет - false
        var edgeRounding = false;
    </script>
</head>

<body>
<div id="particles-js"></div>
<div id="wrapper">
    <div id="content">
        <div class="mod success-page">
            <div class="success-page-header">
                <div class="success_icon">
                    <svg width="54" height="40" viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M54 5.88L19.92 40L0 20.06L5.87 14.18L19.91 28.24L48.13 0L54 5.88Z" fill="#F1A900"/>
                    </svg>
                </div>
                <h2 class="success-page__title">Thank you for your order!</h2>
                <h3>We will contact you shortly</h3>

            </div>
        </div>
    </div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<script src="https://threejs.org/examples/js/libs/stats.min.js"></script>
<script>
    $('#particles-js').css("background", backgroundColor);
    $('.success-page-header').css("box-shadow", '0px 0px 80px' + shadowColor);
    $('.success-page__message_fail__link').css("color", textColor);
    $('.edit-btn').css("background", btnbackground).css("color", btnColor);
    $('.success_icon path').css("fill", checkMarkColor);
    if (edgeRounding) {
        $('.success-page-header').css("border-radius", "20px");
        $('.edit-btn').css("border-radius", "16px")
    }

    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": particleColor
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 10,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 500,
                "color": "#53d397",
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": .5,
                "direction": "bottom",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 4,
                    "duration": 0.3,
                    "opacity": 1,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
</script>
</body>

</html>