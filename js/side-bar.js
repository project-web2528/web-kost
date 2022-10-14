

function showSideBar(){
    document.getElementById("side-menu").style.left = "0";
    document.getElementById("label-check").style.display = "none";
}

function closeSideBar(){
    document.getElementById('side-menu').style.left = "-50%";
    document.getElementById("label-check").style.display = "block";
}