// content.js

// Function to hide the News Feed
function hideNewsFeed() {
    const feed = document.querySelector('div[role="feed"]'); // Facebook's feed section
    if (feed) {
        feed.style.display = 'none';
    }
}

// Function to hide the News Feed
function hideMain() {
    const main = document.querySelector('div[role="main"]'); // Facebook's main section
    if (main) {
        main.style.display = 'none';
    }
}

// Function to hide the Contacts section (Right Sidebar)
function hideContacts() {
    const rightColumn = document.querySelector('[role="complementary"]'); // Facebook's right sidebar
    if (rightColumn) {
        rightColumn.style.visibility = 'hidden';
    }
}

// Function to hide all videos on the page
function hideVideos() {
    // Select all <video> elements on the page
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.style.visibility = 'hidden'; // Hide each video
    });
}

// Execute the functions when the page loads
window.addEventListener('load', () => {
    hideNewsFeed();
    hideContacts();
    hideVideos();
    hideMain();
});

// Also, keep watching for new content dynamically added (for infinite scroll)
const observer = new MutationObserver(() => {
    hideNewsFeed();
    hideContacts();
    hideVideos();
    hideMain();
});

