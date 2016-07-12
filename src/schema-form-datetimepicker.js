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

        // UGLY: install hasError() function in $parent scope
        $scope.$parent.hasError = function () {
            return $scope.hasDateError() || $scope.hasTimeError();
        };
        // UGLY: the same with hasSuccess()
        $scope.$parent.hasSuccess = function () {
            return $scope.hasDateSuccess() && $scope.hasTimeSuccess();
        };
    }
])

.directive('asfDateTimePicker', [
    function () {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'directives/decorators/bootstrap/strap/datetimepickerdir.html',
            replace: true,
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
])

.directive('asfDtpStatus', [
    function () {
        return {
            restrict: 'A',
            scope: false,
            require: "ngModel",
            link: function (scope, element, attrs, ngModel) {
                var name = attrs.asfDtpStatus;
                // UGLY: install functions in parent scope
                scope.$parent['has' + name + 'Error'] = function () {
                    if (!ngModel) {
                        return false;
                    }
                    return ngModel.$invalid;
                };
                scope.$parent['has' + name + 'Success'] = function () {
                    if (!ngModel) {
                        return false;
                    }
                    return ngModel.$valid &&
                        (!ngModel.$pristine || !ngModel.$isEmpty(ngModel.$modelValue));
                };
            }
        };
    }
]);

