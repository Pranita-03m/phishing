(async function() {
    const hostname = window.location.hostname.replace('www.', '').toLowerCase();

    const response = await fetch('http://localhost/phishing-extension/check_url.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'url=' + encodeURIComponent(hostname)
    });

    const result = await response.text();

    if (result.includes("PHISHING")) {
        alert("⚠️ Warning: This website is detected as a PHISHING site!");
    }
})();
