const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if(!SpeechRecognition){
    alert("Your browser does not support speech recognition");
} else {
    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    const output = document.getElementById("results");
    const start = document.getElementById("startBtn");
    const stop = document.getElementById("stopBtn");

    start.addEventListener("click", () => {
        recognition.start();
        output.innerText = "Listening...";
    });

    stop.addEventListener("click", () => {
        recognition.stop();
    })

    recognition.onresult = (e) => {
        let transcript = "";
        for(let i = e.resultIndex; i < e.results.length; i++){
            transcript += e.results[i][0].transcript;
        }
        output.innerText = transcript;
    }


}

// TASK: BUILD A VOICE IMPLEMENTED TODO APPLICATION