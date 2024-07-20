document.addEventListener('DOMContentLoaded', function() {
    const titlebar = document.querySelector('.window-titlebar');
    const windowElement = document.querySelector('.window');

    titlebar.addEventListener('mousedown', function(e) {
        const offsetX = e.clientX - windowElement.offsetLeft;
        const offsetY = e.clientY - windowElement.offsetTop;

        function mouseMoveHandler(e) {
            windowElement.style.left = `${e.clientX - offsetX}px`;
            windowElement.style.top = `${e.clientY - offsetY}px`;
        }

        function mouseUpHandler() {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        }

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    });
});
