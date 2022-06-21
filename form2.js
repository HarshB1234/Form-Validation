function validation() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let lnumber = number.length;
    let p1 = document.getElementById("p1").value;
    let p2 = document.getElementById("p2").value;
    let flag = 1;
    if ((name == "") || (/[0-9]/.test(name))) {
        document.getElementById("nameerror").innerHTML = "Name invalid.";
        flag = 0;
        return;
    }
    else {
        document.getElementById("nameerror").innerHTML = "";
    }
    if (!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email))) {
        document.getElementById("emailerror").innerText = "Email invalid.";
        flag = 0;
        return;
    }
    else {
        document.getElementById("emailerror").innerText = "";
    }
    if (lnumber < 10 || lnumber > 10 || (/[A-za-z]/.test(number))) {
        document.getElementById("numbererror").innerText = "Number invalid.";
        flag = 0;
        return;
    }
    else {
        document.getElementById("numbererror").innerText = "";
    }
    if ((p1.length) < 8) {
        document.getElementById("passerror").innerText = "Password invalid.";
        flag = 0;
        return;
    }
    else {
        document.getElementById("passerror").innerText = "";
    }
    if ((p2.length) < 8 || (p1 != p2)) {
        document.getElementById("repasserror").innerText = "Repassword invalid.";
        flag = 0;
        return;
    }
    else {
        document.getElementById("repasserror").innerText = "";
    }
    if (flag == 1) {
        let data = JSON.parse(localStorage.getItem("form")) ? JSON.parse(localStorage.getItem("form")) : [];
        let form = {Name: name, Email: email, Number: number, Password: p1, Repassword: p2}
        data.push(form);
        localStorage.setItem(form, JSON.stringify(data));
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("number").value = "";
        document.getElementById("p1").value = "";
        document.getElementById("p2").value = "";
    }
}