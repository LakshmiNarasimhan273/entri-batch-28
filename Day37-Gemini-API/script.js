document.addEventListener("DOMContentLoaded", () => {

    const API_KEY = "AIzaSyAotT10SxEcAcJkg9kqhwFtp2aBSlHp_CM";

    const button = document.getElementById("geminiSearch");

    button.addEventListener("click", async () => {
        const input = document.getElementById("userInput").value.trim();
        const resultDiv = document.getElementById("result");

        // condition
        if(!input){
            resultDiv.innerHTML = 
            `
            <div class="alert alert-warning">Please Enter some Topics</div>
            `;
            return;
        }

        // Prompt
        const prompt = `
        Provide a comprehensive explanation of "${input}"
        Include:
        - Clear definition
        - Background context
        - Key facts or examples
        - Give some web reference link

        Write at least 100 words.
        `;
        console.log(prompt);

        resultDiv.innerHTML = `
        <div class="d-flex justify-content-center">
            <div class="spinner-border"></div>
        </div>
        `;

        try{
            // API CALL
            const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key="+ API_KEY, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [
                        {role: "user", parts: [{text: prompt}]}
                    ]
                })
            });

            const data = await response.json();

            // data.candidates.[0].content.parts.[0].text

            const output = data?.candidates?.[0]?.content?.parts?.[0]?.text;
            resultDiv.innerText = output;

            console.log(data);

        }catch(err){
            resultDiv.innerHTML = `
            <div class="alert alert-danger">Gemini API Error</div>
            `
        }

    })


})

// Learners DIY
// - PDF Summarizer *
// - Image Classification
// - Q&A Application
// - Language Translator