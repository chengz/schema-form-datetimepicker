angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/strap/datepicker.html","<div class=\"form-group schema-form-datepicker {{form.htmlClass}}\"\n     ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false}\">\n\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\">{{form.title}}</label>\n  <div class=\"row\">\n    <div class=\"form-control-date\">\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n        <input type=\"text\" class=\"form-control {{form.fieldHtmlClass}}\"\n          name=\"{{form.key.slice(-1)[0]}}\"\n          ng-show=\"form.key\"\n          ng-model=\"$$value$$\"\n          ng-model-options=\"form.ngModelOptions\"\n          ng-disabled=\"form.readonly\"\n          schema-validate=\"form\"\n          sf-changed=\"form\"\n          data-date-type=\"{{form.dateOptions.dateType || \'string\'}}\"\n          data-date-format=\"{{form.dateOptions.dateFormat || \'dd/MM/yyyy\'}}\"\n          data-start-week=\"{{form.dateOptions.startWeek || 1}}\"\n          data-autoclose=\"{{form.dateOptions.autoclose}}\"\n          data-min-date=\"{{form.dateOptions.minDate}}\"\n          data-max-date=\"{{form.dateOptions.maxDate}}\"\n          data-use-native=\"{{form.dateOptions.useNative || false}}\"\n          bs-datepicker />\n      </div>\n      <span ng-if=\"form.feedback !== false\"\n        class=\"form-control-feedback\"\n        ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\"\n        aria-hidden=\"true\"></span>\n\n      <span ng-if=\"hasError() || hasSuccess()\"\n        class=\"sr-only\">{{ hasSuccess() ? \'(success)\' : \'(error)\' }}</span>\n    </div>\n  </div>\n  <div class=\"help-block\"\n    ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\"\n    ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/strap/datetimepicker.html","<div class=\"form-group schema-form-datetimepicker {{form.htmlClass}}\"\n     ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false}\">\n\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\">{{form.title}}</label>\n  <asf-date-time-picker ng-model=\"$$value$$\" sf-changed=\"form\" />\n  <span ng-if=\"form.feedback !== false\"\n    class=\"form-control-feedback\"\n    ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\"\n    aria-hidden=\"true\"></span>\n  <span ng-if=\"hasError() || hasSuccess()\"\n    class=\"sr-only\">{{ hasSuccess() ? \'(success)\' : \'(error)\' }}</span>\n  <div class=\"help-block\"\n    ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\"\n    ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/strap/datetimepickerdir.html","<div class=\"row\">\n  <div class=\"form-control-date\">\n    <div class=\"input-group\">\n      <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n      <input type=\"text\" class=\"form-control {{form.fieldHtmlClass}}\"\n        name=\"{{form.key.slice(-1)[0]}}\"\n        ng-show=\"form.key\"\n        ng-model=\"moment\"\n        ng-model-options=\"form.ngModelOptions\"\n        ng-disabled=\"form.readonly\"\n        ng-change=\"ctrl.dateChanged()\"\n        data-date-type=\"{{form.options.dateType || \'object\'}}\"\n        data-date-format=\"{{form.options.dateFormat || \'dd/MM/yyyy\'}}\"\n        data-start-week=\"{{form.options.startWeek || 1}}\"\n        data-autoclose=\"{{form.options.autoclose || \'1\'}}\"\n        data-min-date=\"{{form.options.minDate}}\"\n        data-max-date=\"{{form.options.maxDate}}\"\n        data-use-native=\"{{form.options.useNative || false}}\"\n        bs-datepicker\n        asf-dtp-status=\"Date\">\n    </div>\n  </div>\n  <div class=\"form-control-time\">\n    <div class=\"input-group\">\n      <span class=\"input-group-addon\"><i class=\"fa fa-clock-o\"></i></span>\n      <input type=\"text\" class=\"form-control {{form.fieldHtmlClass}}\" size=\"8\"\n        name=\"{{form.key.slice(-1)[0]}}\"\n        ng-show=\"form.key\"\n        ng-model=\"moment\"\n        ng-model-options=\"form.ngModelOptions\"\n        ng-disabled=\"form.readonly\"\n        ng-change=\"ctrl.timeChanged()\"\n        data-time-type=\"{{form.options.timeType || \'object\'}}\"\n        data-time-format=\"{{form.options.timeFormat || \'shortTime\'}}\"\n        data-min-time=\"{{form.options.minTime}}\"\n        data-max-time=\"{{form.options.maxTime}}\"\n        data-minute-step=\"{{form.options.minuteStep || \'15\'}}\"\n        data-round-display=\"{{form.options.roundDisplay || true}}\"\n        data-use-native=\"{{form.options.useNative || false}}\"\n        bs-timepicker\n        asf-dtp-status=\"Time\">\n    </div>\n  </div>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/strap/timepicker.html","<div class=\"form-group schema-form-timepicker {{form.htmlClass}}\"\n     ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false}\">\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\">{{form.title}}</label>\n    <div class=\"form-control-time\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-clock-o\"></i></span>\n        <input type=\"text\" class=\"form-control {{form.fieldHtmlClass}}\" size=\"8\"\n               name=\"{{form.key.slice(-1)[0]}}\"\n               ng-show=\"form.key\"\n               ng-model=\"$$value$$\"\n               ng-model-options=\"form.ngModelOptions\"\n               ng-disabled=\"form.readonly\"\n               schema-validate=\"form\"\n               sf-changed=\"form\"\n               data-use-native=\"{{form.timeOptions.useNative || false}}\"\n               data-min-time=\"{{form.timeOptions.minTime}}\"\n               data-max-time=\"{{form.timeOptions.maxTime}}\"\n               data-time-format=\"{{form.timeOptions.timeFormat || \'HH:mm\'}}\"\n               data-time-type=\"{{form.timeOptions.timeType || \'string\'}}\"\n               data-minute-step=\"{{form.timeOptions.minuteStep || 15}}\"\n               data-round-display=\"{{form.timeOptions.roundDisplay || true}}\"\n               bs-timepicker />\n      <span ng-if=\"form.feedback !== false\"\n        class=\"form-control-feedback\"\n        ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\"></span>\n  <span ng-if=\"form.feedback !== false\"\n    class=\"form-control-feedback\"\n    ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\"\n    aria-hidden=\"true\"></span>\n  <span ng-if=\"hasError() || hasSuccess()\"\n    class=\"sr-only\">{{ hasSuccess() ? \'(success)\' : \'(error)\' }}</span>\n    </div>\n  <div class=\"help-block\"\n    ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\"\n    ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div>\n</div>\n\n\n");}]);
angular.module('schemaForm-datepicker', ['schemaForm', 'mgcrea.ngStrap']).config(
['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

    var picker = function(name, schema, options) {
    if ((schema.type === 'string' || schema.type === 'number') && schema.format == 'datepicker') {
      var f = schemaFormProvider.stdFormObj(name, schema, options);
      f.key  = options.path;
      f.type = 'datepicker';
      options.lookup[sfPathProvider.stringify(options.path)] = f;
      return f;
    }
  };

    schemaFormProvider.defaults.string.unshift(picker);

  //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'datepicker',
    'directives/decorators/bootstrap/strap/datepicker.html');
    schemaFormDecoratorsProvider.createDirective('datepicker',
    'directives/decorators/bootstrap/strap/datepicker.html');
  }]);

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


angular.module('schemaForm-timepicker', ['schemaForm', 'mgcrea.ngStrap']).config(
['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

    var picker = function(name, schema, options) {
    if ((schema.type === 'string' || schema.type === 'number') && schema.format == 'timepicker') {
      var f = schemaFormProvider.stdFormObj(name, schema, options);
      f.key  = options.path;
      f.type = 'timepicker';
      options.lookup[sfPathProvider.stringify(options.path)] = f;
      return f;
    }
  };

    schemaFormProvider.defaults.string.unshift(picker);

  //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'timepicker',
    'directives/decorators/bootstrap/strap/timepicker.html');
    schemaFormDecoratorsProvider.createDirective('timepicker',
    'directives/decorators/bootstrap/strap/timepicker.html');
  }]);
