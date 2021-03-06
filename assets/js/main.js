var text = document.querySelector('.quote h3');
var myData;
var postData = window.localStorage.getItem("save");
var reset = text.innerHTML;
// if no data
if (postData == null || postData === '') {
    myData = text.innerHTML;
    // store default value
    window.localStorage.setItem("save", myData);
    // make it placeholder style
    text.classList.remove('changed');
} else {
    // if there is a value post it
    text.innerHTML = postData;
    // make dark text
    text.classList.add('changed');
}

function saveChanges() {
    var paragraph = document.getElementById("message");
    var mess = document.createTextNode("Success!");
    paragraph.appendChild(mess);

    myData = text.innerHTML;
    window.localStorage.setItem("save", myData);
    text.classList.add('changed');
    setTimeout(function () {
        paragraph.removeChild(mess);
    }, 2000);
}

const imgUrl = localStorage.getItem("recent-image");
if (imgUrl) {
    document.querySelector('#previewImage').setAttribute('src', imgUrl);
}
document.querySelector("#fileImage").addEventListener('change', function () {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        localStorage.setItem("recent-image", reader.result);
    });
    reader.readAsDataURL(this.files[0]);

    var paragraphUpload = document.getElementById("messageUpload");
    var messUpload = document.createTextNode("Success!");
    paragraphUpload.appendChild(messUpload);
    setTimeout(function () {
        paragraphUpload.removeChild(messUpload);
    }, 2000);
});

function clearStorage() {
    text.classList.remove('changed');
    window.localStorage.clear("save");
    var paragraphUpload = document.getElementById("messageReset");
    var messReset = document.createTextNode("Reset Success!");
    paragraphUpload.appendChild(messReset);
    text.innerHTML = reset;
    setTimeout(function () {
        paragraphUpload.removeChild(messReset);
    }, 2000);
}

    var username = sessionStorage.getItem("key");
    var password = sessionStorage.getItem("key");
    if (username === null && password === null) {
        document.getElementById('loginBlock').style.display = 'block';
        document.getElementById('admin').style.display = 'none';
    } else {
        document.getElementById('loginBlock').style.display = 'none';
        document.getElementById('admin').style.display = 'block';
    }
 
function check(form) {
    if (form.username.value === "admin" && form.password.value === "123") {
        sessionStorage.setItem("key", "value");
        window.location.replace("./");
    } else {
        alert("Please enter username and password!")
        form.reset()
    }
}

function checkBtn(button) {
    sessionStorage.removeItem("key");
    document.location.href = "../";
}

function addClass() {
    var e = window.scrollY;
    document.getElementById("main") && checkLinks(e), window.innerWidth < 800 ? nconst = 2 : nconst = 1, document.getElementById("header").classList.add("static"), e > 64 / nconst ? document.getElementById("header").classList.add("static") : document.getElementById("header").classList.remove("static")
}

function isEmail(e) {
    return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)
}

function focusIn(e) {
    e.removeAttribute("placeholder")
}

function focusOut(e, t) {
    var n = e.value, a = Boolean;
    return (a = "E-mail" == t ? !!isEmail(n) : !("" == n || n.length > 500)) ? (e.classList.remove("red_border"), e.removeAttribute("placeholder"), e.classList.add("active_border")) : (e.classList.remove("active_border"), e.classList.add("red_border"), e.setAttribute("placeholder", t)), a
}

function submitForm(e) {
    focusOut(document.getElementById("name"), "Name") && focusOut(document.getElementById("email"), "E-mail") && focusOut(document.getElementById("message"), "Message") ? (submitFormAjax(), e.preventDefault()) : (focusOut(document.getElementById("name"), "Name"), focusOut(document.getElementById("email"), "E-mail"), focusOut(document.getElementById("message"), "Message"), e.preventDefault())
}

function submitFormAjax() {
    let e = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    e.onreadystatechange = function () {
        4 === this.readyState && 200 === this.status && "OK" == this.responseText && (document.getElementById("delivery").style.display = "block", document.getElementById("form").style.display = "none")
    };
    let t = document.getElementById("name").value, n = document.getElementById("email").value,
        a = document.getElementById("message").value;
    e.open("GET", "submit.php?name=" + t + "&email=" + n + "&message=" + a, !0), e.send()
}

function doScrolling(e, t) {
    e = document.getElementById(e).offsetTop - 127;
    var n, a = window.pageYOffset, o = e - a;
    window.requestAnimationFrame(function e(t) {
        n || (n = t);
        var s = t - n, i = Math.min(s / 500, 1);
        window.scrollTo(0, a + o * i), s < 500 && window.requestAnimationFrame(e)
    })
}

function makeLinkActive(e, t) {
    var n = document.getElementById(e).offsetTop - 128, a = n + document.getElementById(e).offsetHeight, o = t + 128,
        s = document.querySelectorAll(".menu li a");
    o > n && o < a && ([].forEach.call(s, function (e) {
        e.classList.remove("active")
    }),
        document.getElementById(e + "_link").classList.add("active"))
}

function checkLinks(e) {
    makeLinkActive("about", e), makeLinkActive("fluxcortex", e), makeLinkActive("fluxneat", e), makeLinkActive("riflecore", e), makeLinkActive("jobs", e), makeLinkActive("contacts", e)
}

document.addEventListener("gesturestart", function (e) {
    e.preventDefault()
}), document.addEventListener("scroll", addClass);
