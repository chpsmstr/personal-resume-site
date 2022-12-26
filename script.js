document.addEventListener("DOMContentLoaded", () => {
        console.log("ready!");
        var display = "ankkitprakash.com";
        var i = 0;

        var consoleTyper = setInterval(function () {
            if (i != display.length) {
                // console.log(display[i]);
                i++;
                document.getElementById("animation-on-load-text").innerText = display.substring(0, i);
            }

            else {
                clearInterval(consoleTyper);
            }

            // console.log(i);
        }, 170);
});