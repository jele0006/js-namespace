var JELE0006 = {
    init: function () {
        console.log("script in JELE0006 called");
        var div = document.createElement('box'),
            boxes = document.getElementById('boxes');


        box.textContent = "JELE0006";
        box.classList.add('box');
        boxes.appendChild(box);

        box.addEventListener('mouseover', mouseOver);
        box.addEventListener('mouseout', mouseOut);
        box.addEventListener('click', mouseClick);

        function mouseOver(event) {
            event.currentTarget.classList.toggle('highlight');
        }

        function mouseOut(event) {
            event.currentTarget.classList.toggle('highlight');
        }

        function mouseClick(event) {
            event.currentTarget.style.borderColor = "Crimson";
            event.currentTarget.style.backgroundColor = "Red";
        }

    }

}