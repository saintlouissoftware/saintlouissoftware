

function highlightText(projectVar, imgVar) {
    var projectTextToHighlight = document.getElementById(projectVar);
    var projectBlackImgToMakeTransparent = document.getElementById(imgVar);

    projectTextToHighlight.style.color = '#fafafa';

    projectBlackImgToMakeTransparent.classList.add("lightenedImg");


}

function removeHighlight(projectVar, imgVar) {
    var projectTextToHighlight = document.getElementById(projectVar);
    var projectBlackImgToMakeTransparent = document.getElementById(imgVar);

    projectTextToHighlight.style.color = '#c9cbd4';
    projectBlackImgToMakeTransparent.classList.remove("lightenedImg");
}
