function Nuevaventana(url) {
    const newWindow = window.open(url, '_blank');
    if (newWindow) {
        newWindow.opener = null;
    }
}

function addHoverEffect(listItemId, imageId) {
    const listItem = document.getElementById(listItemId);
    const image = document.getElementById(imageId);

    listItem.addEventListener('mouseover', () => {
        image.classList.add('hover-effect');
    });

    listItem.addEventListener('mouseout', () => {
        image.classList.remove('hover-effect');
    });
}
addHoverEffect("Hobby", "Hobby");
addHoverEffect("Makisushi", "Makisushi");
addHoverEffect("Serie", "Serie");
addHoverEffect("colorfav", "colorfav");
addHoverEffect("deportista", "deportista");
addHoverEffect("Japan", "Japan");

document.querySelectorAll('img[data-url]').forEach(img => {
    img.addEventListener('click', () => {
        Nuevaventana(img.getAttribute('data-url'));
    });
});
