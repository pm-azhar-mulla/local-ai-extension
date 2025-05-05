chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'data') {
        // You can call your AI service API here
        console.log('Scraped data:', request.content);
        const processedData = processDataWithAI(request.content);
        // Optionally respond back to popup or do something with processedData
    }
});

function processDataWithAI(data) {
    // Integrate with Chrome AI's Prompt API or any other AI service.
    // This is pseudo-code. Replace this with actual API call code.
    const result = callAIModel(data);
    return result;
}