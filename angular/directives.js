'use strict';
var app = angular.module('app');

/*	****************

	Simple Square link Directive

	**************** */

app.directive('mySquare', function(){
	return {
		restrict: 'E',
		templateUrl:'partials/square.html'
,		link: function(scope, elm, attrs) {
			var color=attrs.color;
			var image=attrs.image;
			var type=attrs.type;
			var title=attrs.title;
			var link=attrs.link;

			$(elm).addClass('span-'+type);
			$(elm).find("span").eq(0).css({
				'background-color':color,
				'background-image':'url('+image+')',
				'background-repeat':'no-repeat',
				'background-position':'50% 50%',
				'background-size':'cover'
			});
			$(elm).find("span").eq(1).html(title);
			$(elm).click(function(){
				window.location='#/'+link;
			})
		}
	}
});

/*	****************

	Weather Directive

	**************** */

app.directive('theWeather', function(){
	return {
		restrict: 'E',
		templateUrl:'partials/square.html'
,		link: function(scope, elm, attrs) {


			if (navigator.geolocation) {
		        navigator.geolocation.getCurrentPosition(showPosition);
		    } else { 
		        console.log("Geolocation is not supported by this browser.");
		    }

		    function showPosition(position) {		    	
				var weatherKEY='a4a9dafccc3f487b';
				var url = 'http://api.wunderground.com/api/'+weatherKEY+'/conditions/q/'+location+'.json';
			    var location = position.coords.latitude+','+position.coords.longitude;
			    $.ajax({ 
				url : 'http://api.wunderground.com/api/'+weatherKEY+'/geolookup/conditions/q/'+location+'.json', 
				dataType : "jsonp", 
				success : function(parsed_json) { 
					var location = parsed_json['location']['city']; 
					var temp_f = parsed_json['current_observation']['temp_f']; 
					var image = parsed_json['current_observation']['icon_url'];
					var feels_like = parsed_json['current_observation']['feelslike_f'];
					var city = parsed_json['current_observation']['display_location']['city'] + ',' + parsed_json['current_observation']['display_location']['state'];
					
					var title = city + ' Feels like:' + feels_like + ' Temp:' + temp_f + ' F'; 
					$(elm).find("span").eq(0).css({
						'background-image':'url('+image+')',
						'background-repeat':'no-repeat',
						'background-position':'50% 50%'
					});
					$(elm).find("span").eq(1).html(title);
				} 
				});
			}
			

			var color=attrs.color;
			var type=attrs.type;
			var title=attrs.title;
			var link=attrs.link;

			$(elm).addClass('span-'+type);
			$(elm).find("span").eq(0).css({
				'background-color':color
			});
			$(elm).click(function(){
				window.location='#/'+link;
			})
		}
	}
});

/*	****************

	Time Directive

	**************** */

app.directive('theTime', function(){
	return {
		restrict: 'E',
		templateUrl:'partials/square.html'
,		link: function(scope, elm, attrs) {
			var color=attrs.color;
			var image=attrs.image;
			var type=attrs.type;
			var title=attrs.title;

			$(elm).addClass('span-'+type);
			$(elm).find("span").eq(0).css({
				'background-color':color,
				'background-image':'url('+image+')',
				'background-repeat':'no-repeat',
				'background-position':'50% 50%'
			});
			$(elm).find("span").eq(1).html(title);
			$(elm).find("span").append("<div id='clock'></div>");			
			$(elm).find("#clock").clock();
			$(elm).click(function(){
				window.location='#/'+link;
			})
		}
	}
});

/*	****************

	News Ticker

	**************** */

app.directive('theNews', ['$interval','$http',function($interval,$http){
	return {
		restrict: 'E',
		templateUrl:'partials/newsMarquee.html'
,		link: function(scope, elm, attrs) {	
				$http({
				  method: "GET",
				  url: "http://api.sdar.com/touchNews.php"
				})
				  .success(function( msg ) {
				    scope.news =  msg ;

				  });	
			$interval(function(){
				$http({
				  method: "GET",
				  url: "http://api.sdar.com/touchNews.php"
				})
				  .success(function( msg ) {
				    scope.news =  msg ;

				  });
			},60000);
		}	
	}
}]);

/*	****************

	Photo Gallery

	**************** */

app.directive('photoGallery', ['$interval','$http',function($interval,$http){
	return {
		restrict: 'E',
		templateUrl:'partials/square.html'
,		link: function(scope, elm, attrs) {		
			var color=attrs.color;
			var type=attrs.type;
			var title=attrs.title;
			var link=attrs.link;

			$(elm).addClass('span-'+type);
			$(elm).find("span").eq(0).css({
				'background-color':color,
				'background-repeat':'no-repeat',
				'background-position':'50% 50%',
				'background-size':'cover'
			});

			$(elm).find("span").eq(1).html(title);
			$(elm).click(function(){
				window.location='#/'+link;
			});

			$http({
				method: "POST",
				url: "http://api.sdar.com/touchGallery.php",
	  			data : {
	  				random : 'true'
	  			}
			})
			  .success(function( gallery ) {	
			
				$(elm).find("span").eq(0).css({
					'background-image':'url('+gallery[0].root_url+')'
				});
	
				$interval(function(){
					$http({
					  	method : "POST",
			  			url : "http://api.sdar.com/touchGallery.php",
			  			data : {
			  				random : 'true'
			  			}
					})
					  .success(function( gallery ) {				    
						$(elm).find("span").eq(0).css({
							'background-image':'url('+gallery[0].root_url+')'
						});
					  });
				},2500);
			});
		}
	}
}]);

/*	****************

	One Photo Directive

	**************** */

app.directive('myPhoto', function(){
	return {
		restrict: 'E',
		templateUrl:'partials/square.html'
,		link: function(scope, elm, attrs) {
			var color=attrs.color;
			var image=attrs.image;
			var type=attrs.type;
			var title=attrs.title;
			var link=attrs.link;
			var id=attrs.index;

			$(elm).addClass('span-'+type);
			$(elm).find("span").eq(0).css({
				'background-color':color,
				'background-image':'url('+image+')',
				'background-repeat':'no-repeat',
				'background-position':'50% 50%',
				'background-size':'cover'
			});
			$(elm).find("span").eq(1).html(title);
		}
	}
});

/*	****************

	Event Brite

	**************** */

app.directive('eventBrite', ['$interval','$http',function($interval,$http){
	return {
		restrict: 'E',
		templateUrl:'partials/square.html'
,		link: function(scope, elm, attrs) {		
			var color=attrs.color;
			var type=attrs.type;
			var title=attrs.title;
			var link=attrs.link;

			$(elm).addClass('span-'+type);
			$(elm).find("span").eq(0).css({
				'background-color':color,
				'background-repeat':'no-repeat',
				'background-position':'50% 50%'
			});
			$(elm).find("span").eq(1).html(title);
			$(elm).click(function(){
				window.location='#/'+link;
			});
		}
	}
}]);