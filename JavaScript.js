//script.js
function changeBg (e) {
    const color = e.currentTarget.id;
    document.body.style.backgroundColor =color;
    document.body.style.transition = 'background-color 2s ease';
}

window.addEventListener('load',function () {
    const InkNavy = document.getElementById('navy');
    const InkWhite = document.getElementById('white');

    InkNavy.addEventListener ('mouseover', changeBg);
    InkWhite.addEventListener ('mouseover', changeBg);
});
