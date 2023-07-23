function convertFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    
    if (!file) {
        alert("Please select a file.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const content = e.target.result;
        const uppercaseContent = content.toUpperCase();
        const blob = new Blob([uppercaseContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        const downloadLink = document.getElementById('downloadLink');
        downloadLink.href = url;
        downloadLink.textContent = 'Download Converted File';
        downloadLink.style.display = 'block';
    };

    reader.readAsText(file);
}
