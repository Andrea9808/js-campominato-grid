
//selezioniamo elemento contenitore
const gridElement = document.getElementById("grid");
//dichiaro bottone
const buttonPlay = document.getElementById("buttonplay");
//dichiaro il select
const selectDifficolta = document.getElementById("hard");


buttonPlay.addEventListener("click",


    function () {

        //rimuovo gli elementi dopo aver cliccato nuovamente il bottone
        gridElement.innerHTML = "";

        // ottengo la difficoltà selezionata
        const difficolta = selectDifficolta.value; 

        //memorizzo una variabile per gli elemeti
        let elements;

        if (difficolta === "Difficoltà1") {
            elements = 100;
        } 
        
        else if (difficolta === "Difficoltà2") {
            elements = 81;
            gridElement.classList.add("difficolta2");
        } 
        
       else if (difficolta === "Difficoltà3") {
            elements = 49;
            gridElement.classList.add("difficolta3");
        } 
        
        else {
            elements = 100; 
        }

        for (let i = 1; i <= elements; i++) {

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