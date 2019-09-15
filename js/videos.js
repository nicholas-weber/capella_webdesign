function goToVideo1() {
    document.getElementById("video1").style.display = "flex";
    document.getElementById("video2").style.display = "none";
    document.getElementById("video3").style.display = "none";
}

function goToVideo2() {
    document.getElementById("video1").style.display = "none";
    document.getElementById("video2").style.display = "flex";
    document.getElementById("video3").style.display = "none";
}

function goToVideo3() {
    document.getElementById("video1").style.display = "none";
    document.getElementById("video2").style.display = "none";
    document.getElementById("video3").style.display = "flex";
}