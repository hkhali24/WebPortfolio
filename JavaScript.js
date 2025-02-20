//script.js
function changeBg (e) {
    const color = e.currentTarget.id;
    document.body.style.backgroundColor =color;
}

window.addEventListener('load',function () {
    const InkNavy = document.getElementById('navy');
    const InkWhite = document.getElementById('white');

    InkNavy.addEventListener ('mouseover', changeBg);
    InkWhite.addEventListener ('mouseover', changeBg);
});
