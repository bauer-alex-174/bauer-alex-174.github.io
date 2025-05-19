// Store value in selected storage
function store_it(id, storageArea) {
    var textBox = document.getElementById(id);
    if (!textBox.value)
        delete storageArea.theirValue;
    else
        storageArea.theirValue = textBox.value;
}

// Store value in a cookie
function store_cookie() {
    var textBox = document.getElementById("cookie");
    var value = textBox.value;
    if (!value) {
        // Delete cookie by setting expiry to past
        document.cookie = "theirValue=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    } else {
        // Set cookie, expires in 7 days
        var d = new Date();
        d.setTime(d.getTime() + (7*24*60*60*1000));
        document.cookie = "theirValue=" + encodeURIComponent(value) + "; expires=" + d.toUTCString() + "; path=/";
    }
}

// Retrieve value from storage
function retrieve_storage(id, storageArea) {
    var val = storageArea.theirValue;
    if (val != null)
        document.getElementById(id).value = val;
}

// Retrieve value from cookies
function retrieve_cookie() {
    var name = "theirValue=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            document.getElementById("cookie").value = decodeURIComponent(c.substring(name.length, c.length));
            return;
        }
    }
}

function clear_all_storage() {
    // Clear storage
    if (window.localStorage) localStorage.clear();
    if (window.sessionStorage) sessionStorage.clear();

    // Delete cookie
    document.cookie = "theirValue=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Clear input fields
    document.getElementById("local").value = '';
    document.getElementById("session").value = '';
    document.getElementById("cookie").value = '';
}

function reload_page() {
    window.location.reload();
}

// Initial population on load
if (window.localStorage)
    retrieve_storage("local", localStorage);
else
    document.getElementById("local-warning").innerHTML = "Note: this browser does not support localStorage";

if (window.sessionStorage)
    retrieve_storage("session", sessionStorage);
else
    document.getElementById("session-warning").innerHTML = "Note: this browser does not support sessionStorage";

// Populate cookie field
retrieve_cookie();
