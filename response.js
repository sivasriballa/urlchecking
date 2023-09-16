document.getElementById("urlForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const url = document.getElementById("urlInput").value;
    fetch("/api/check-url", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ url })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerHTML = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error(error);
    });
});
