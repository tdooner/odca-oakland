'use strict';


var angular = require('angular');

var static_backend_url = 'https://disclosure-backend-static.tdooner.com';

angular.module('odca')
  .factory('static_api', function ($resource) {
    return {
      current_ballot: $resource(static_backend_url + '/locality/:locality_id/current_ballot'),
      candidate: $resource(static_backend_url + '/candidate/:candidate_id', {}, {
        supporting: {method: 'get', url: static_backend_url + '/candidate/:candidate_id/supporting'},
        opposing: {method: 'get', url: static_backend_url + '/candidate/:candidate_id/opposing'}
      })
    };
  });