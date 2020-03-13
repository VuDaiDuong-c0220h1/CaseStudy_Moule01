let Idol = function (name, nickname, birthday, measurements) {
    this.fullName = name;
    this.nickName = nickname;
    this.birthday = birthday;
    this.measurements = measurements;

    this.getFullName = function () {
        return this.fullName;
    };
    this.getNickName = function () {
        return this.nickName;
    };
    this.getBirthday = function () {
        return this.birthday;
    };
    this.getMeasurements = function () {
        return this.measurements;
    };
};

let idol01 = new Idol("Trịnh Ngọc Trinh", "Nữ hoàng nội y", "27/09/1989", "84 - 58 - 93");
idol01.describe = "Không có tiền thì cạp đất mà ăn.";
idol01.image = "<img src=\"images/ngoctrinh.jpg\" height=\"500\" width=\"500\"/>";
let idol02 = new Idol("Trần Thanh Tâm", "Bông Dẹo Cô Cô", "??/??/2000", "90 - 60 - 90");
idol02.describe = "Trứng rán cần mỡ, bắp cần bơ. Yêu không cần cớ, cần cậu cơ!";
idol02.image = "<img src=\"images/thanhtam.jpg\" height=\"500\" width=\"500\"/>";
let idol03 = new Idol("Lê Thy Ngọc", "Misthy", "12/11/1995", "90 - 60 - 90");
idol03.describe = "Sân si cùng Misthy.";
idol03.image = "<img src=\"images/Misthy-la-ai001-1.jpg\" height=\"500\" width=\"500\"/>";
let idol04 = new Idol("Lalisa Manoban", "Lisa", "27/03/1997", "90 - 60 - 90");
idol04.describe = "BlackPink";
idol04.image = "<img src=\"images/lisa.jpg\" height=\"500\" width=\"500\"/>";

let storageKey = "idolArray";
let dataString = localStorage.getItem(storageKey);
let idolArray = [idol01, idol02, idol03, idol04];
if (dataString) {
    idolArray = JSON.parse(dataString);
}
localStorage.setItem(storageKey, JSON.stringify(idolArray));

function showListIdol() {
    let html = "";
    for (let i = 0; i < idolArray.length; i++) {
        html += "<tr>";
        html += "<td>" + (i + 1) + "</td>";
        html += "<td id=\"name" + (i) + "\">" + idolArray[i].fullName + "</td>";
        html += "<td id=\"nickname" + (i) + "\">" + idolArray[i].nickName + "</td>";
        html += "<td id=\"birthday" + (i) + "\">" + idolArray[i].birthday + "</td>";
        html += "<td id=\"measurements" + (i) + "\">" + idolArray[i].measurements + "</td>";
        html += "<td id=\"describe" + (i) + "\">" + idolArray[i].describe + "</td>";
        html += "<td><button class=\"btn\" id=\"edit" + i + "\" onclick=\"editIdol(this.id.substring(this.id.length -1 ))\"> Chỉnh sửa thông tin </button></td>";
        html += "<td><button class=\"btn\" id=\"update" + i + "\" onclick=\"updateIdol(this.id.substring(this.id.length -1 ))\"> Cập nhật </button></td>";
        html += "<td><button class=\"btn\" id=\"delete" + i + "\" onclick=\"deleteIdol(this.id.substring(this.id.length -1 ))\"> Sa thải </button></td>";
        html += "<td><button class=\"btn\" id=\"info" + i + "\" onclick=\"changeHTML(this.id.substring(this.id.length -1 ))\"> Thông tin </button></td>";
        html += "</tr>";
    }
    document.getElementById("tableBody").innerHTML = html;
}

showListIdol();

function deleteIdol(i) {
    if (confirm("Bạn chắc chắn muốn sa thải Idol này chứ ?")) {
        idolArray.splice(i, 1);
    }
    showListIdol();
}

function editIdol(i) {
    document.getElementById("name" + i).innerHTML = "<td><input type='text' id=\"changeName" + i + "\" value=\"" + idolArray[i].fullName + "\"/></td>";
    document.getElementById("nickname" + i).innerHTML = "<td><input type='text' id=\"changeNickName" + i + "\" value=\"" + idolArray[i].nickName + "\"/></td>";
    document.getElementById("birthday" + i).innerHTML = "<td><input type='text' id=\"changeBirthday" + i + "\" value=\"" + idolArray[i].birthday + "\"/></td>";
    document.getElementById("measurements" + i).innerHTML = "<td><input type='text' id=\"changeMeasurements" + i + "\" value=\"" + idolArray[i].measurements + "\"/></td>";
    document.getElementById("describe" + i).innerHTML = "<td><input type='text' id=\"changeDescribe" + i + "\" value=\"" + idolArray[i].describe + "\"/></td>";
}

function changeIdol(i) {
    let changename = document.getElementById("changeName" + i);
    let changenickname = document.getElementById("changeNickName" + i);
    let changebirthday = document.getElementById("changeBirthday" + i);
    let changemeasurements = document.getElementById("changeMeasurements" + i);
    let changedescribe = document.getElementById("changeDescribe" + i);

    idolArray[i].fullName = changename.value;
    idolArray[i].nickName = changenickname.value;
    idolArray[i].birthday = changebirthday.value;
    idolArray[i].measurements = changemeasurements.value;
    idolArray[i].describe = changedescribe.value;

    changename.parentNode.innerHTML = "<td id=\"name" + i + "\">" + changename.value + "</td>";
    changenickname.parentNode.innerHTML = "<td id=\"nickname" + i + "\">" + changenickname.value + "</td>";
    changebirthday.parentNode.innerHTML = "<td id=\"birthday" + i + "\">" + changebirthday.value + "</td>";
    changemeasurements.parentNode.innerHTML = "<td id=\"measurements" + i + "\">" + changemeasurements.value + "</td>";
    changedescribe.parentNode.innerHTML = "<td id=\"describe" + i + "\">" + changedescribe.value + "</td>";
}

function updateIdol(i) {
    if (confirm("Thông tin sau khi chỉnh sửa sẽ biến mất, bạn có muốn lưu ?")) {
        changeIdol(i);
    } else {
        showListIdol();
    }
}

function addIdol() {
    if (confirm("Bạn chắc chắn muốn tuyển Idol này chứ")) {
        let addname = document.getElementById("add-name").value;
        let addnickname = document.getElementById("add-nickname").value;
        let addbirthday = document.getElementById("add-birthday").value;
        let addmeasurements = document.getElementById("add-measurements").value;
        let adddescribe = document.getElementById("add-describe").value;
        let idol = new Idol(addname, addnickname, addbirthday, addmeasurements);
        idol.describe = adddescribe;
        idolArray.push(idol);
        localStorage.setItem(storageKey, JSON.stringify(idolArray));
        showListIdol();
        resetAddIdol();
    }
}

function resetAddIdol() {
    document.getElementById("add-name").value ="";
    document.getElementById("add-nickname").value = "";
    document.getElementById("add-birthday").value = "";
    document.getElementById("add-measurements").value = "";
    document.getElementById("add-describe").value = "";
}

function searchIdol() {
    let html = "";
    let searchInput = document.getElementById("search").value;
    let search = searchInput.toLowerCase();
    for (let i = 0; i < idolArray.length; i++) {
        let name = idolArray[i].fullName.toLowerCase();
        if (name.includes(search)) {
            html += "<tr>";
            html += "<td>" + (i + 1) + "</td>";
            html += "<td id=\"name" + (i) + "\">" + idolArray[i].fullName + "</td>";
            html += "<td id=\"nickname" + (i) + "\">" + idolArray[i].nickName + "</td>";
            html += "<td id=\"birthday" + (i) + "\">" + idolArray[i].birthday + "</td>";
            html += "<td id=\"measurements" + (i) + "\">" + idolArray[i].measurements + "</td>";
            html += "<td id=\"describe" + (i) + "\">" + idolArray[i].describe + "</td>";
            html += "<td><button class=\"btn\" id=\"edit" + i +  "\" onclick=\"editIdol(this.id.substring(this.id.length -1 ))\"> Chỉnh sửa thông tin </button></td>";
            html += "<td><button class=\"btn\" id=\"update" + i + "\" onclick=\"updateIdol(this.id.substring(this.id.length -1 ))\"> Cập nhật </button></td>";
            html += "<td><button class=\"btn\" id=\"delete" + i + "\" onclick=\"deleteIdol(this.id.substring(this.id.length -1 ))\"> Sa thải </button></td>";
            html += "<td><button class=\"btn\" id=\"info" + i + "\" onclick=\"changeHTML(this.id.substring(this.id.length -1 ))\"> Thông tin </button></td>";
            html += "</tr>";
            document.getElementById("tableBody").innerHTML = html;
        }
    }
}


function changeHTML(i) {
    window.location.href="info-idol.html/?param=" + i
}

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
ctx.font = "50px Verdana";
let gradient = ctx.createLinearGradient(0, 0, c.width, 0);
gradient.addColorStop("0", "magenta");
gradient.addColorStop("0.5", "blue");
gradient.addColorStop("1.0", "red");
ctx.fillStyle = gradient;
ctx.fillText("Danh sách Idol", 0, 80);

let draw = document.getElementById("myCanvas-02");
let drawAddIdol= draw.getContext("2d");
drawAddIdol.font = "50px Verdana";
let gradientAdd = ctx.createLinearGradient(0, 0, c.width, 0);
gradientAdd.addColorStop("0", "magenta");
gradientAdd.addColorStop("0.5", "blue");
gradientAdd.addColorStop("1.0", "red");
drawAddIdol.fillStyle = gradient;
drawAddIdol.fillText("Tuyển thêm Idol", 0, 80);