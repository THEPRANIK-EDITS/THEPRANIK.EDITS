document.addEventListener('DOMContentLoaded', function() {
    var cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    var hoverElements = document.querySelectorAll('a, button, img, video');
    for (var i = 0; i < hoverElements.length; i++) {
        hoverElements[i].addEventListener('mouseenter', function() {
            cursor.classList.add('hover');
        });
        hoverElements[i].addEventListener('mouseleave', function() {
            cursor.classList.remove('hover');
        });
    }
});
