const inputTxt = document.querySelector('.inputTxt');
var button = document.querySelector('.btn');
const showData = document.querySelector('.showData');

button.addEventListener('click', () => {
    const cityInput = inputTxt.value;
    console.log(cityInput);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=382c22dd35577bcd6b412ab42e903705`)
    .then(response => response.json())
    .then(data => {
// console.log(data);

        let weather1 = {
            condition: `${data.weather[0].description}`,
            city:   `${data.name}`,
            temp: `${Math.round(data.main.temp - 273)}`
        }
        setInterval(function(){
            localStorage.clear();
            let tempValue= JSON.stringify(weather1);
            localStorage.setItem("weather1", tempValue);
            console.log(tempValue);
        }, 10000);

        var weather = 
        showData.innerHTML = `
                            <ul>
                                <li class="desc">${data.weather[0].description}</li>
                                <li class="city">${data.name}</li>
                                <li class="temp">${Math.round(data.main.temp - 273)} &#8451;</li>
                            </ul> 
                            `;
    });

});

/**
 * get the data and store in localstorage
 * and display every one second
 */
