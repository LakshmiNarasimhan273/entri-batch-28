const btn = document.getElementById("searchBtn");

btn.addEventListener("click", async () => {
    const input = document.getElementById("cityInput").value.trim();
    const resultDiv = document.getElementById("weatherResult");

    const API_KEY = "6385c5fa2e326c0dd7d6592fa232004b";

    if(!input){
        resultDiv.innerHTML = 
        `
        <div class="alert alert-warning text-center">Please enter a city name</div>
        `;
        return;
    }

    resultDiv.innerHTML = 
    `
    <div class="spinner-border text-danger text-center" role="status"></div>
    `;

    try{

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`)

        if(!response){
            throw new Error("City not found");
        };

        const data = await response.json();

        console.log(data);

        resultDiv.innerHTML = `
            <div class="result-box">
                <h4>${data.name}, ${data.sys.country}</h4>
                <p>${data.weather[0].main}</p>

                <div class="data-row">
                    <span><i class="bi bi-thermometer"></i>Temperature</span>
                    <span>${data.main.temp}</span>
                </div>

                <div class="data-row">
                    <span><i class="bi bi-moisture"></i>Humidity</span>
                    <span>${data.main.humidity}</span>
                </div>

                <div class="data-row">
                    <span><i class="bi bi-cloud-fog2"></i>Pressure</span>
                    <span>${data.main.pressure}</span>
                </div>

                <div class="data-row">
                    <span><i class="bi bi-wind"></i>Wind Speed</span>
                    <span>${data.wind.speed}</span>
                </div>

            </div>
        `

    }catch(err){
        resultDiv.innerHTML = `
            <div class="alert alert-danger">Fetching Weather Failed</div>
        `
    }

})