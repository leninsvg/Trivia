// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('Trivia', ['ionic', 'starter.controllers'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/menu.html',
          controller: 'AppCtrl'
      }).state('app.login', {
          url: '/login',
          views: {
              'menuContent': {
                  templateUrl: 'templates/login.html',
                  controller: 'LoginCtrl'
              }
          }
      }).state('app.home', {
          url: '/home',
          views: {
              'menuContent': {
                  templateUrl: 'templates/home.html',
                  controller: 'HomeCtrl'
              }
          }
      }).state('app.event', {
          url: '/event',
          views: {
              'menuContent': {
                  templateUrl: 'templates/event.html',
                  controller: 'EventCtrl'
              }
          }
      }).state('app.ruleta', {
          url: '/ruleta',
          views: {
              'menuContent': {
                  templateUrl: 'templates/ruleta.html',
                  controller: 'ruletaCtrl'
              }
          }
      }).state('app.query', {
          url: '/query',
          views: {
              'menuContent': {
                  templateUrl: 'templates/query.html',
                  controller: 'QueryCtrl'
              }
          }
      }).state('app.search', {
          url: '/search',
          views: {
              'menuContent': {
                  templateUrl: 'templates/search.html'
              }
          }
      }).state('app.browse', {
          url: '/browse',
          views: {
              'menuContent': {
                  templateUrl: 'templates/browse.html'
              }
          }
      }).state('app.playlists', {
          url: '/playlists',
          views: {
              'menuContent': {
                  templateUrl: 'templates/playlists.html',
                  controller: 'PlaylistsCtrl'
              }
          }
      }).state('app.single', {
        url: '/playlists/:playlistId',
        views: {
            'menuContent': {
                templateUrl: 'templates/playlist.html',
                controller: 'PlaylistCtrl'
            }
        }
    }).state('seleccion', {
      url: '/seleccion',
      abstract: false,
      templateUrl: 'templates/image-popover.html',
      controller: 'ruletaCtrl'
  });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
});
