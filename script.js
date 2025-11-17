const topBox = document.getElementById("top_box")
function enterText(text) {
    text = text.toString();
    topBox.value = topBox.value + text
}
for (let i = 0; i <= 9; i++) {
    document.getElementById(i).addEventListener("click", function () {
        enterText(i)
    })
}
document.getElementById("+").addEventListener("click", function () {
    enterText("+")
});
document.getElementById("-").addEventListener("click", function () {
    enterText("-")
});
document.getElementById("*").addEventListener("click", function () {
    enterText("*")
});
document.getElementById("/").addEventListener("click", function () {
    enterText("/")
});
document.getElementById(".").addEventListener("click", function () {
    enterText(".")
});
document.getElementById("ac").addEventListener("click", function () {
    topBox.value = "";
});
document.getElementById("backspace").addEventListener("click", function () {
    topBox.value = topBox.value.toString().slice(0, topBox.value.length - 1)
});
document.getElementById("=").addEventListener("click", function () {
    topBox.value = math.evaluate(topBox.value.toString())
});