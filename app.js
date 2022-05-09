const worker = new Worker("compute.js");

function monkeyStart() {
    let text = document.getElementById('input').value.toLowerCase();
    worker.postMessage(text);
}