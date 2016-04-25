function ValidationEvent() {
    var name = document.myform.Name;
    var lastname = document.myform.LastName;
    var pno = document.myform.PNumber;
    var email = document.myform.Email;
    var comment = document.myform.Comment;
    var val = /^[A-Za-z\s]+$/;
    var valno= /^[0-9\s]+$/;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;


    if (name.value != '' ){
            if(name.value.match(val)){
                    if (name.value.length>5) {
                            if(lastname.value!=''){
                                    if( document.getElementById("male").checked || document.getElementById("female").checked ) {
                                            if(email.value!='') {
                                                    if(email.value.match(emailReg)){
                                                            if(pno.value!=''){
                                                                     if(pno.value.match(valno)){
                                                                                if(pno.value.length==10){
                                                                                                if( document.getElementById("Aerial").checked || document.getElementById("Concept").checked || document.getElementById("Fashion").checked || document.getElementById("Wild").checked) {
                                                                                                     if(comment.value!=''){
                                                                                                         alert("Registered");
                                                                                                         location.reload(true);
                                                                                                         return true;
                                                                                                        }
                                                                                                        else{
                                                                                                                alert("Provide Experience which u have");
                                                                                                                comment.focus();
                                                                                                                return false;
                                                                                                            }
                                                                                                    }
                                                                                                     else{
                                                                                                        alert("Select the Areas of Interests");
                                                                                                        return false;
                                                                                                    }
                                                                                               }
                                                                                    else{
                                                                                            alert("The phone numbers must be contain 10 numbers");
                                                                                            pno.focus();
                                                                                            return false;
                                                                                        }
                                                                         }
                                                                            else{
                                                                                alert("Please enter Numbers Only");
                                                                                pno.focus();
                                                                                return false;
                                                                            }
                                                                }
                                                              else{
                                                                    alert("Please enter the Number")
                                                                    pno.focus();
                                                                    return false;
                                                                }
                                                    }
                                                    else{
                                                            alert ("Please enter the  Valid Email Address");
                                                            email.focus();
                                                            return false;
                                                        }
                                            }
                                            else{
                                                    alert ("Please enter the Email Address");
                                                    email.focus();
                                                    return false;
                                                }
                                    }
                                    else{
                                        alert ("Please Select Gender.....!");
                                        return false;
                                     }
                                 }
                            else{
                                    alert ("Please enter the LastName ");
                                    lastname.focus();
                                    return false;
                            }
                     }
                    else{
                            alert ("The User Name must be contain more than 5 characters!");
                            name.focus();
                            return false;
                          }
            }
            else{
                    alert("Please enter characters only");
                    name.focus();
                    return false;
                }
    }
     else{
                alert ("Please enter the Name ");
                name.focus();
                return false;
            }
    }
