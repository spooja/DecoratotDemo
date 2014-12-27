var appDecorator = angular.module('appDecorator', ['appDecorator']);


appDecorator.controller('decoratorController', ['$scope', function ($scope) {


}]);

appDecorator.directive("foo", function () {
    return {

        replace: true,
        template: '<div>This is foo directive</div>'
    };
});


appDecorator.config(function ($provide) {
    $provide.decorator('fooDirective', function ($delegate) {
        var directive = $delegate[0];

        directive.restrict = "AM";
        return $delegate;
    });
});