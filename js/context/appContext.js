/*
You are free to use this script as long as the copyright message is kept intact
    
Pawel Lewandowski
    
*/

'use strict';

// Main application module initialization.
var contactsBook = angular.module('contactsBook', ['ui.bootstrap']);

// Main module configuration
contactsBook.config(function($routeProvider) {
    $routeProvider.
        when('/', {
            controller: 'contactsListCtrl',
            templateUrl: 'contactsList.html'
        }).
        otherwise({
            redirectTo: '/'
        });
});

// contacts localStorage id
var STORAGE_ID = 'contactsBook_storage_test';