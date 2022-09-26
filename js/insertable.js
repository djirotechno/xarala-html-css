


window.addEventListener('load',()=>{
const insert = ()=>{
    depense = JSON.parse(localStorage.getItem('budget'));
    let table = document.getElementById("table");

    for(let i=0; i<= depense.length; i++){
        let row = ` <tr>
                        <td>${depense[i].titre}</td>
                        <td>${depense[i].montant}</td>
                        <td><button id="edit" onclick=edit(this)>Edit</button>
                        <button onclick=remove(this)>Delete</button></td>
                     </tr>`

                table.innerHTML += row

    }
 }

})



  document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('submit').addEventListener('click', insert);
        });