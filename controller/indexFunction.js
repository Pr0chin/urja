/* Client Side Programming
    By :Sachin Maharjan
    White Hat Degital
*/
function sendEmailAndBdownlaod(fileUrl, fileName) {
    //Getting value form from jQuery..
    debugger;
    var name = $('#name').val();
    var lname = $('#lname').val();
    var email = $('#email').val();
    var contact = $('#contact').val();
    if (name == "" || lname == "" || email == "" || contact == "") {
        this.validateForm(fileUrl, fileName, name, lname, email, contact);
    } else {
        var re = /^[0-9]*$/;
        if (!re.test(contact)) {
            document.getElementById('status').innerHTML = "Contact Number should Be In Numbers";
            return false;
        }
        re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            document.getElementById('status').innerHTML = "Email format invalid";
            return false;
        }
        this.downloadBrochure(fileUrl, fileName);
        setTimeout(sendEmailAndBdownlaod, 3000);
        window.open('view/thankyou.html', '_blank');
    }
    console.log("My name is ", name + "" + lname + "and my email address is" + "" + email + "" + "and my contact is" + contact);
}

function validateForm(name, lname, email, contact) {
    var re;
    if (name == "" && lname == "" && email == "" && contact == "") {
        document.getElementById('status').innerHTML = "Please Fill The Form Properly";
        return false;
    } else {
        if (name == "") {
            document.getElementById('status').innerHTML = "Enter Your Name";
            return false;
        }

        if (lname == "") {
            document.getElementById('status').innerHTML = "Enter Your Last Name";
            return false;
        }

        if (email == "") {
            document.getElementById('status').innerHTML = "Enter Your Email";
            return false;
        } else {
            re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(email)) {
                document.getElementById('status').innerHTML = "Email format invalid";
                return false;
            }
        }

        if (contact == "") {
            document.getElementById('status').innerHTML = "Enter Your Contact";
            return false;
        } else {
            re = /^[0-9]*$/;
            if (!re.test(contact)) {
                document.getElementById('status').innerHTML = "Contact Number should Be In Numbers";
                return false;
            }
        }
    }

}

function downloadBrochure(fileUrl, fileName) {
    debugger;
    var save = document.createElement('a');
    save.href = fileUrl;
    save.download = fileName;
    save.target = '_blank';
    document.body.appendChild(save);
    save.click();
    document.body.removeChild(save);
}

function privacy() {
    window.open('view/privacy.html', '_blank');
}

function privacyThankyou() {
    window.open('privacy.html', '_blank');
}

function submitcheck(element) {
    var name = $('#name').val();
    var lname = $('#lname').val();
    var email = $('#email').val();
    var contact = $('#contact').val();

    if (name == "" || lname == "" || email == "" || contact == "") {
        return false;
    } else {
        var re = /^[0-9]*$/;
        if (!re.test(contact)) {
            document.getElementById('status').innerHTML = "Contact Number should Be In Numbers";
            return false;
        }
        re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            document.getElementById('status').innerHTML = "Email format invalid";
            return false;
        }
        this.downloadBrochure(fileUrl, fileName);
        setTimeout(sendEmailAndBdownlaod, 3000);
        window.open('view/thankyou.html', '_blank');
        return true;
    }

}