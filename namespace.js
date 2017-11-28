var JELE0006 = {
    init: function () {
        console.log("script in JELE0006 called");
        var div = document.createElement('div');

        div.textContent = "JELE0006";
        div.classList.add('box');
        document.getElementById("boxes").appendChild(div);

        div.addEventListener('mouseover', mouseOver);
        div.addEventListener('mouseout', mouseOut);
        div.addEventListener('click', mouseClick);
        
        function mouseClick(event) {
            event.currentTarget.style.borderColor = 'Crimson';
            event.currentTarget.style.backgroundColor = 'Red';
        }

        function mouseOver(event) {
            event.currentTarget.classList.toggle('highlight');
        }

        function mouseOut(event) {
            event.currentTarget.classList.toggle('highlight');
        }

    }

}