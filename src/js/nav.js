function hasQueryString() {
    return location.href.indexOf('?') !== -1;
}

function showInvite() {
    document.getElementById("room").style.display = 'none';
    document.getElementById("invite").style.display = 'block';

    var createRoomButton = document.getElementById('create-room-btn');
    createRoomButton.addEventListener('click', function () {
        var createRoomInput = document.getElementById('create-room-input');

        if (createRoomInput.checkValidity()) {
            var roomName = createRoomInput.value;
            window.location = setRoomURL(roomName);
        }
    })
}

// Start application
function start() {
    if (hasQueryString()) {
        enableVideo();
    } else {
        showInvite();
    }
}