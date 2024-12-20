# Facebook Feed & Contacts Hider Chrome Extension

This Chrome extension automatically hides the **Facebook News Feed**, **Videos**, and the **Contacts section** (right sidebar) on Facebook. It runs in the background and hides these elements every time you visit Facebook, providing a cleaner, distraction-free experience.

## Features

- **Hide Facebook News Feed**: Automatically hides the posts from your News Feed.
- **Hide Facebook Videos**: Hides all video content on Facebook, preventing them from appearing in your feed.
- **Hide Facebook Contacts Section (Right Sidebar)**: Hides the sidebar that includes friend suggestions and other contacts.

## How to Use

1. **Install the Extension**:
   - Download or clone this repository to your computer.
   - Open **Chrome** and go to `chrome://extensions/`.
   - Enable **Developer Mode** (toggle in the top right).
   - Click **Load unpacked** and select the folder where the extension files are located.

2. **Enjoy a Clean Facebook Experience**:
   - Once the extension is installed, visit [Facebook](https://www.facebook.com) and the extension will automatically hide the News Feed, Videos, and Contacts section (right sidebar).
   - No further interaction is required, and the extension works as soon as you visit Facebook.

## How It Works

The extension uses a **content script** (`content.js`) that targets specific elements on Facebook’s page to hide them:

- **News Feed**: The script hides the div containing the feed using the selector `div[role="feed"]`.
- **Videos**: All `<video>` tags on the page are hidden using `querySelectorAll('video')`.
- **Contacts Section**: The right sidebar is hidden using the selector `[role="complimentary"]`.

Additionally, a **MutationObserver** is used to dynamically hide these elements if new content is loaded (e.g., during infinite scrolling).

## Permissions

- The extension requests permission to access any tab that contains Facebook URLs (`https://www.facebook.com/*`).
- It does not collect any personal data or send any information to external servers.

## Limitations

- The extension is specifically designed to work with Facebook and may not work on other websites.
- Facebook might change the structure of its page over time, which could require updates to the selectors used in the extension.

## Troubleshooting

If the extension isn't hiding the elements properly, try the following:

1. Ensure that you are on `www.facebook.com` when the extension is active.
2. Reload the page after enabling the extension.
3. Make sure you have the latest version of the extension.


