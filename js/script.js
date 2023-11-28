
//selezioniamo elemento contenitore
const gridElement = document.getElementById("grid");
//dichiaro bottone
const buttonPlay = document.getElementById("buttonplay");


buttonPlay.addEventListener("click",

    function () {

        for (let i = 1; i <= 100; i++) {

            const newElement = createMyElement("div", "square", i);
            gridElement.append(newElement);

            newElement.addEventListener("click",

                function () {

                    newElement.classList.add("clicked");

                    //click del numero
                    console.log(i);

                }
            )
        }

    }

   
)



//funzione per riutilizzo
function createMyElement(tagtype, classname, content) {

    const currentElement = document.createElement(tagtype);
    currentElement.classList.add(classname);

    // aggiungo il contenuto (numero) all'elemento
    currentElement.innerHTML = content;

    return currentElement;

}