async function searchAPI() {
    const inputs = document.getElementById('inputs');
    const apiUrl = "https://developer.mozilla.org/en-US/docs/Web/API"; 

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.text(); 

      

    } catch (error) {
        console.error("Data not fetched due to an error:", error.message);
    }
}


















