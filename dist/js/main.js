$((function(){var i=$(window),t=$(".navbar");i.scrollTop()>="100"?t.css("backgroundColor","#171515"):t.css("backgroundColor","transparent"),i.scroll((function(){i.scrollTop()>="100"?t.css("backgroundColor","#171515"):t.css("backgroundColor","transparent")})),$(".searchbar").click((function(){$("#search").animate({top:0},500)})),$("#closeSearch").click((function(){$("#search").animate({top:"-74px"},500)})),$(".fit-text").fitText(.9,{minFontSize:"50px",maxFontSize:"180px"}),$(".music-fit-text").fitText(.8,{minFontSize:"50px",maxFontSize:"180px"}),$(".h3-fit-text").fitText(2.8,{minFontSize:"1px",maxFontSize:"30px"}),$(".upper-cameras").fitText(1.4,{minFontSize:"40px",maxFontSize:"1200px"}),$(".mt-big-fit-text").fitText(1.7,{minFontSize:"40px",maxFontSize:"120px"}),$(".my-normal-fit-text").fitText(1.7,{minFontSize:"30px",maxFontSize:"50px"}),$(".tab").slick({responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".music-slider ul li").click((function(){$(this).hasClass("active")||($(this).addClass("active").siblings().removeClass("active"),$(".tabs > div").hide(),$($(this).data("music")).fadeIn(700),$(".tab").slick("refresh"))})),$(".built-in ul li").click((function(){$(this).hasClass("active")||($(this).addClass("active").siblings().removeClass("active"),$(".built-in .apps .app").hide(),$($(this).data("app")).fadeIn(500))})),$(".pro-apps ul li").click((function(){$(this).hasClass("active")||($(this).addClass("active").siblings().removeClass("active"),$(".pro-apps .apps .app").hide(),$($(this).data("pro")).fadeIn(500))})),$("a, .serv").click((function(i){if(i.preventDefault(),void 0!==$(this).data("scroll")){$("html, body").animate({scrollTop:$($(this).data("scroll")).offset().top-80},1500);let i=$(".navbar-toggler"),t=$(".navbar-collapse ");t.hasClass("show")&&(t.removeClass("show"),i.addClass("collapsed"))}})),$(".scroll-to-top").click((function(){$("html, body").animate({scrollTop:0},3e3)}))}));