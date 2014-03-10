/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'freedomDashboard.profile', [
  'restangular',
  'ui.state',
  'plusOne'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'profile', {
    url: '/profile',
    views: {
      "main": {
        controller: 'ProfileCtrl',
        templateUrl: 'profile/profile.tpl.html'
      }
    },
    data:{ pageTitle: 'Profile' }
  });

})

/**
 * And of course we define a controller for our route.
 */
.controller( 'ProfileCtrl', function HomeController( $scope, Restangular, $http) { 
      var User = Restangular.all('user');
      $scope.allUsers = User.getList();
      console.log($scope.allUsers);

      $scope.badges = [
        {id:1, text:'Welcome Badge', sprite:[0,0]},
        {id:2, text:'Veteran Badge', sprite:[29,0]},
        {id:3, text:'Mr. Uploader Badge', sprite:[58,0]},
        {id:3, text:'Mr. Views Badge', sprite:[87,0]},
        {id:3, text:'Voice Badge', sprite:[116,0]},
        {id:3, text:'Epic Badge', sprite:[145,0]},
        {id:3, text:'Thunder Badge', sprite:[0,30.5]},
        {id:3, text:'Mr. Earner Badge', sprite:[29,30.5]},
        {id:3, text:'Let it go Badge', sprite:[58,30.5]},
        {id:3, text:'Troll Badge', sprite:[87,30.5]}
      ];
})

;

