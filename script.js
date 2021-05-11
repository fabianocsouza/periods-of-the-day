

function uploadPeriodsOfTheDay(){
    let message = document.getElementById('message');
    let hours = new Date().getHours();

    message.innerHTML = `Agora são <strong>${hours} horas </strong>`;

    uploadImageAndColorBody(hours);
}

function uploadImageAndColorBody(hours){
    let image = document.getElementById('image');

    if(hours >= 0 && hours < 12){
        image.src = './assets/photoMorning.png';
        document.body.style.backgroundColor = '#e2cd9f';
    }else if(hours >= 12 && hours < 18 ){
        image.src = './assets/photoAfternoon.png';
        document.body.style.backgroundColor = '#b9846f';
    }else {
        image.src = './assets/photoNight.png';
        document.body.style.backgroundColor = '#515154'
     
    }
}
