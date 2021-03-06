var initFriendLookup;
initFriendLookup = function() {
  $('#friend-lookup-form').on('ajax:before', function(event, data, status) {
    showSpinner();
  });
  $('#friend-lookup-form').on('ajax:after', function(event, data, status) {
    hideSpinner();
  });
  $('#friend-lookup-form').on('ajax:success', function(event, data, status) {
    $('#friend-lookup').replaceWith(data);
    initFriendLookup();
  });
  $('#friend-lookup-form').on('ajax:error', function(event, xhr, status, error) {
    hideSpinner();
    $('#friend-lookup-results').replaceWith(' ');
    $('#friend-lookup-errors').replaceWith('Person was not found.');
  });
}
$(document).ready(function() {
  initFriendLookup();
});
