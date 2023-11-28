
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

        const difficulty = selectDifficolta.value; // Ottengo la difficoltà selezionata

        
        //creo una condizione, ad ogni condizione una difficoltà diversa
        if (difficulty === "Difficoltà1") {
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
            
        } else if (difficulty === "Difficoltà2") {
            for (let i = 1; i <= 81; i++) {

                const newElement = createMyElement("div", "square2", i);
                gridElement.append(newElement);
    
                newElement.addEventListener("click",
    
                    function () {
    
                        newElement.classList.add("clicked");
    
                        //click del numero
                        console.log(i);
    
                    }
                )
            }

        } else if (difficulty === "Difficoltà3") {
            for (let i = 1; i <= 49; i++) {

                const newElement = createMyElement("div", "square3", i);
                gridElement.append(newElement);
    
                newElement.addEventListener("click",
    
                    function () {
    
                        newElement.classList.add("clicked");
    
                        //click del numero
                        console.log(i);
    
                    }
                )
            }
        } else {
            i = 100; 
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