document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('bg-video');
    var playButton = document.getElementById('play-pause-btn');
    var muteButton = document.getElementById('mute-btn');
    var skipBack = document.getElementById('skip-back-btn');
    var skipForward = document.getElementById('skip-forward-btn');

    // Play and Pause Button
    playButton.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playButton.textContent = 'Pause';
        } else {
            video.pause();
            playButton.textContent = 'Play';
        }
    });

    // Mute and Unmute Button
    muteButton.addEventListener('click', function() {
        if (video.muted) {
            video.muted = false;
            muteButton.textContent = 'Mute';
        } else {
            video.muted = true;
            muteButton.textContent = 'Unmute';
        }
    });

    // Skip Backward Button
    skipBack.addEventListener('click', function() {
        video.currentTime = Math.max(0, video.currentTime - 10);
    });

    // Skip Forward Button
    skipForward.addEventListener('click', function() {
        video.currentTime = Math.min(video.duration, video.currentTime + 10);
    });
});
// Function to open the video modal
function openVideoModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Function to close the video modal
function closeVideoModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
    // Pause the video when modal is closed
    var video = modal.querySelector('video');
    if (video) {
        video.pause();
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
            // Pause the video when modal is closed
            var video = modals[i].querySelector('video');
            if (video) {
                video.pause();
            }
        }
    }
}

