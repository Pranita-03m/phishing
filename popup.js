document.getElementById('checkBtn').addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    const hostname = new URL(tab.url).hostname.replace('www.', '').toLowerCase();

    const response = await fetch('http://localhost/phishing/check_url.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'url=' + encodeURIComponent(hostname)
    });

    const result = await response.text();

    document.getElementById('result').textContent = result;
});
