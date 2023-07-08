class Bass {
    constructor(weight){
        this.weight = weight;
        this.image = '<img src="https://tpwd.texas.gov/fishboat/fish/images/inland_species/lmbassbig.jpg" id="displayImage" />';
    }
}


const bag = [];
let totalWeight = 0;
let count = 0;
let imageContainer = document.getElementById('imageContainer');
let castButton = document.getElementById('castButton');
let tryAgainButton = document.getElementById('tryAgainButton');

makeCast = () => {    
    document.getElementById('imageContainer').innerHTML = '<img src="https://www.fly-fishing-discounters.com/images/fly_fishing_animation.gif.pagespeed.ce.DkFCMDm9UQ.gif" alt="cast" /><br><p style="text-align: center;">Casting...</p>';

    castButton.classList.add('disabled');
    castButton.setAttribute('disabled', 'disabled');

    setTimeout(function () {
        var catchFish = catchOrMiss();
        if (catchFish) {
            var pounds = Math.floor(Math.random() * 10);
            var bass = new Bass(pounds);
            bass.weight = pounds;
            totalWeight = totalWeight + bass.weight;
            bag.push(bass);

            imageContainer.innerHTML =
                bass.image +
                '<br>' +
                '<div id="sunburst" class="flexContainerColumn"><p><b>Catch!</b> ' + bass.weight + 'lbs</p></div>';
        } else document.getElementById('imageContainer').innerHTML = '<p>No bites. Try again.</p>';
        setCount();
        castButton.removeAttribute('disabled');
        castButton.classList.remove('disabled');
    }, 1000);
}

catchOrMiss = () => {
    return Math.random() >= 0.5;
}

setCount = () => {
    count += 1;
    document.getElementById('countNumber').innerHTML = count;
    document.getElementById('weight').innerHTML = totalWeight;
    switch(count) {
        case 0:
            document.getElementById('count').style.display = 'block';    
            break;
        case 5:
            document.getElementById('castButton').innerText = 'Results'
            break;
        // default:
        //     break;
    }

    if(count > 0) {
        document.getElementById('status').style.display = 'flex';
    }
    
    document.getElementById('countNumber').innerHTML = count;
}

winOrLose = () => {
    if (totalWeight >= 12) imageContainer.innerHTML = 
    '<p>You kicked Bass!</p><img src="https://thumbs.gfycat.com/AnxiousMammothFlatcoatretriever-max-1mb.gif" alt="You got your bass kicked" />'
    else {imageContainer.innerHTML = '<p>You got your bass kicked!</p><img src="//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iliketowastemytime.com%2Fsites%2Fdefault%2Ffiles%2Fbest-gifs10-funny-sheep.gif&f=1&nofb=1" alt="You got your bass kicked" />'}
    
    castButton.setAttribute('style', 'display: none;');
    tryAgainButton.setAttribute('style', 'display: block;');
}

castButton.addEventListener('click', function () {
    count <= 4 ? makeCast() : winOrLose();
});

tryAgainButton.addEventListener('click', function () {
    location.reload();
});