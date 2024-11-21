// content.js

// Function to hide the News Feed
function hideNewsFeed() {
    const feed = document.querySelector('div[role="feed"]'); // Facebook's feed section
    if (feed) {
      feed.style.display = 'none';
    }
  }
  
  // Function to hide the Contacts section (Right Sidebar)
  function hideContacts() {
    const rightColumn = document.querySelector('[role="complementary"]'); // Facebook's right sidebar
    if (rightColumn) {
      rightColumn.style.visibility = 'hidden';
    }
  }
  
  // Execute the functions when the page loads
  window.addEventListener('load', () => {
    hideNewsFeed();
    hideContacts();
  });
  
  // Also, keep watching for new content dynamically added (for infinite scroll)
  const observer = new MutationObserver(() => {
    hideNewsFeed();
    hideContacts();
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
  