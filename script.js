$(function() {
    let width = screen.width;
    if (width > 1200) {
        window.open('ShoppingListApp/computer.html', '_self');
    } else {
        window.open('ShoppingListApp/mobile.html', '_self');
    }
}())