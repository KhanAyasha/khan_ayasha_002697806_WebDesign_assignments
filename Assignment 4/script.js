window.onload = () => {

    const regExName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const regExEmail = /^([\w\.]+)@northeastern\.edu$/;
    const regExPhone = /^\d{3}-?\d{3}-\d{4}$/;
    const regExZipCode = /^[1-9][\d]+$/;
    const regExAdd1 = /^[a-zA-Z0-9\s]+$/;
    const regExAdd2 = /^[a-zA-Z0-9\s]*$/;

    const display = (elementName, isInValid) => {
        
        if(isInValid) {
            // You cant access non form element like below error field using name
            // Hence use the rudimentary way - getElementById or other
            document.getElementById(`error_${elementName}`).style.display = "block";
            if(elementName != "checkbox")
                document.myForm[elementName].style.border = "2px solid red";
        } else {
            document.getElementById(`error_${elementName}`).style.display = "none";
            if(elementName != "checkbox")
                document.myForm[elementName].style.border = "";
        }
    }

    let isFirstNameInValid = true, isLastNameInValid = true, isEmailInValid = true, isPhoneNumberInValid = true, isZipCodeInvalid = true, isTextInvalid = true, isAdd1Valid = true, isAdd2Valid = false, isCityValid = true, isStateValid = true;
    const validate = event => {
        console.log('input');
        const {id, value, name} = event.target;

        switch(id) {
            case "firstName":
                if(value === '' || value.length < 1 || !value.trim().toLowerCase().match(regExName)) {
                    display(name, true);
                    isFirstNameInValid = true;
                } else {
                    display(name, false);
                    isFirstNameInValid = false;
                }
                break;
            case "lastName":
                if(value === '' || value.length < 1 || !value.trim().toLowerCase().match(regExName)) {
                    display(name, true);
                    isLastNameInValid = true;
                } else {
                    display(name, false);
                    isLastNameInValid = false;
                }
                break;
            case "emailId":
                if(value === '' || value.length < 18 ||  !value.trim().toLowerCase().match(regExEmail)) {
                    display(name, true);
                    isEmailInValid = true;
                } else {
                    display(name, false);
                    isEmailInValid = false;
                }
                break;
            case "phoneNumber":
                if(value === '' || value.length != 12 ||  !value.trim().toLowerCase().match(regExPhone)) {
                    display(name, true);
                    isPhoneNumberInValid = true;
                } else {
                    display(name, false);
                    isPhoneNumberInValid = false;
                }
                break;
            case "address1":
                if(value === '' || value.length < 3 || value.length > 25 || !value.trim().toLowerCase().match(regExAdd1)) {
                    display(name, true);
                    isAdd1Valid = true;
                } else {
                    display(name, false);
                    isAdd1Valid = false;
                }
                break;
            case "address2":
                if( value.length > 25 || !value.trim().toLowerCase().match(regExAdd2)) {
                    display(name, true);
                    isAdd2Valid = true;
                } else {
                    display(name, false);
                    isAdd2Valid = false;
                }
                break;
            case "city":
                if( value === '' || value.length < 3 || !value.trim().toLowerCase().match(regExName)) {
                    display(name, true);
                    isCityValid = true;
                } else {
                    display(name, false);
                    isCityValid = false;
                }
                break;
            case "state":
                if( value === '' || value.length < 2 || !value.trim().toLowerCase().match(regExName)) {
                    display(name, true);
                    isStateValid = true;
                } else {
                    display(name, false);
                    isStateValid = false;
                }
                break;
            case "zipcode":
                if(value === '' || value.length != 5 || !value.trim().match(regExZipCode)) {
                    display(name, true);
                    isZipCodeInvalid = true;
                } else {
                    display(name, false);
                    isZipCodeInvalid = false;
                }
                break;
            case "comments":
                if(value === '' || value.length < 4 || value.length > 100 || !value.trim().toLowerCase().match(regExAdd1)) {
                    display(name, true);
                    isTextInvalid = true;
                } else {
                    display(name, false);
                    isTextInvalid = false;
                }
                break;
        }

        if(isFirstNameInValid || isLastNameInValid  || isEmailInValid || isPhoneNumberInValid || isZipCodeInvalid || isTextInvalid  || isAdd1Valid || isAdd2Valid || isCityValid || isStateValid) {
            document.myForm.submit.setAttribute('disabled', true);
            console.log(document.myForm.submit.disabled);
            //console.log(isFirstNameInValid);
            //console.log(isLastNameInValid);
        } else {
            document.myForm.submit.removeAttribute('disabled');
        }
    }

    function submitted(e){
        console.log('submit');
        // To avoid page refresh
       // console.log(e);
        e.preventDefault();
        var checkedBox = document.myForm.checkbox1.checked || document.myForm.checkbox2.checked || document.myForm.checkbox3.checked;
        console.log(checkedBox);
        if(checkedBox == false){
            display("checkbox", true);
            checkedBox = true;
            console.log(checkedBox);
        }else{
            //console.log(checkedBox);
            display("checkbox", false);
            checkedBox = false;
            //onsole.log(checkedBox);
            if(!isFirstNameInValid || !isLastNameInValid || !isEmailInValid || !isPhoneNumberInValid || !isZipCodeInvalid || !isTextInvalid  || !isAdd1Valid || !isAdd2Valid || !isCityValid || !isStateValid ){
                addRecord();
                alert("Data entered successfully");
                //resetForm();
            }
            else{
                alert("Please enter valid details")
            }
        }

        /*e.preventDefault();
        if(!isFirstNameInValid || !isLastNameInValid || !isEmailInValid || !isPhoneNumberInValid || !isZipCodeInvalid || !isTextInvalid  || !isAdd1Valid || !isAdd2Valid || !isCityValid || !isStateValid ){
            alert("Data entered successfully");
        }
        else{
            alert("Please enter valid details")
        }*/
    }

    


    document.myForm.addEventListener('input', validate);
    document.myForm.addEventListener('submit', submitted);
    //document.myForm.addEventListener('submit', submitted);

    
    
}

function onCheckChange(checkRef){
    console.log(checkRef);
    console.log(checkRef.checked);
    document.getElementById(`error_checkbox`).style.display = "none";


}

function onListselection(listRef){

    
    console.log(listRef);
    var listSelected = listRef.value;
    console.log(listSelected);
    if(listSelected != 'coffee'){
        document.getElementById(`coffee`).style.display = "none";
    }
    if(listSelected != 'BlackTea'){
        document.getElementById(`BlackTea`).style.display = "none";
    }
    if(listSelected != 'GreenTea'){
        document.getElementById(`GreenTea`).style.display = "none";
    }
    if(listSelected != 'Lemonade'){
        document.getElementById(`Lemonade`).style.display = "none";
    }
    if(listSelected != 'Water'){
        document.getElementById(`Water`).style.display = "none";
    }
    if(listSelected){
        document.getElementById(`${listSelected}`).style.display = "block";
    }else{
        document.getElementById(`${listSelected}`).style.display = "none";
    }
    
    
}

function onCheckSelect(listCheckRef){
    console.log(listCheckRef);
    if(listCheckRef.checked){
        document.getElementById(`instruction`).style.display = "block";
        document.myForm.submit.disabled = true;
    }else{
        document.getElementById(`instruction`).style.display = "none";
        if(document.myForm.firstName.value != '' && document.myForm.lastName.value != '' && document.myForm.emailId.value != '' &&  document.myForm.phoneNumber.value != '' && document.myForm.address1.value != '' && document.myForm.city.value != '' && document.myForm.state.value != '' && document.myForm.zipcode.value != '' && document.myForm.comments.value != '' )
            document.myForm.submit.disabled = false;
    }
}



/*function resetForm(){
    //document.getElementById('myForm').reset();
    document.myForm.message.value = "";
}*/


function addRecord(){

    document.getElementById("feedbackTable").style.display = "block";
    //var form = submitRef;
    var radioVal = document.myForm.title.value;
    console.log(radioVal);
    var checkVal ="";
    if(document.myForm.checkbox1.checked){
        checkVal += document.myForm.checkbox1.value+ " "; 
    }
    if(document.myForm.checkbox2.checked){
        checkVal += document.myForm.checkbox2.value+ " "; 
    }
    if(document.myForm.checkbox3.checked){
        checkVal += document.myForm.checkbox3.value+ " "; 
    }
    var listVal = document.myForm.options.value;
    var table = document.getElementById("myTable");
    var tBody = document.getElementsByTagName("tbody")[0];
    var trNode = document.createElement("tr");
    var tdName = document.createElement("td");
    
    tdName.innerHTML = radioVal +" " +document.getElementById("firstName").value + " "+document.getElementById("lastName").value;
    var tdEmail = document.createElement("td");
    tdEmail.innerHTML = document.getElementById("emailId").value ;
    var tdPhone = document.createElement("td");
    tdPhone.innerHTML = document.getElementById("phoneNumber").value ;
    var tdStreet1 = document.createElement("td");
    tdStreet1.innerHTML = document.getElementById("address1").value; 
    var tdStreet2 = document.createElement("td");
    tdStreet2.innerHTML = document.getElementById("address2").value ;
    var tdCity = document.createElement("td");
    tdCity.innerHTML = document.getElementById("city").value ;
    var tdState = document.createElement("td");
    tdState.innerHTML = document.getElementById("state").value ;
    var tdZipcode =  document.createElement("td");
    tdZipcode.innerHTML = document.getElementById("zipcode").value ;
    var tdCheckBox = document.createElement("td");
    tdCheckBox.innerHTML = checkVal ;
    var tdComment = document.createElement("td");
    tdComment.innerHTML = document.getElementById("comments").value ;
    var tdList = document.createElement("td");
    tdList.innerHTML = listVal;
    var counter =0;
    var tdDrink = document.createElement("td");
    var checkOption =  document.getElementsByClassName("check");
    for (var i=0; i<checkOption.length;i++){
        if(checkOption[i].checked){
            tdDrink.innerHTML = checkOption[i].value;
            counter +=1;
            break;
        }
    }
    if(counter == 0){
        tdDrink.innerHTML = '';
    }
    var tdInst = document.createElement("td");
    if(document.getElementById("Inputs").value )
        tdInst.innerHTML = document.getElementById("Inputs").value;
        
    else
        tdInst.innerHTML = "";

    trNode.appendChild(tdName);
    trNode.appendChild(tdEmail);
    trNode.appendChild(tdPhone);
    trNode.appendChild(tdStreet1);
    trNode.appendChild(tdStreet2);
    trNode.appendChild(tdCity);
    trNode.appendChild(tdState);
    trNode.appendChild(tdZipcode);
    trNode.appendChild(tdCheckBox);
    trNode.appendChild(tdComment);
    trNode.appendChild(tdList);
    trNode.appendChild(tdDrink);
    trNode.appendChild(tdInst);
    tBody.appendChild(trNode);
}

