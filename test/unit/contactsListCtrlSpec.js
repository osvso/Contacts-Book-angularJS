/*
You are free to use this script as long as the copyright message is kept intact
    
Pawel Lewandowski
    
*/

/*global describe, it, beforeEach, inject, expect*/
(function () {
    'use strict';
    describe('ContactsList controller', function () {

        var contactsListCtrl, contactDetailsCtrl, scope, modal, timeout, log;
        var storage = {
            storage: {},
            get: function () {
                return this.storage;
            },
            put: function (value) {
                this.storage = value;
            }
        };

        beforeEach(module('contactsBook'));

        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            contactsListCtrl = $controller('contactsListCtrl', { $scope: scope, $modal: modal, $timeout: timeout, $log: log, contactsBookStorage: storage });
            log = {};
            log.info = function() {};
            storage.put(dummyContacts);
        }));

        it('should not have selected contact at startup', function () {
            expect(scope.selectedContact).toBeUndefined();
        });


        it('should remove selected contact', function () {
            expect(scope.contactsList.length).toEqual(2);

            scope.selectContact(scope.contactsList[0]);
            scope.removeContact(scope.selectedContact);

            expect(scope.contactsList.length).toEqual(1);
        });

    });
}());