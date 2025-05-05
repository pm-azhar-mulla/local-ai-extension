// content.js

// Function to scrape the visible text from the body of the webpage
function scrapePageData() {
    // Extract visible text from the page
    const pageText = document.body.innerText || "";
    
    // Send the scraped data to the background script
    chrome.runtime.sendMessage({
        type: 'scrapedData',
        content: pageText
    });
}

// Call the function to scrape data when the script is loaded
scrapePageData();