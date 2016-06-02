angular.module('schemaForm-datetimepicker', ['schemaForm', 'mgcrea.ngStrap'])
.config([
  'schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

    var picker = function(name, schema, options) {
    if (schema.type === 'object' && schema.format == 'datetimepicker') {
      var f = schemaFormProvider.stdFormObj(name, schema, options);
      f.key  = options.path;
      f.type = 'datetimepicker';
      options.lookup[sfPathProvider.stringify(options.path)] = f;
      return f;
    }
  };

    schemaFormProvider.defaults.object.unshift(picker);

  //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'datetimepicker',
    'directives/decorators/bootstrap/strap/datetimepicker.html');
    schemaFormDecoratorsProvider.createDirective('datetimepicker',
    'directives/decorators/bootstrap/strap/datetimepicker.html');
  }
])

.controller('asfDateTimeController', [
    '$scope', function ($scope) {
        var me = this;

        me.timeChanged = function () {
            $scope.ngModel.$setViewValue($scope.moment);
        };

        me.dateChanged = function () {
            $scope.ngModel.$setViewValue($scope.moment);
        };

        $scope.moment = undefined;
    }
])

.directive('asfDateTimePicker', [
    function () {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'directives/decorators/bootstrap/strap/datetimepickerdir.html',
            replace: true,
            bindToController: true,
            controllerAs: 'ctrl',
            controller: 'asfDateTimeController',
            require: "ngModel",
            link: function (scope, element, attrs, ngModel) {
                // expose the model on scope
                scope.ngModel = ngModel;

                ngModel.$render = function () {
                    scope.moment = ngModel.$viewValue;
                };
            }
        };
    }
]);

