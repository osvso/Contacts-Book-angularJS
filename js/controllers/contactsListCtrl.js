'use strict';

/**
 * Main contacts list controller.
 */
contactsBook.controller("contactsListCtrl", ['$scope', '$modal', '$timeout', '$log', 'contactsBookStorage', function($scope, $modal, $timeout, $log, contactsBookStorage) {
    var contactsList = $scope.contactsList =  contactsBookStorage.get();

    $scope.$watch('contactsList', function (newValue, oldValue) {
        if (newValue !== oldValue) {
            contactsBookStorage.put(contactsList);
        }
    }, true);

    // Hovering contact for more than 500ms will trigger its selection.
    $scope.contactMouseOverHandler = function(contact) {
        $scope.selectionTimeout = $timeout(function() {
            $scope.selectContact(contact);
        }, 500)
    }

    $scope.contactMouseLeaveHandler = function(contact) {
        $timeout.cancel($scope.selectionTimeout);
    }

    $scope.isSelected = function(contact) {
        return contact === $scope.selectedContact;
    }

    // Selected contact can be removed.
    $scope.removeContact = function(contact) {
        var contactIndx = contactsList.indexOf(contact);
        $log.info('Removing contact ' + contact.firstName + ' ' + contact.lastName);
        contactsList.splice(contactIndx, 1);
    }

    $scope.selectContact = function(contact) {
        if($scope.selectedContact !== contact) {
            $scope.selectedContact = contact;
            return;
        } else {
            $scope.selectedContact = undefined;
        }
    }

    // ContactDetails popup support.
    $scope.openDetails = function(contact) {
        var contactDetailsPopup = $modal.open({
            templateUrl: 'contactDetails.html',
            controller: contactDetailsCtrl,
            resolve: {
                contact: function () {
                    return contact;
                }
            }
        });

        contactDetailsPopup.result.then(function(contact) {
            var contactExists = contactsList.indexOf(contact) !== -1;
            if(contactExists) {
                $log.info('Updated contact ' + contact.firstName + ' ' + contact.lastName);
            } else {
                $scope.contactsList.push(contact);
                $log.info('Added contact ' + contact.firstName + ' ' + contact.lastName);
            }
        }, function() {
            $log.info('ContactDetails popup closed.');
        });
    }
}]);