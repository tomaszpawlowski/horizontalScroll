document.addEventListener("DOMContentLoaded", function () {
    var horizontalScroll = document.querySelectorAll(".horizontalScroll");
    for (var i = 0; i < horizontalScroll.length; i++) {
        horizontalScroll[i].addEventListener("wheel", function (e) {
            if (e.deltaY !== 0) {
                this.scroll((this.scrollLeft + e.deltaY), 0);
            }
            else {
                console.log("[horizontalScroll]", this, "deltaY : none value. Event:", e);
            }
        });
    }
});
