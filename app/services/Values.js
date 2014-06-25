angular.module('customersApp').value('appSettings', {
    title: 'Customers Application',
    version: '1.0'
});

/*
    Note: angular.module('customersApp').value is not available to be injected in app.js app.config.
    Only  angular.module('customersApp').constant is injectable in app.js app.config.
    If you want your appSettings to be accessible in app.config, you will need to convert .value to .contant.
*/
