'use strict';

angular.module('simpleCApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


