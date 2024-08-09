// content.js

// Add the favicon to the head section
const faviconLink = document.createElement('link');
faviconLink.rel = 'icon';
faviconLink.href = 'favicon.ico';  // Make sure this path is correct
faviconLink.type = 'image/x-icon';
document.head.appendChild(faviconLink);

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Determine which page is currently loaded by checking the pathname
    const currentPage = window.location.pathname;

    // Get the text element
    const textElement = document.getElementById("text");

    // Check if the text element exists
    if (textElement) {
        // Text content for the home page
        if (currentPage === "/" || currentPage === "index.html") {
            textElement.textContent = "All my research for my articles comes from AI chatbots. These bots can either be right or wrong. Thus, these articles can either inform us or highlight areas that need further questioning. It's a win-win either way.";
        }

        // Text content for the projects page
        if (currentPage.includes("projects.html")) {
            textElement.textContent = "Welcome to the Projects Page. Here you can find all the projects I've been working on.";
        }

        // Text content for the blog page
        if (currentPage.includes("blog.html")) {
            textElement.textContent = "Welcome to the Blog. Here you will find all my latest articles and posts.";
        }

        // Text content for the about page
        if (currentPage.includes("about.html")) {
            textElement.textContent = "About Me: Learn more about who I am and what I do.";
        }
    }
});
