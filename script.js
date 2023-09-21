let data = {
    "TLDR": "I'm Ankkit, a 20 year old full stack developer. I'm currently studying at the University of British Columbia.",
    "Details": "My name is Ankkit Prakash. I am a 20 year old full stack developer. I'm pursuing a Major in Computer Science and Minor in Mathematics at the University of British Columbia. ",
}
function aboutSwitcher(id) {
    let about = document.getElementById("about-text");
    // console.log(about);
    about.innerText = data[id];
}