function Bass() {
    this.image = '<img src="https://tpwd.texas.gov/fishboat/fish/images/inland_species/lmbassbig.jpg" id="displayImage" />';
    this.size;
    this.weight;
}

var sizeChart = {
    small: 'Small',
    medium: 'Medium',
    large: 'Large',
    lunker: 'Lunker'
};

var bag = [];
var count = 1;
var imageContainer = document.getElementById('imageContainer');
var button = document.getElementById('castButton');
var tryAgainButton = document.getElementById('tryAgainButton');

function makeCast() {    
    var catchFish = catchOrMiss();
    console.log(catchFish);
    if (catchFish) {
        var bass = new Bass();
        var pounds = Math.floor(Math.random() * 20);
        bass.weight = pounds;
        console.log(pounds);
        console.log(bass);
        bag.push(bass);

        imageContainer.innerHTML =
            bass.image +
            '<br>' +
            '<p><b>Weight:</b> ' + bass.weight + 'lbs</p>';
    } else {
        document.getElementById('imageContainer').innerHTML = '<p>No bites. Try again.</p>';
    }

    if (count <= 4) count += 1
    else {
        winOrLose();
    }
    console.log(count);
}

function catchOrMiss() {
    return Math.random() >= 0.5;
}

function winOrLose() {
    if (bag.length > 2) imageContainer.innerHTML = '<p>You kicked Bass!</p>'
    else {imageContainer.innerHTML = '<p>You got your bass kicked!</p>'}
    
    button.setAttribute('style', 'display: none;');
    tryAgainButton.setAttribute('style', 'display: block;');
}

button.addEventListener('click', function () {
    makeCast();
});

tryAgainButton.addEventListener('click', function () {
    location.reload();
});