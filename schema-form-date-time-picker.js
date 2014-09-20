angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/strap/datepicker.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError() }\">\n  <label class=\"control-label\" ng-show=\"showTitle()\"><i class=\"fa fa-calendar\"></i>{{form.title}}</label>\n  <div>\n    <input type=\"text\" class=\"form-control\" \n      ng-show=\"form.key\"\n      ng-model=\"$$value$$\"\n      schema-validate=\"form\"\n      data-date-type=\"{{form.dateOptions.timeType || \'string\'}}\"\n      data-date-format=\"{{form.dateOptions.dateFormat || \'dd/MM/yyyy\'}}\"\n      data-autoclose=\"{{form.dateOptions.autoclose}}\"\n      data-min-date=\"{{form.dateOptions.minDate}}\"\n      data-max-date=\"{{form.dateOptions.maxDate}}\"\n      data-use-navitve=\"{{form.dateOptions.useNative || false}}\"\n      bs-datepicker />\n  </div>\n  <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/strap/datetimepicker.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError() }\">\n  <label class=\"control-label\" ng-show=\"showTitle()\"><i class=\"fa fa-calendar\"></i>{{form.title}}</label>\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" \n      ng-show=\"form.key\"\n      ng-model=\"$$value$$\"\n      schema-validate=\"form\"\n      data-date-type=\"number\"\n      data-date-format=\"{{form.options.dateFormat || \'dd/MM/yyyy\'}}\"\n      data-autoclose=\"{{form.options.autoclose}}\"\n      data-min-date=\"{{form.options.minDate}}\"\n      data-max-date=\"{{form.options.maxDate}}\"\n      data-use-navitve=\"{{form.options.useNative || false}}\"\n      bs-datepicker />\n  </div>\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" size=\"8\"\n      ng-show=\"form.key\"\n      ng-model=\"$$value$$\"\n      schema-validate=\"form\"\n      data-time-type=\"number\"\n      data-time-format=\"{{form.options.timeFormat || \'shortTime\'}}\"\n      data-autoclose=\"{{form.options.autoclose || \'1\'}}\"\n      data-minute-step=\"{{form.options.minuteStep || \'15\'}}\"\n      data-use-native=\"{{form.options.useNative || false}}\"\n      bs-timepicker />\n  </div>\n  {{$$value$$}}\n  <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/strap/timepicker.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError() }\">\n  <label class=\"control-label\" ng-show=\"showTitle()\"><i class=\"fa fa-clock-o\"></i>{{form.title}}</label>\n  <div>\n    <input type=\"text\" class=\"form-control\" size=\"8\"\n      ng-show=\"form.key\"\n      ng-model=\"$$value$$\"\n      schema-validate=\"form\"\n      data-time-type=\"{{form.timeOptions.timeType || \'string\'}}\"\n      data-time-format=\"{{form.timeOptions.timeFormat || \'shortTime\'}}\"\n      data-autoclose=\"{{form.timeOptions.autoclose || \'1\'}}\"\n      data-minute-step=\"{{form.timeOptions.minuteStep || \'15\'}}\"\n      data-use-native=\"{{form.timeOptions.useNative || false}}\"\n      bs-timepicker />\n  </div>\n  <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span>\n</div>\n");}]);
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
    if (schema.type === 'number' && schema.format == 'datetimepicker') {
      var f = schemaFormProvider.stdFormObj(name, schema, options);
      f.key  = options.path;
      f.type = 'datetimepicker';
      options.lookup[sfPathProvider.stringify(options.path)] = f;
      return f;
    }
  };

    schemaFormProvider.defaults.string.unshift(picker);

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
