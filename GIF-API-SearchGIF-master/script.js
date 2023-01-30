var inputText = document.querySelector('.inputText');
var button = document.querySelector('.btn');

//Display GIF area
const showArea = document.querySelector('.showArea');
var API_KEY = "xsxFQtFt2VSRgbDCUV2Qv9kzwlZW1YAm";
button.addEventListener('click', ()=> {
    const gifName = inputText.value;
    var url  = `https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=${API_KEY}&limit=5`;

    var response = $.ajax(url, {
        type:'GET',
        timeout:1000,
        data:'json',
        success: function(respo, status, xhr){
            for(let i = 0;i < 20;i++){
                console.log(respo.data[i].images.downsized.url);
                var displayImg = document.createElement('img');
                displayImg.classList.add('gif');
                displayImg.src = respo.data[i].images.downsized.url;
                showArea.appendChild(displayImg);
            }
        }
    });
});
