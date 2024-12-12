const currentPath = window.location.pathname;

// Select all nav-links
document.querySelectorAll('.nav-link').forEach(link => {
    // Check if the link's href matches the current path
    if (link.getAttribute('href').includes(currentPath)) {
        link.classList.add('active');
    }
});
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.hash === "#contactuss") {
        console.log("2131232123")
        document.querySelector("#contactus").scrollIntoView({ behavior: "smooth" });
    }
    else if (window.location.hash === "#referenzenn"){
        document.querySelector("#referenzen").scrollIntoView({ behavior: "smooth" });
    }
});

function scrollToHash() {
    if (window.location.hash === "#contactuss") {
        document.querySelector("#contactus").scrollIntoView({ behavior: "smooth" });
    } else if (window.location.hash === "#referenzenn") {
        document.querySelector("#referenzen").scrollIntoView({ behavior: "smooth" });
    }
}

// Run the function on page load
document.addEventListener("DOMContentLoaded", scrollToHash);

// Run the function whenever the hash changes
window.addEventListener("hashchange", scrollToHash);


// const video = document.getElementById('scenicVideo');

//     // Add a click event listener to toggle play/pause
//     video.addEventListener('click', () => {
//         if (video.paused) {
//             video.play();
//         } else {
//             video.pause();
//         }
//     });


const video = document.getElementById('scenicVideo');

    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();  // Play the video when it enters the viewport
            } else {
                video.pause();  // Pause the video when it leaves the viewport
            }
        });
    }, {
        threshold: 0.5 // Adjust this value to control how much of the video should be visible to start playing
    });

    // Observe the video element
    observer.observe(video);
