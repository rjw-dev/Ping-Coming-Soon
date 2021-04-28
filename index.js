var x = document.getElementById('input');

var y = document.getElementById('button');

var z = document.getElementById('error');


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

y.addEventListener('click', () => {
    if (validateEmail(x.value)) {
    } else {
        x.style.border="2px solid hsl(354, 100%, 66%)"
        z.style.display="flex"
    }
});
