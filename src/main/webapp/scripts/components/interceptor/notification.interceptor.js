 'use strict';

angular.module('simpleCApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-simpleCApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-simpleCApp-params')});
                }
                return response;
            }
        };
    });
