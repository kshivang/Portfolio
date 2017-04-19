angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('kumarShivang.aboutMe', {
    url: '/about',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aboutMe.html',
        controller: 'aboutMeCtrl'
      }
    }
  })

  .state('kumarShivang', {
    url: '/side-menu21',
    templateUrl: 'templates/kumarShivang.html',
    controller: 'kumarShivangCtrl'
  })

  .state('kumarShivang.projects', {
    url: '/projects',
    views: {
      'side-menu21': {
        templateUrl: 'templates/projects.html',
        controller: 'projectsCtrl'
      }
    }
  })

  .state('kumarShivang.cV', {
    url: '/cv',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cV.html',
        controller: 'cVCtrl'
      }
    }
  })

  .state('kumarShivang.contact', {
    url: '/contact',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contact.html',
        controller: 'contactCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/about')

  

});