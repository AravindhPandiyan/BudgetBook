{
    function overlayToggle() {
        let overlay = document.querySelector('.overlay');
        let iOver = document.querySelector('.iOver');
        let iBut = document.querySelector('.iBut');
        if (overlay.style.display == "block") {
            overlay.style.display = "none";
            iOver.style.display = "none";
            iBut.style.display = "none";
        } else {
            overlay.style.display = "block";
        }
    }
}
{
    function overlayToggle1() {
        let overlay = document.querySelector('.overlay1');
        if (overlay.style.display == "block") {
            overlay.style.display = "none";
        } else {
            overlay.style.display = "block";
        }
    }
}
{
    function overlayToggle2() {
        let overlay = document.querySelector('.overlay2');
        if (overlay.style.display == "block") {
            overlay.style.display = "none";
        } else {
            overlay.style.display = "block";
        }
    }
}

function updatePassword1() {
    let iOver = document.querySelector('.iOver');
    let iBut = document.querySelector('.iBut');
    if (iOver.style.display == "block" && iBut.style.display == "block") {
        iOver.style.display = "none";
        iBut.style.display = "none";
    } else {
        iOver.style.display = "block";
        iBut.style.display = "block";
    }
}