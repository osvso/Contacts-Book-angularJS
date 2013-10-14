'use strict';

/**
 * Contact details popup controller.
 */

var contactDetailsCtrl = function($scope, $modalInstance, contact) {

    // Filling contactDetails form.
    if(contact) {
        $scope.firstName = contact.firstName;
        $scope.lastName = contact.lastName;
        $scope.telephone = contact.telephone;
        $scope.emails = contact.emails ? contact.emails.join(',') : '';
        $scope.twitterName = contact.twitterName;
        $scope.description = contact.description;
    }

    $scope.ok = function() {
        var editedContact = contact ? contact : angular.copy(contactDef);
        editedContact.firstName = this.firstName;
        editedContact.lastName = this.lastName;
        editedContact.telephone = this.telephone;
        editedContact.emails = this.emails ? this.emails.split(',') : '';
        editedContact.twitterName = this.twitterName;
        editedContact.description = this.description;
        $modalInstance.close(editedContact);
    };

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };

    $scope.validate = function() {
        // TODO contact details form validation
    }
};