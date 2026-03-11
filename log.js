let editingRow = null; 
const saveBtn = document.getElementById("sbtn");

saveBtn.addEventListener("click",(e)=>{
 e.preventDefault();

 let empId = document.getElementById("emId").value;
 let fName = document.getElementById("firstName").value;
 let lName = document.getElementById("lastName").value;
 let email = document.getElementById("emEmail").value;
 let phone = document.getElementById("phoneNumber").value;

 let date = document.getElementById("emdate").value;

   
 let tableBody = document.getElementById("tbdy");

   if (!empId || !fName  || !phone ) {
        alert("Please fill all fields!");
        return;
      }

 if(editingRow === null){
     let tableRow = document.createElement("tr");

   let tBody1 = document.createElement("td");
   tBody1.textContent = empId;

   let tBody2 = document.createElement("td");
   tBody2.textContent = fName;

   let tBody3 = document.createElement("td");
   tBody3.textContent = lName;

   let tBody4 = document.createElement("td");
   tBody4.textContent = email;

   let tBody5 = document.createElement("td");
   tBody5.textContent = phone;

   let tBody6 = document.createElement("td");
   tBody6.textContent = date;

   // edit button
   let editButton = document.createElement("button");
   editButton.textContent = "Edit";
   editButton.classList.add("editBtn");

   // delete button
   let deletButton = document.createElement("button");
   deletButton.textContent = "Delete";
   deletButton.classList.add("deleteBtn");
   

   deletButton.addEventListener("click",()=>{
      tableRow.remove();
   });
   //editingrow button
   editButton.addEventListener("click",()=>{

    
      document.getElementById("emId").value = tBody1.textContent;
      
      document.getElementById("firstName").value = tBody2.textContent;
      document.getElementById("lastName").value = tBody3.textContent
      document.getElementById("emEmail").value = tBody4.textContent;
      document.getElementById("phoneNumber").value = tBody5.textContent;
      document.getElementById("emdate").value = tBody6.textContent;

      editingRow = tableRow;

   });
 tableRow.appendChild(tBody1);
   tableRow.appendChild(tBody2);
   tableRow.appendChild(tBody3);
   tableRow.appendChild(tBody4);
   tableRow.appendChild(tBody5);
   tableRow.appendChild(tBody6);

   tableRow.appendChild(editButton);
   tableRow.appendChild(deletButton);

   tableBody.appendChild(tableRow);

}else{
  editingRow.children[0].textContent = empId;
  editingRow.children[1].textContent = fName;
  editingRow.children[2].textContent = lName;
  editingRow.children[3].textContent = email;
  editingRow.children[4].textContent = phone;
  editingRow.children[5].textContent = date;


  editingRow = null;

}
 // form clear
 document.getElementById("emId").value = "";
 document.getElementById("firstName").value = "";
 document.getElementById("lastName").value = "";
 document.getElementById("phoneNumber").value = "";
document.getElementById("emEmail").value = "";
 document.getElementById("emdate").value = "";

})


