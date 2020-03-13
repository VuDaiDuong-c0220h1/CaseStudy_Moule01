
let i = location.href.toString().substring(location.href.toString().length -1 );
console.log(location.href.toString());

function showInfo (i) {
    document.getElementById("img").innerHTML = idolArray[i].image;
    document.getElementById("info-name").innerHTML = idolArray[i].fullName;
    document.getElementById("info-nickname").innerHTML = idolArray[i].nickName;
    document.getElementById("info-birthday").innerHTML = idolArray[i].birthday;
    document.getElementById("info-measurements").innerHTML = idolArray[i].measurements;
    document.getElementById("info-describe").innerHTML = idolArray[i].describe;
}

showInfo(i);