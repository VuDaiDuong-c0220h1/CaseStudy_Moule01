let Account = function (username, password, secretnumber) {
    this.username = username;
    this.password = password;
    this.secretnumber = secretnumber;
};
let admin = new Account("admin", "123456", "01");
let storageKey = "accountArray";
let dataString = localStorage.getItem(storageKey);
let accountArray;
if (dataString) {
    accountArray = JSON.parse(dataString);
} else {
    accountArray = [admin];
}

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    for (let i = 0; i < accountArray.length; i++) {
        if (user == accountArray[i].username) {
            if (pass == "") {
                alert("Mật khẩu không được để trống.");
                break;
            }
            if (pass == accountArray[i].password) {
                alert("Đăng nhập thành công");
                window.location = "main.html";
                break;
            } else {
                alert("Bạn đã nhập sai mật khẩu");
                break;
            }
        }
        if (user == "" && pass == "") {
            alert("Tên tài khoản và mật khẩu không được để trống.");
            break;
        }
        if (user == "") {
            alert("Tên tài khoản không được để trống.");
            break;
        }
        if (pass == "") {
            alert("Mật khẩu không được để trống.");
            break;
        }
        if (i == accountArray.length) {
            alert("Bạn chưa đăng ký hoặc tên tài khoản sai.");
            break;
        }
    }
}


function apply() {
    let adduser = document.getElementById("add-username").value;
    let addpassword = document.getElementById("add-password").value;
    let confirm = document.getElementById("confirm-password").value;
    let secret = document.getElementById("secret-number").value;
    let user = new Account(adduser, addpassword, secret);
    let checkUser = true;
    for (let i = 0; i < accountArray.length; i++) {
        if (adduser == accountArray[i].username) {
            checkUser = false;
            alert("Tài khoản đã có người sử dụng");
            break;
        }
    }
    if (adduser == "" || addpassword == "" || confirm == "" || secret == "") {
        alert("Không được bỏ trống các ô có dấu *");
    } else if (adduser.length <= 4) {
        alert("Username phải nhiều hơn 4 kí tự ");
    } else if (addpassword.length <= 4) {
        alert("Password phải nhiều hơn 4 kí tự ");
    } else if (addpassword !== confirm) {
        alert("Mật khẩu xác nhận không trùng khớp");
    } else if (checkUser == true) {
        alert("Đăng ký thành công");
        accountArray.push(user);
        localStorage.setItem(storageKey, JSON.stringify(accountArray));
        window.location.href = 'index.html';
    }
}

function findPwd() {
    let finduser = document.getElementById("find-username").value;
    let secretnumber = document.getElementById("find-secret-number").value;
    for (let i = 0; i < accountArray.length; i++) {
        if (finduser == accountArray[i].username) {
            if (secretnumber == accountArray[i].secretnumber) {
                alert("Mật khẩu của bạn là: " + accountArray[i].password);
                break;
            } else {
                alert("Secret Number không đúng.");
                break;
            }
        }
        if (i == accountArray.length) {
            alert("Bạn chưa đăng ký hoặc tên tài khoản sai.");
            break;
        }
        if (finduser == "" || secretnumber == "") {
            alert("Không được bỏ trống các ô có dấu * ");
        }
    }
}
