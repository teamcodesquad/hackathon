angular.module('admin-panel', [])

.directive('panel',function(){
    return {
        restrict:'E',
        controller: function ($scope) {
            $scope.value = 'Welcome';
        },
        templateUrl: application_js + '/templates/panel.html'
    }
});