let data = {
    "TLDR": "TLDR Placeholder Text",
    "Details": "Details Placeholder Text",
}
function aboutSwitcher(id) {
    let about = document.getElementById("About");
    console.log(about);
    about.innerHTML =  data[id];
}