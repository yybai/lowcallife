;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#gtco-offcanvas, .js-gtco-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	$('.js-gtco-nav-toggle').addClass('gtco-nav-white');

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-gtco-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};

	var formTab = function() {

		$('.tab-menu a').on('click', function(event){
			var $this = $(this),
				data = $this.data('tab');

			$('.tab-menu li').removeClass('active');
			$this.closest('li').addClass('active')

			$('.tab .tab-content-inner').removeClass('active');
			$this.closest('.tab').find('.tab-content-inner[data-content="'+data+'"]').addClass('active');

			event.preventDefault();

		});

	};

	var offcanvasMenu = function() {

		$('#page').prepend('<div id="gtco-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-gtco-nav-toggle gtco-nav-toggle gtco-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#gtco-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#gtco-offcanvas').append(clone2);

		$('#gtco-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#gtco-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-gtco-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-gtco-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;

		// $('.gtco-section').waypoint( function( direction ) {


			$('.animate-box').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
					
					i++;

					$(this.element).addClass('item-animate');
					setTimeout(function(){

						$('body .animate-box.item-animate').each(function(k){
							var el = $(this);
							setTimeout( function () {
								var effect = el.data('animate-effect');
								if ( effect === 'fadeIn') {
									el.addClass('fadeIn animated-fast');
								} else if ( effect === 'fadeInLeft') {
									el.addClass('fadeInLeft animated-fast');
								} else if ( effect === 'fadeInRight') {
									el.addClass('fadeInRight animated-fast');
								} else {
									el.addClass('fadeInUp animated-fast');
								}

								el.removeClass('item-animate');
							},  k * 200, 'easeInOutExpo' );
						});
						
					}, 100);
					
				}

			} , { offset: '85%' } );
		// }, { offset: '90%'} );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var owlCarousel = function(){
		
		var owl = $('.owl-carousel-carousel');
		owl.owlCarousel({
			items: 3,
			loop: true,
			margin: 20,
			nav: true,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
			navText: [
		      "<i class='ti-arrow-left owl-direction'></i>",
		      "<i class='ti-arrow-right owl-direction'></i>"
	     	],
	     	responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    	}
		});


		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 20,
			nav: true,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
			navText: [
		      "<i class='ti-arrow-left owl-direction'></i>",
		      "<i class='ti-arrow-right owl-direction'></i>"
	     	]
		});


		

	};

	

	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".gtco-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#gtco-counter').length > 0 ) {
			$('#gtco-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};


	var dateTimeForm = function() {
		// $('#date-start').datepicker();
		$('#date').datetimepicker({
         format: 'DD/MM/YYYY'
     	});
		$('#time').datetimepicker({
			format: 'LT'	
		});

		
	};

	var parallax = function() {

		if ( !isMobile.any() ) {
			$(window).stellar({
				horizontalScrolling: false,
				hideDistantElements: false, 
				responsive: true

			});
		}
	};


	
	$(function(){
		mobileMenuOutsideClick();
		formTab();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		owlCarousel();
		goToTop();
		loaderPage();
		counterWayPoint();
		dateTimeForm();
		parallax();
	});


}());










var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
  });
});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});























function blurElement(element, size) {
	var filterVal = 'blur(' + size + 'px)';
	$(element).css({
		'filter':filterVal,
		'webkitFilter':filterVal,
		'mozFilter':filterVal,
		'oFilter':filterVal,
		'msFilter':filterVal,
		'transition':'all 1.5s ease-out',
		'-webkit-transition':'all 1.5s ease-out',
		'-moz-transition':'all 1.5s ease-out',
		'-o-transition':'all 1.5s ease-out'
	});
}
  'use strict';
  
  var placeholders = document.querySelectorAll('.styled-input__placeholder-text'),
	  inputs = document.querySelectorAll('.styled-input__input');
  
  placeholders.forEach(function (el, i) {
	  var value = el.innerText,
		  html = '';
	  for (var _iterator = value, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
		  var _ref;
  
		  if (_isArray) {
			  if (_i >= _iterator.length) break;
			  _ref = _iterator[_i++];
		  } else {
			  _i = _iterator.next();
			  if (_i.done) break;
			  _ref = _i.value;
		  }
  
		  var w = _ref;
  
		  if (!value) value = '&nbsp;';
		  html += '<span class="letter">' + w + '</span>';
	  }
	  el.innerHTML = html;
  });
  
  inputs.forEach(function (el) {
	  var parent = el.parentNode;
	  el.addEventListener('focus', function () {
		  parent.classList.add('filled');
		  placeholderAnimationIn(parent, true);
	  }, false);
	  el.addEventListener('blur', function () {
		  if (el.value.length) return;
		  parent.classList.remove('filled');
		  placeholderAnimationIn(parent, false);
	  }, false);
  });
  
  function placeholderAnimationIn(parent, action) {
	  var act = action ? 'add' : 'remove';
	  var letters = parent.querySelectorAll('.letter');
	  letters = [].slice.call(letters, 0);
	  if (!action) letters = letters.reverse();
	  letters.forEach(function (el, i) {
		  setTimeout(function () {
			  var contains = parent.classList.contains('filled');
			  if (action && !contains || !action && contains) return;
			  el.classList[act]('active');
		  }, 50 * i);
	  });
  }
  
  setTimeout(function () {
	  document.body.classList.add('on-start');
  }, 100);
  
  setTimeout(function () {
	  document.body.classList.add('document-loaded');
  }, 1800);
  
  
  
  
  
  
  
  
  
  
  
  
$( document ).ready(function() {
	$('[data-toggle="popover"]').popover();   
	$('#recalculate').hide();
	$('#totalDivide').hide();
	$('#changeWeight').hide();
	$('#showUpdate').click(function(){
		$('#changeWeight').show();
	 	$('#showUpdate').hide();
	})
	$('#cancelWeight').click(function(){
	  $('#changeWeight').hide();
	  $('#showUpdate').show();
	})
  
	$('#registeredUser').hide();
	$('#hideUser').hide();
	$('#showUser').click(function(){
	  $('#registeredUser').show();
	  $('#hideUser').show();
	  $('#showUser').hide();
	})
	$('#hideUser').click(function(){
	  $('#registeredUser').hide();
	  $('#hideUser').hide();
	  $('#showUser').show();
	})
  
	$('#intake-submit').hide();

	$('#userFeedback').hide();
	$('#hideFeedback').hide();
	$('#showFeedback').click(function(){
	  $('#userFeedback').show();
	  $('#hideFeedback').show();
	  $('#showFeedback').hide();
	})
	$('#hideFeedback').click(function(){
	  $('#userFeedback').hide();
	  $('#hideFeedback').hide();
	  $('#showFeedback').show();
	})
	$('#searchDiv').hide();
	

  
	$('.form').hide();
	$('.login-words').hide();
	$('#paging').hide();
	// $('#tableDiv').hide();
	$('#hideTable').hide();
	$('#showTable').click(function(){
	  $('#showTable').hide();
	  $('#hideTable').show();
	  $('#tableDiv').show();
	  // $('#result_table').easyPaginate({
	  //   paginateElement:'tr',
	  //   elementsPerPage:5,
	  // })
	})
	$('#hideTable').click(function(){
	  $('#showTable').show();
	  $('#hideTable').hide();
	  $('#tableDiv').hide();
	})
  
  
	$(".welcome_words").animate({opacity: 1});
	$(".welcome_intro").animate({opacity: 1});
  
  
  
  
  
  
	var t = new Date();
	console.log(t.getHours());
	if(t.getHours() <12){
	  $('#greeting').html("Good Morning! ");
	}else if(t.getHours() <18){
	  $('#greeting').html("Good Afternoon! ");
	}else{
	  $('#greeting').html("Good Evening!");
	}
  
  
  
  
  
	// $('#showTable').click(function(){
  
	// })
  
  
  
  
  
  
  
	var total_cal = 0;
	var intake_list = [];
	var nutrionCal = 0 ;
	var nutrionPro = 0 ;
	var nutrionSugar = 0;
	var hr = "<hr>"
  
	$('#intake-search').click(function(){
		$('#searchDiv').show();
	  var q = document.getElementById("intakeInputBox").value;
	  var ds = document.getElementById("ds").value;
	  if ((ds !== "Standard Reference") & (ds !== "Branded Food Products")){
		ds = "";
	  }
  
	  $.ajax({
		url:"https://api.nal.usda.gov/ndb/search/?api_key=V9HNK7n5Os363SabjLiwkcSa3m3HWP73M8rX4f2V&format=JSON&q="+q + "&ds="+ds +"&sort=r",
		success:function(result){
		  $('#searchResult').html("");
		  result.list.item.forEach(function(i){
			var row = '<li type="button" class="container" id="'+i.ndbno+'" data-toggle="modal" data-target="#myModal">';

			row += '<p>' + i.name + '</p>';
			row += '</li>';
			
			$('#searchResult').append(row);
			$('#searchResult').append(hr);
		  })
		//   $('.easyPaginateNav').html("");
		//   $('#searchResult').easyPaginate({
		// 	paginateElement: 'div',
		// 	elementsPerPage: 10,
		// 	// effect: 'climb'
		//   });
  
		}
	  })
	})
	
  
	$('#recalculate').click(function(){
		document.getElementById("itemQuantity").setAttribute("style", "border:2px solid rgba(0, 0, 0, 0.1)");
		document.getElementById("itemQuantity").value = 1;

		$("#dailyResult").html("");
		$("#dailyTotal").html("");
		total_cal = 0;
		$('#recalculate').hide();
		$('#intake-submit').hide();
		$("#forTotal").val(0);
	})
	var ndbno = 0;
	var elementVal = 0;
	var elementName = "";
	$("#searchResult").on("click",".container",function(){
		// $('#recalculate').show();
		// $('#intake-submit').show();
		$('#totalDivide').show();
		// console.log(  $(this).attr('id')  );
		ndbno = $(this).attr('id');
		$.ajax({
			url:"https://api.nal.usda.gov/ndb/V2/reports?api_key=V9HNK7n5Os363SabjLiwkcSa3m3HWP73M8rX4f2V&type=f&format=json&ndbno="+ndbno,
			success:function(result){
			
				//find nutrient id = 208 which is "Energy" = "Calory"
				for (i=0;i<result.foods[0].food.nutrients.length;i++){
					if (result.foods[0].food.nutrients[i].nutrient_id == "208"){
					nutrionCal = result.foods[0].food.nutrients[i].value;
					
					}
				}


				//find nutrition id = 203 which is "Protein"
				for (i=0;i<result.foods[0].food.nutrients.length;i++){
					if (result.foods[0].food.nutrients[i].nutrient_id == "203"){
					nutrionPro = result.foods[0].food.nutrients[i].value;
					
					}
				}

				for (i=0;i<result.foods[0].food.nutrients.length;i++){
					if (result.foods[0].food.nutrients[i].nutrient_id == "269"){
					nutrionSugar = result.foods[0].food.nutrients[i].value;
					
					}
				}


				$('#modal-name').html(result.foods[0].food.desc.name);
				$('#proteinValue').html(nutrionPro);
				$('#sugarsValue').html(nutrionSugar);
				$('#caloryValue').html(nutrionCal);
				elementVal = nutrionCal;
				elementName = result.foods[0].food.desc.name;
				// $('#caloryValue').attr('value') = nutrion;
				
				// $('#modal-name').val(result.foods[0].food.desc.name);


				var i = parseInt(nutrionCal);
				total_cal = total_cal + i;
				// $("#dailyResult").append("<div id='"+ndbno+"' value= "+nutrion+"  >"+ result.foods[0].food.desc.name+" <br> <b>CALORY : </b> " + nutrion + "<br> </div>");
				// $("#dailyTotal").html("Total calories you take today is: <b>" + total_cal + "</b>");
				// $("#forTotal").val(total_cal);




				// $('#saveSelect').click(function(){
				// 	console.log("hi");
				// 	var i = parseInt(nutrion);
				// 	total_cal = total_cal + i;
				// 	$("#dailyResult").append(result.foods[0].food.desc.name+" <br> <b>CALORY : </b> " + nutrion + "<br>");
				// 	$("#dailyTotal").html("Total calories you take today is: <b>" + total_cal + "</b>");
				// 	$("#forTotal").val(total_cal);
				// })
			}
			
		})


		
	
	});
	// if($('#deleteSelect').data('clicked')){
	// 	console.log("hi");
	// }
	var itemQuant = 1;
	var isNum = true;
	$('#quantityAlert').hide();
	$('#itemQuantity').keyup(function(){
		// if($('#itemQuantity').val()){
		// 	console.log( $('#itemQuantity').val()  );
		// }
		var quantity = parseInt($('#itemQuantity').val());
		if((   typeof quantity == 'number') && ($('#itemQuantity').val()) ){
			document.getElementById("itemQuantity").setAttribute("style", "border-color:orange");
			console.log( "yes" );
			$('#quantityAlert').hide();
			itemQuant = $('#itemQuantity').val();
			isNum = true;
		}else{
			console.log("no");
			document.getElementById("itemQuantity").setAttribute("style", "border-color:red");
			$('#quantityAlert').show();
			isNum = false;

		}
	})

	$('#saveSelect').click(function(){
		console.log(isNum);
		if(isNum == false){
			alert("You have to enter quantity number!");
			total_cal = total_cal - elementVal;
			if(total_cal == 0){
				$('#recalculate').hide();
				$('#intake-submit').hide();
			}
			document.getElementById("itemQuantity").setAttribute("style", "border:2px solid rgba(0, 0, 0, 0.1)");
			document.getElementById("itemQuantity").value = 1;
			$('#quantityAlert').hide();
			isNum = true;
			return;
		}
		$('#recalculate').show();
		$('#intake-submit').show();
		console.log(itemQuant);
		
		total_cal = total_cal + (  itemQuant - 1   ) * elementVal;
		elementVal = elementVal * itemQuant;
		



		$("#dailyResult").append("<div id='"+ndbno+"' value= "+elementVal+"  >"+ elementName+" <br> <b>CALORY : </b> " + elementVal + ", <b> Quantity : </b>" + itemQuant + "  <br> </div>");
		$("#dailyTotal").html("Total calories you take today is: <b>" + total_cal + "</b>");
		$("#forTotal").val(total_cal);
		document.getElementById("itemQuantity").setAttribute("style", "border:2px solid rgba(0, 0, 0, 0.1)");
		document.getElementById("itemQuantity").value = 1;
	});
	$('#deleteSelect').click(function(){
		total_cal = total_cal - elementVal;
		elementVal =0;
		elementName = "";
		$('#quantityAlert').hide();
		document.getElementById("itemQuantity").setAttribute("style", "border:2px solid rgba(0, 0, 0, 0.1)");
		document.getElementById("itemQuantity").value = 1;

	})


	$('#registBACK').hide();
	$(".welcome_words").click(function(){
  
	  $(".welcome_words").hide();
	  $('.form').show();
	  $('.login-words').show();
	  $('#registBACK').show();
	  $('.welcome_intro').hide();
	  blurElement(".welcome-bg",10);
	  $('._blank').hide();
	  $(".regist").animate({opacity: 1});
	  $(".login_back").animate({opacity: 1});
	})
	$('.welcome_intro').click(function(){
	  window.location.replace("/intro");
	})
  
  
  
	const changeText = function (el, text, color) {
	  el.text(text).css('color', color);
	};
	
	
	$('.input-password').keyup(function(){
	  
	  let len = this.value.length;
	  const pbText = $('.signup-form .progress-bar_text');
  
	  if (len === 0) {
		$(this).css('border-color', '#2F96EF');
		changeText(pbText, '           ', '#aaa');
	  } else if (len > 0 && len <= 4) {
		$(this).css('border-color', '#FF4B47');
		changeText(pbText, 'Too weak', '#FF4B47');
	  } else if (len > 4 && len <= 8) {
		$(this).css('border-color', '#F9AE35');
		changeText(pbText, 'Could be stronger', '#F9AE35');
	  } else {
		$(this).css('border-color', '#2DAF7D');
		changeText(pbText, 'Strong password', '#2DAF7D');
	  } 
	});
  });