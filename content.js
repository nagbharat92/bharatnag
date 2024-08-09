// content.js

// Add the favicon to the head section
const faviconLink = document.createElement('link');
faviconLink.rel = 'icon';
faviconLink.href = 'favicon.ico';  // Make sure this path is correct
faviconLink.type = 'image/x-icon';
document.head.appendChild(faviconLink);

// Determine which page is currently loaded by checking the pathname
const currentPage = window.location.pathname;

// Text content for the home page
if (currentPage.endsWith("index.html") || currentPage === "/" || currentPage === "/bharatnag/") {
    const textContent = "All my research for my articles comes from AI chatbots. These bots can either be right or wrong. Thus, these articles can either inform us or highlight areas that need further questioning. It's a win-win either way.";
    document.getElementById("text").textContent = textContent;
}
// Text content for the projects page
if (currentPage.includes("projects.html")) {
    const textContent = "Welcome to the Projects Page. Here you can find all the projects I've been working on.";
    document.getElementById("text").textContent = textContent;
}

// Text content for the blog page
if (currentPage.includes("blog.html")) {
    const textContent = "Welcome to the Blog. Here you will find all my latest articles and posts.";
    document.getElementById("text").textContent = textContent;
}

// Text content for the about page
if (currentPage.includes("about.html")) {
    const textContent = "About Me: Learn more about who I am and what I do.";
    document.getElementById("text").textContent = textContent;
}
