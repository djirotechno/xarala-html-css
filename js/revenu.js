
//variable globale
let row_rev = null;

//la fonction submit insert les donnes dans localstorage 
//si les information existe dejas il fait une appel de la fonction update()
function submit1(){
    let dataEntered1 = retrieveData1();
    let readData1 = readdingDataFromLocalStorage1(dataEntered1)
    if(row_rev  == null){
        insert1(readData1);

    }else{
        update1()

    }
 
}

// la function retrieveData1 retoun un table des donnees du formulaire HTML
function retrieveData1(){

    let titre = document.getElementById('titre1').value;
    let montant = document.getElementById('montant1').value;

    let dataArray = [titre,montant];
   
    return dataArray;

    
} 

// save les donnees dans localstrage par setItem
// recuper les donnes du localstorage par getItem et return le tout sous for de tableau
function readdingDataFromLocalStorage1(dataEntered1 ){

    //
    let t = localStorage.setItem("titre1",dataEntered1[0]);
    let m = localStorage.setItem("montant1",dataEntered1[1]);
    //getitem

    let t1 = localStorage.getItem("titre1",t)
    let m1 = localStorage.getItem("montant1",m)
    let arr = [t1,m1];
    return arr
}

//generateur de ligne dans le table HTML
function insert1(readData1){
    let row = table1.insertRow();
 
     row.insertCell(0).innerHTML = readData1[0];
     row.insertCell(1).innerHTML = readData1[1];
     row.insertCell(2).innerHTML = `<button id="edit1" onclick=edit1(this)>Edit</button>
                                     <button onclick=remove1(this)>Delete</button>`
 }


//DELETE
function remove1(td){
    row_rev = td.parentElement.parentElement
    document.getElementById("table1").deleteRow(row_rev .rowIndex)
}



//******************* Gestion du composant Modal ***************************** */
const modalRev = document.querySelector("#modal-rev");
const openModalRev = document.querySelector(".openModal-rev");
const closeButtonRev = document.querySelector(".close-button-rev");

function toggleModal1() {
    modalRev .classList.toggle("showModal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal1();
    }
}

openModalRev.addEventListener("click", toggleModal1);
closeButtonRev.addEventListener("click", toggleModal1);
window.addEventListener("click", windowOnClick); 
