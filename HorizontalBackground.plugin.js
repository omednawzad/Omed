/**
 * @name HorizontalBackground
 * @version 1.0.0
 * @description Sets a long horizontal background image in Discord.
 */

module.exports = class HorizontalBackground {
    start() {
        const imageUrl = "https://i.imgur.com/yourImageID.jpg"; // Replace with your image URL
        const style = document.createElement("style");
        style.id = "horizontal-background-style";
        style.innerHTML = `
            .appMount-3lHmkl {
                background-image: url('${imageUrl}') !important;
                background-repeat: no-repeat !important;
                background-size: cover !important;
                background-position: center center !important;
            }
        `;
        document.head.appendChild(style);
    }

    stop() {
        const style = document.getElementById("horizontal-background-style");
        if (style) style.remove();
    }
};