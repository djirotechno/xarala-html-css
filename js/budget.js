

//************************************** Depense SCRIPT **** **********************************/   

let data = []
function submit(){

    const inputData ={
        titre: document.getElementById('titre').value,
        montant:document.getElementById('montant').value
    }
    
    data.push(inputData)
    localStorage.setItem('budget', JSON.stringify(data));
    
    }
    






   
 //----------------CRUD-------------------------//
//EDIT
function edit(td){
    let editbtn = document.getElementById("edit")
    row = td.parentElement.parentElement

     
    document.getElementById("titre").value = row.cells[0].innerHTML;
    document.getElementById("montant").value = row.cells[1].innerHTML;
    editbtn.addEventListener("click", toggleModal);

}

//update
function update(td){
    row = td.parentElement.parentElement
    row.cells[0].innerHTML = document.getElementById("titre").value;
    row.cells[1].innerHTML = document.getElementById("montant").value;
    row = null

    data = JSON.parse(localStorage.getItem('budget')) || [];


}

//DELETE
function remove(td){
    row = td.parentElement.parentElement
    document.getElementById("table").deleteRow(row.rowIndex)

    console.log(row.cells)
}



//******************* Gestion du composant Modal ***************************** */
const modal = document.querySelector(".modal");
const openModal = document.querySelector(".openModal");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

openModal.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
// window.addEventListener("click", windowOnClick); 



//************************************** REVENU SCRIPT **** **********************************/                                            
                                        
  



