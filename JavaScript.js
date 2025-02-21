//script.js
function changeBg (e) {
    //change background color
    const color = e.currentTarget.id;
    document.body.style.backgroundColor =color;
    document.body.style.transition = 'background-color 2s ease';
}

function changeFontSize (elem,change) {
    //change font size
    const curFontSize = parseInt (getComputedStyle (elem).fontSize);
    const newFontSize = curFontSize + change;
    elem.style.fontSize = String (newFontSize) + 'px';
    return getComputedStyle (elem).fontSize;
}

window.addEventListener('load',function () {
    //change background color with mouseover
    const InkNavy = document.getElementById('navy');
    const InkWhite = document.getElementById('white');

    InkNavy.addEventListener ('mouseover', changeBg);
    InkWhite.addEventListener ('mouseover', changeBg);
    
});

window.addEventListener('load',function () {
    //click to change font size
    const p = document.getElementById ('changing-styles');
    const SmallFont = document.getElementById ('smallfont');
    const MediumFont = document.getElementById ('mediumfont');
    const LargeFont = document.getElementById ('largefont');

    SmallFont.addEventListener ('click', function () {
        const fontSize = changeFontSize (p, -1);
        console.log (fontSize);
    });

    MediumFont.addEventListener ('click', function () {
        const fontSize = changeFontSize (p, 1);
        console.log (fontSize);
    });

    MediumFont.addEventListener ('click', function () {
        const fontSize = changeFontSize (p, 2);
        console.log (fontSize);
    });

    LargeFont.addEventListener ('click', function () {
        const fontSize = changeFontSize (p, 3);
        console.log (fontSize);
    });

});



    
