class Bass {
    constructor(weight) {
        this.weight = weight;
        this.image = '<img src="https://tpwd.texas.gov/fishboat/fish/images/inland_species/lmbassbig.jpg" id="displayImage" />';
    }
}


const bag = [];
let count = 0;
let imageContainer = $('#imageContainer');
let button = $('#castButton');
let tryAgainButton = $('#tryAgainButton');

makeCast = () => {
    let catchFish = catchOrMiss();
    console.log(catchFish);
    if (catchFish) {
        let pounds = Math.floor(Math.random() * 20);
        let bass = new Bass(pounds);
        //        bass.weight = pounds;
        console.log(pounds);
        console.log(bass);
        bag.push(bass);

        imageContainer.html(bass.image +
            '<br>' +
            '<p><b>Weight:</b> ' + bass.weight + 'lbs</p>');
    } else {
        imageContainer.html('<p>No bites. Try again.</p>');
    }

    if (count <= 4) count += 1
    else {
        winOrLose();
    }
    console.log(count);
}

catchOrMiss = () => {
    return Math.random() >= 0.5;
}

winOrLose = () => {
    if (bag.length > 2) imageContainer.html('<p>You kicked Bass!</p>');
    else {
        imageContainer.html('<p>You got your bass kicked!</p>');
    }

    button.css({'display:': 'none'});
    tryAgainButton.css({'display': 'block'});
}

button.on('click', makeCast)

tryAgainButton.on('click', function () {
    location.reload();
});
