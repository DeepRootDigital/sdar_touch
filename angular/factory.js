'use strict';

var app = angular.module('app'); 

/*********************/
/*                   */
/*  GALLERY FACTORY  */
/*                   */
/*********************/
app.factory("Gallery", ["$http", function($http) {
  return function() {  
  var theInterface = {
    getGallery :function(callback){
      $http({
          method : "POST",
          url : "http://api.sdar.com/touchGalleryActions.php",
          data : {
            action : "list"
          }
      })
        .success(function( res ) { 
          callback(res);
        });
    },
    getRandomImage : function(callback) {
      $http({
          method : "POST",
          url : "http://api.sdar.com/touchGalleryActions.php",
          data : {
            action : "list",
            random : "true" 
          }
      })
        .success(function( gallery ) {     
          callback(gallery[Math.floor(Math.random()*gallery.length)]);
        });
    },
    removeFromGallery : function(filename,callback){
      $http({
          method : "POST",
          url : "http://api.sdar.com/touchGalleryActions.php",
          data : {
            action : "remove",
            filename : filename
          }
      })
        .success(function( res ) {      
          callback(res);
        });
    }
  }
  return theInterface;
  }
}]);


/******************/
/*                */
/*  NEWS FACTORY  */
/*                */
/******************/
app.factory("News", ["$http", function($http) {
  return function() {  
  var theInterface = {
    getNews :function(callback){
      $http({
          method : "POST",
          url : "http://api.sdar.com/touchNews.php",
          data : {
            action : "list"
          }
      })
        .success(function( res ) {  
          callback(res);
        });
    },
    pushNew : function(content,callback){
      $http({
          method : "POST",
          url : "http://api.sdar.com/touchNews.php",
          data : {
            action : 'push',
            content : content
          }
      })
        .success(function( res ) {      
          callback(res);
        });
    },
    toggleActivation : function(index,callback){
      $http({
          method : "POST",
          url : "http://api.sdar.com/touchNews.php",
          data : {
            action : "toggle",
            index : index
          }
      })
        .success(function( res ) {      
          callback(res);
        });
    },
    removeFromNews : function(index,callback){
      $http({
          method : "POST",
          url : "http://api.sdar.com/touchNews.php",
          data : {
            action : "remove",
            index : index
          }
      })
        .success(function( res ) {      
          callback(res);
        });
    }
  }
  return theInterface;
  }
}]);


/***********************/
/*                     */
/*  DOCUMENTS FACTORY  */
/*                     */
/***********************/
app.factory("Documents", ["$http", function($http) {
  return function() {  
  var theInterface = {
    getDocuments :function(callback){
      $http({
          method : "POST",
          url : "http://api.sdar.com/touchDocumentsActions.php",
          data : {
            action : "list"
          }
      })
        .success(function( res ) {  
          callback(res);
        });
    },
    removeFromDocuments : function(filename,callback){
      $http({
          method : "POST",
          url : "http://api.sdar.com/touchDocumentsActions.php",
          data : {
            action : "remove",
            filename : filename
          }
      })
        .success(function( res ) {      
          callback(res);
        });
    }
  }
  return theInterface;
  }
}]);


/********************/
/*                  */
/*  VIDEOS FACTORY  */
/*                  */
/********************/
app.factory("Videos", ["$http", function($http) {
  return function() {  
  var theInterface = {
    getVideos :function(callback){
      $http({
          method : "POST",
          url : "http://api.sdar.com/touchVideosActions.php",
          data : {
            action : "list"
          }
      })
        .success(function( res ) {  
          if (res!= "error")
            callback(res);
          else
            console.log(res);
        });
    },
    pushVideos : function(title,pdf,callback){
      $http({
          method : "POST",
          url : "http://api.sdar.com/touchVideosActions.php",
          data : {
            action : 'push',
            base64 : pdf,
            title : title
          }
      })
        .success(function( res ) {     
            callback(res);
        });
    },
    removeFromVideos : function(filename,callback){
      $http({
          method : "POST",
          url : "http://api.sdar.com/touchVideosActions.php",
          data : {
            action : "remove",
            filename : filename
          }
      })
        .success(function( res ) {      
          callback(res);
        });
    }
  }
  return theInterface;
  }
}]);

/********************/
/*                  */
/*  RNews FACTORY  */
/*                  */
/********************/
app.factory("RealtorNews", ["$http", function($http) {
  return function() {  
  var theInterface = {
    getRNews: function(callback){
      $http({
          method : "POST",
          url : "http://api.sdar.com/touchRNewsActions.php",
          data : {
            action : "list"
          }
      })
        .success(function( res ) {  
          if (res!= "error")
            callback(res);
          else
            console.log(res);
        });
    },
    pushRNews: function(title,pdf,callback){
      $http({
          method : "POST",
          url : "http://api.sdar.com/touchRNewsActions.php",
          data : {
            action : 'push',
            base64 : pdf,
            title : title
          }
      })
        .success(function( res ) {     
            callback(res);
        });
    },
    removeFromRNews: function(filename,callback){
      $http({
          method : "POST",
          url : "http://api.sdar.com/touchRNewsActions.php",
          data : {
            action : "remove",
            filename : filename
          }
      })
        .success(function( res ) {      
          callback(res);
        });
    }
  }
  return theInterface;
  }
}]);
