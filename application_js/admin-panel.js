angular.module('admin-panel', [])

.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Notice the difference between * and **.
      'http://cdn.rawgit.com/teamcodesquad/hackathon/**'
    ]);

    // The blacklist overrides the whitelist so the open redirect here is blocked.
    $sceDelegateProvider.resourceUrlBlacklist([
      
    ]);
})
.directive('panel',function(){
    return {
        restrict:'E',
        controller: function ($scope) {
            $scope.value = 'Welcome';
        },
        templateUrl: application_js + '/templates/panel.html'
    }
});