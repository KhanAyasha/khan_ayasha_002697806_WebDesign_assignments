//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

function addStudent(){

  var table = document.getElementById("myTable");
  var tBody = table.lastElementChild;
  
  var studentNumber = table.lastElementChild?.lastElementChild?.previousElementSibling?.firstElementChild?.nextElementSibling?.innerHTML||"Student 0";
  var lastIndex = studentNumber.split(" ")[1];

  console.log(lastIndex);

  var trNode = document.createElement("tr");
  var tdCheckBoxNode = document.createElement("td");
  tdCheckBoxNode.innerHTML ='<input type="checkbox" onClick="onClickcheckbox(this)" class="checkBox"/><br /><br /><img src="down.png" width="25px" onclick="OnDownIconClick(this)"/>'

  

  var tdStudentNode  = document.createElement("td");
  tdStudentNode.innerHTML = 'Student '+(parseInt(lastIndex)+1);

  var tdTeacherNode  = document.createElement("td");
  tdTeacherNode.innerHTML = 'Teacher '+(parseInt(lastIndex)+1);

  var tdAwardNode  = document.createElement("td");
  tdAwardNode.innerHTML = 'Approved';

  var tdSemNode  = document.createElement("td");
  tdSemNode.innerHTML = 'Fall';

  var tdTypeNode  = document.createElement("td");
  tdTypeNode.innerHTML = 'TA';

  var tdBudgetNode  = document.createElement("td");
  tdBudgetNode.innerHTML = '12345';

  var tdPercentageNode  = document.createElement("td");
  tdPercentageNode.innerHTML = '100%';

  var tdDeleteNode  = document.createElement("td");
  tdDeleteNode.setAttribute("style","display:none");
  var trAdvisorDropDownNode = document.createElement("tr");

  //var tdAdvisorDropDownNode = document.createElement("td");
  //tdAdvisorDropDownNode.setAttribute("colspan", "8");
  //tdAdvisorDropDownNode.setAttribute("style","display:none")
  //tdAdvisorDropDownNode.innerHTML='Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br />'
  trAdvisorDropDownNode.className="dropDownTextArea";
  trAdvisorDropDownNode.innerHTML='<td colspan="8">Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br /</td>';
  
  trNode.appendChild(tdCheckBoxNode);
  trNode.appendChild(tdStudentNode);
  trNode.appendChild(tdTeacherNode);
  trNode.appendChild(tdAwardNode);
  trNode.appendChild(tdSemNode);
  trNode.appendChild(tdTypeNode);
  trNode.appendChild(tdBudgetNode);
  trNode.appendChild(tdPercentageNode);
  trNode.appendChild(tdDeleteNode);
  //trAdvisorDropDownNode.appendChild(tdAdvisorDropDownNode);
  tBody.appendChild(trNode);
  tBody.appendChild(trAdvisorDropDownNode);

  window.alert("Added New record for Student "+(parseInt(lastIndex)+1));
  
}

function buttonDisabled(){

  //var checkedRows = 0;
  var buttonRef = document.getElementById("button");
  
  if (buttonRef.disabled == true){
    document.getElementById("button").style.backgroundColor = "Gray";
    document.getElementById("button").style.border = "2px solid gray";
  }
}


function onClickcheckbox(checkBox){
  console.log(checkBox);
  var selectedRow = checkBox.parentElement.parentElement;
  var headerRow = checkBox.parentElement.parentElement.parentElement.firstElementChild;

  if(checkBox.parentElement.parentElement.parentElement.firstElementChild.lastElementChild.innerHTML == 'PERCENTAGE'){
    var headerDelete = document.createElement("th");
    var headerEdit = document.createElement("th");

    headerDelete.innerHTML = 'DELETE';
    headerEdit.innerHTML = 'EDIT';

    headerRow.appendChild(headerDelete);
    headerRow.appendChild(headerEdit);

  }

  if(checkBox.checked==true){
    //document.getElementById("myTable").style.display = "table-header-group";
    //checkedRows  = checkedRows + 1;
    selectedRow.style.backgroundColor="yellow";
    document.getElementById("button").style.backgroundColor = "Orange";
    document.getElementById("button").style.border = "2px solid Orange";
    document.getElementById("button").disabled = false;

    var deleteButton = document.createElement("td");
    deleteButton.innerHTML = '<button id="deleted" type="button" onClick="onDeleteRow(this)">Delete</button>'
    selectedRow.appendChild(deleteButton);

    var editButton = document.createElement("td");
    editButton.innerHTML = '<button id="edit" type="button" onClick="onEditRow(this)">Edit</button>'
    selectedRow.appendChild(editButton);
  }else{
      //checkedRows = checkedRows - 1;
      selectedRow.style.backgroundColor="#fff";
      selectedRow.deleteCell(10);
      selectedRow.deleteCell(9);
      
  }

  checkedRows = document.getElementsByClassName("checkBox");
  var totalChecked = 0;
  for(var i=0; i<checkedRows.length; i++){
    if(checkedRows[i].checked == true){
      totalChecked++;
    }
  }

  if(totalChecked === 0){
    document.getElementById("button").disabled = false;
      document.getElementById("button").style.backgroundColor = "Gray";
      document.getElementById("button").style.border = "2px solid Gray";
  }
}


function onDeleteRow(deleteRef){
  var selectedRow = deleteRef.parentElement.parentElement;
  var indexNum = selectedRow.rowIndex;
  if(confirm("Do you want to delete Student "+indexNum)){
    document.getElementById("myTable").deleteRow(selectedRow.rowIndex);
    alert("Student "+indexNum +" data has been deleted.");
  }

  checkedRows = document.getElementsByClassName("checkBox");
  var totalChecked = 0;
  for(var i=0; i<checkedRows.length; i++){
    if(checkedRows[i].checked == true){
      totalChecked++;
    }
  }

  if(totalChecked === 0){
    document.getElementById("button").disabled = false;
      document.getElementById("button").style.backgroundColor = "Gray";
      document.getElementById("button").style.border = "2px solid Gray";
  }
}

function onEditRow(editRef){
  var selectedRow = editRef.parentElement.parentElement;
  var indexNum = selectedRow.rowIndex;
  
  //let message;
  if(prompt("Edit Student "+indexNum+" details")){
    alert("Student "+indexNum +" data has been updated Successfully.")
  }
  
  
}

function OnDownIconClick(downRef){

    console.log(downRef);

    rowIndex = downRef.parentElement.parentElement.nextElementSibling;

    if(window.getComputedStyle(rowIndex).display === "none"){
      rowIndex.style.display = "block";
    }else {
      rowIndex.style.display = "none";
    }
}
