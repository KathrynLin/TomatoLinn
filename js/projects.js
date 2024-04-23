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

document.addEventListener('DOMContentLoaded', function () {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            video.pause();
            video.currentTime = 0;
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('particle-container');

    const createParticle = (event) => {
        // Check if motion reduction mode is disabled before creating particles
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReducedMotion) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            container.appendChild(particle);

            particle.style.left = `${event.clientX}px`;
            particle.style.top = `${event.clientY}px`;

            const size = Math.floor(Math.random() * (20 - 5 + 1) + 5);
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            const destinationX = event.clientX + (Math.random() - 0.5) * 2 * 100;
            const destinationY = event.clientY + (Math.random() - 0.5) * 2 * 100;

            const animation = particle.animate([
                { transform: `translate(0, 0)`, opacity: 1 },
                { transform: `translate(${destinationX - event.clientX}px, ${destinationY - event.clientY}px)`, opacity: 0 }
            ], {
                duration: Math.random() * 1000 + 1000,
                easing: 'ease-out'
            });

            animation.onfinish = () => {
                particle.remove();
            };
        }
    };

    document.addEventListener('mousemove', createParticle);
});
