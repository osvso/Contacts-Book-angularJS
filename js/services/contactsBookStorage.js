/*
You are free to use this script as long as the copyright message is kept intact
    
Pawel Lewandowski
    
*/

'use strict';

/**
 * Contacts localStorage support service.
 */
contactsBook.factory('contactsBookStorage', function() {
    return {
        get: function() {
            return localStorage.getItem(STORAGE_ID) ?
                JSON.parse(localStorage.getItem(STORAGE_ID)) :
                dummyContacts;
        },

        put: function(contacts) {
            localStorage.setItem(STORAGE_ID, JSON.stringify(contacts));
        }
    };
});