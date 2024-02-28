function slideAnime(){
	//====左に動くアニメーションここから===
		$('.leftAnime').each(function(){ 
			var elemPos = $(this).offset().top-50;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight){
				//左から右へ表示するクラスを付与
				//テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
				$(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
				$(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
			}else{
				//左から右へ表示するクラスを取り除く
				$(this).removeClass("slideAnimeLeftRight");
				$(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
				
			}
		});
		
	}
	// 画面をスクロールをしたら動かしたい場合の記述
	$(window).scroll(function (){
		slideAnime();/* アニメーション用の関数を呼ぶ*/
	}); // ここまで画面をスクロールをしたら動かしたい場合の記述

$(function () {
    $(window).scroll(function () {
        const windowHeight = $(window).height();
        const scroll = $(window).scrollTop();
    
        $('.elem').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 200) {
            $(this).addClass("is-show");
        }
        });
        $('.anime-slideLeft-con02').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 200) {
            $(this).addClass("is-show");
        }
        });
        $('.anime-slideRight-con02').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 200) {
            $(this).addClass("is-show");
        }
        });
        $('.anime-slideBottom-con02').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 200) {
            $(this).addClass("is-show");
        }
        });
        $('.anime-fadeSlideTop').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 300) {
            $(this).addClass("is-show");
        }
        });
        $('.anime-fadeSlideBottom').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 300) {
            $(this).addClass("is-show");
        }
        });
        $('.anime-fadeSlideLeft').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 300) {
            $(this).addClass("is-show");
        }
        });
        $('.anime-fadeSlideRight').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 300) {
            $(this).addClass("is-show");
        }
        });
        $('.anime-fadeSlideRight02').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
            $(this).addClass("is-show");
        }
        });
        $('.slide-in').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 300) {
            $(this).addClass("leftAnime");
        }
        });
        $('.glow').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 300) {
            $(this).addClass("is-show");
        }
        });
        $('.anim_flash').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 300) {
            $(this).addClass("is-show");
        }
        });
    });
    });


// 紙吹雪
particlesJS("particles-js",{
	"particles":{
		"number":{
			"value":100,//この数値を変更すると紙吹雪の数が増減できる
			"density":{
				"enable":false,
				"value_area":400
			}
		},
		"color": {
        "value": ["#EA5532", "#F6AD3C", "#FFF33F", "#00A95F", "#00ADA9", "#00AFEC","#4D4398", "#E85298"]//紙吹雪の色の数を増やすことが出来る
		},
		"shape":{
			"type":"polygon",//形状はpolygonを指定
			"stroke":{
				"width":0,
			},
			"polygon":{
				"nb_sides":4//多角形の角の数
			}
			},
			"opacity":{
				"value":1,
				"random":false,
				"anim":{
					"enable":true,
					"speed":20,
					"opacity_min":0,
					"sync":false
				}
			},
			"size":{
				"value":7.305992965476349,
				"random":true,//サイズをランダムに
				"anim":{
					"enable":true,
					"speed":1.345709068776642,
					"size_min":0.8,
					"sync":false
				}
			},
			"line_linked":{
				"enable":false,
			},
			"move":{
				"enable":true,
			"speed":5,//この数値を小さくするとゆっくりな動きになる
			"direction":"bottom",//下に向かって落ちる
			"random":true,//動きはランダムにならないように
			"straight":false,//動きをとどめない
			"out_mode":"out",//画面の外に出るように描写
			"bounce":false,//跳ね返りなし
				"attract":{
					"enable":false,
					"rotateX":600,
					"rotateY":1200
				}
			}
		},
		"interactivity":{
			"detect_on":"canvas",
			"events":{
				"onhover":{
					"enable":false,
				},
				"onclick":{
					"enable":false,
				},
				"resize":true
			},
		},
		"retina_detect":true
	});

particlesJS("particles-js-gold",{
	"particles":{
		"number":{
			"value":50,//この数値を変更すると紙吹雪の数が増減できる
			"density":{
				"enable":false,
				"value_area":400
			}
		},
		"color": {
        "value": ["#fff83f", "#d3d2c7", "#c5b646", "#e0c62f", "#fceda9"]//紙吹雪の色の数を増やすことが出来る
		},
		"shape":{
			"type":"polygon",//形状はpolygonを指定
			"stroke":{
				"width":0,
			},
			"polygon":{
				"nb_sides":4//多角形の角の数
			}
			},
			"opacity":{
				"value":1,
				"random":false,
				"anim":{
					"enable":true,
					"speed":20,
					"opacity_min":0,
					"sync":false
				}
			},
			"size":{
				"value":7.305992965476349,
				"random":true,//サイズをランダムに
				"anim":{
					"enable":true,
					"speed":1.345709068776642,
					"size_min":0.8,
					"sync":false
				}
			},
			"line_linked":{
				"enable":false,
			},
			"move":{
				"enable":true,
			"speed":5,//この数値を小さくするとゆっくりな動きになる
			"direction":"bottom",//下に向かって落ちる
			"random":false,//動きはランダムにならないように
			"straight":false,//動きをとどめない
			"out_mode":"out",//画面の外に出るように描写
			"bounce":false,//跳ね返りなし
				"attract":{
					"enable":false,
					"rotateX":600,
					"rotateY":1200
				}
			}
		},
		"interactivity":{
			"detect_on":"canvas",
			"events":{
				"onhover":{
					"enable":false,
				},
				"onclick":{
					"enable":false,
				},
				"resize":true
			},
		},
		"retina_detect":true
	});


