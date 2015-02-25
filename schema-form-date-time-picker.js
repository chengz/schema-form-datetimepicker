angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/strap/datepicker.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false }\">\r\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\r\n  <div class=\"row\">\r\n    <div class=\"form-control-date\">\r\n      <div class=\"input-group\">\r\n        <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\r\n        <input type=\"text\" class=\"form-control\" \r\n          ng-show=\"form.key\"\r\n          ng-model=\"$$value$$\"\r\n          schema-validate=\"form\"\r\n          data-date-type=\"{{form.dateOptions.dateType || \'string\'}}\"\r\n          data-date-format=\"{{form.dateOptions.dateFormat || \'dd/MM/yyyy\'}}\"\r\n          data-autoclose=\"{{form.dateOptions.autoclose}}\"\r\n          data-min-date=\"{{form.dateOptions.minDate}}\"\r\n          data-max-date=\"{{form.dateOptions.maxDate}}\"\r\n          data-use-navitve=\"{{form.dateOptions.useNative || false}}\"\r\n          bs-datepicker />\r\n      </div>\r\n      <span ng-if=\"form.feedback !== false\"\r\n        class=\"form-control-feedback\"\r\n        ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\"></span>\r\n    </div>\r\n  </div>\r\n  <div class=\"help-block\"\r\n    ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\"\r\n    ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div>\r\n</div>\r\n");
$templateCache.put("directives/decorators/bootstrap/strap/datetimepicker.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false }\">\r\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\r\n  <div class=\"row\">\r\n    <div class=\"form-control-date\">\r\n      <div class=\"input-group\">\r\n        <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\r\n        <input type=\"text\" class=\"form-control\" \r\n          ng-show=\"form.key\"\r\n          ng-model=\"$$value$$\"\r\n          data-date-type=\"object\"\r\n          data-date-format=\"{{form.options.dateFormat || \'dd/MM/yyyy\'}}\"\r\n          data-autoclose=\"{{form.options.autoclose || \'1\'}}\"\r\n          data-min-date=\"{{form.options.minDate}}\"\r\n          data-max-date=\"{{form.options.maxDate}}\"\r\n          data-use-navitve=\"{{form.options.useNative || false}}\"\r\n          bs-datepicker />\r\n      </div>\r\n    </div>\r\n    <div class=\"form-control-time\">\r\n      <div class=\"input-group\">\r\n        <span class=\"input-group-addon\"><i class=\"fa fa-clock-o\"></i></span>\r\n        <input type=\"text\" class=\"form-control\" size=\"8\"\r\n          ng-show=\"form.key\"\r\n          ng-model=\"$$value$$\"\r\n          data-time-type=\"object\"\r\n          data-time-format=\"{{form.options.timeFormat || \'shortTime\'}}\"\r\n          data-minute-step=\"{{form.options.minuteStep || \'15\'}}\"\r\n          data-use-native=\"{{form.options.useNative || false}}\"\r\n          bs-timepicker />\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <input type=\"hidden\" sf-changed=\"form\" ng-model=\"$$value$$\" schema-validate=\"form\" />\r\n  <div class=\"help-block\"\r\n    ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\"\r\n    ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div>\r\n</div>\r\n");
$templateCache.put("directives/decorators/bootstrap/strap/timepicker.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false }\">\r\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\r\n  <div class=\"row\">\r\n    <div class=\"form-control-time\">\r\n      <div class=\"input-group\">\r\n        <!--<span class=\"input-group-addon\"><i class=\"fa fa-clock-o\"></i></span>-->\r\n        <input type=\"text\" class=\"form-control\" size=\"8\"\r\n               ng-show=\"form.key\"\r\n               ng-model=\"$$value$$\"\r\n               schema-validate=\"form\"\r\n               data-use-native=\"{{form.timeOptions.useNative || false}}\"\r\n               data-min-time=\"10:00\"\r\n               data-max-time=\"16:30\"\r\n               data-time-format=\"HH:mm\"\r\n               data-time-type=\"string\"\r\n               data-round-display=\"true\",\r\n               bs-timepicker />\r\n      </div>\r\n      <span ng-if=\"form.feedback !== false\"\r\n        class=\"form-control-feedback\"\r\n        ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\"></span>\r\n    </div>\r\n  </div>\r\n  <div class=\"help-block\"\r\n    ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\"\r\n    ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div>\r\n</div>\r\n");}]);
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

angular.module('schemaForm-datetimepicker', ['schemaForm', 'mgcrea.ngStrap']).config(
['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
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
  }]);

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
