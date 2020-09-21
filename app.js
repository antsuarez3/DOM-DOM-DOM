window.addEventListener('DOMContentLoaded', function () {
    let btn = document.createElement("BUTTON");
    let container = document.createElement('div');
    document.body.appendChild(btn);
    btn.innerHTML = "Add Square";
    document.body.appendChild(btn);
    container.className = "container";
    document.body.appendChild(container);
    let squareId = 0;

    btn.addEventListener('click', function () {
        let div = document.createElement('div');
        let num = document.createElement('div');
        div.className = 'square'
        container.appendChild(div)
        squareId++;
        div.id = squareId;
        num.innerText = squareId;
        num.style.display = "none"
        div.appendChild(num)


        div.addEventListener("mouseover", function () {
            div.style.display = "flex";
            div.style.justifyContent = 'center';
            div.style.alignItems = 'center'
            div.innerHTML = div.id
            div.style.color = 'white';
        });

        div.addEventListener('mouseout', function () {
            num.style.display = 'none';
            div.innerHTML = '';
        });

        div.addEventListener("dblclick", function () {

            if (div.id % 2 == 0) {
                if (div.nextSibling) {
                    container.removeChild(div.nextSibling);
                } else { alert("NO SQUARE") }
            } else {
                if (div.previousSibling) {
                    container.removeChild(div.previousSibling);
                } else { alert("NO SQUARE") }
            }
        })

        //const mydiv = document.querySelector('div');
        //const mybutton = document.getElementById('mybutton');

        function randmColor() {
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color += Math.floor((Math.random() * 16)).toString(16);
            }
            return color;

        }

        div.addEventListener('click', () => {
            div.style.backgroundColor = randmColor();
            console.log(div.id)

            // var div = document.querySelectorAll('.container');
            //var button = document.querySelector('.button')

            //button.addEventListener('click', _removeClasses)

            //function _removeClasses() {
            //  for (var i = 0; i < els.length; i++) {
            //    els[i].classList.remove('active')
            //}
            //}
        });




    })
})