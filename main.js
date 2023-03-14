count = 0

function likeCoutner() {
    count++;
    document.getElementById("likeCounter").innerHTML = count;
}

function fadeIn() {
    const textEle = document.getElementById("likeCounter");
    textEle.classList.add("fadeIn");
}