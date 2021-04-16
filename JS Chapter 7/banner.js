window.onload = initBannerLink;
var theAd = 0;
var adURL = new Array("dccomics.com/characters/batman","dccomics.com/characters/batwoman","dccomics.com/characters/superman","dccomics.com/characters/green-lantern","dccomics.com/characters/the-flash","dccomics.com/characters/aquaman");
var adImages = new Array("superhero1.png", "superhero2.png", "superhero3.png", "superhero4.png", "superhero5.png", "superhero6.png");

function initBannerLink() {
    if (document.getElementById("adBanner").parentNode.tagName == "A"){
        document.getElementById("adBanner").parentNode.onclick =newLocation;
    }
    rotate();
}

function newLocation() {
    document.location.href = "https://www." + adURL[theAd];
    return false;
}

function rotate() {
    theAd++;
    if (theAd == adImages.length) {
        theAd = 0;
    }
    document.getElementById("adBanner").src = adImages[theAd];
    setTimeout(rotate, 3 * 1000);
}