/* jshint expr: true */
chai.should();

describe('Schema form', function() {

  describe('directive', function() {
    beforeEach(module('templates'));
    beforeEach(module('schemaForm'));
    beforeEach(module('schemaForm-datepicker'));
    beforeEach(module('schemaForm-timepicker'));
    beforeEach(module('schemaForm-datetimepicker'));
    beforeEach(
      //We don't need no sanitation. We don't need no though control.
      module(function($sceProvider) {
        $sceProvider.enabled(false);
      })
    );

    it('should return correct form type for format "datepicker"',function(){
      inject(function($compile,$rootScope, schemaForm){
        var string_schema = {
          type: "object",
          properties: {
            file: {
              type: "string",
            }
          }
        };

        var date_schema = {
          type: "object",
          properties: {
            file: {
              type: "string",
              format: "datepicker"
            }
          }
        };

        schemaForm.defaults(string_schema).form[0].type.should.be.eq("text");
        schemaForm.defaults(date_schema).form[0].type.should.be.eq("datepicker");
      });
    });

    it('should return correct form type for format "timepicker"',function(){
      inject(function($compile,$rootScope, schemaForm){
        var string_schema = {
          type: "object",
          properties: {
            file: {
              type: "string",
            }
          }
        };

        var date_schema = {
          type: "object",
          properties: {
            file: {
              type: "string",
              format: "timepicker"
            }
          }
        };

        schemaForm.defaults(string_schema).form[0].type.should.be.eq("text");
        schemaForm.defaults(date_schema).form[0].type.should.be.eq("timepicker");
      });
    });

    it('should return correct form type for format "datetimepicker"',function(){
      inject(function($compile,$rootScope, schemaForm){
        var string_schema = {
          type: "object",
          properties: {
            file: {
              type: "string",
            }
          }
        };

        var date_schema = {
          type: "object",
          properties: {
            file: {
              type: "object",
              format: "datetimepicker"
            }
          }
        };

        schemaForm.defaults(string_schema).form[0].type.should.be.eq("text");
        schemaForm.defaults(date_schema).form[0].type.should.be.eq("datetimepicker");
      });
    });
  });
});
