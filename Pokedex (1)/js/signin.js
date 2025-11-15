
window.onload = init;

function init(){
    document.querySelector('.btn-secondary').addEventListener('click',function() {
        window.location.href = "login.html"
    });
    document.querySelector('.btn-primary').addEventListener("click", signin);
}

function signin(){
    var mail = document.getElementById('input-mail').value;
    var pass = document.getElementById('input-password').value;
    var name = document.getElementById('input-name').value;

    console.log(mail,pass);

    axios({
        method: 'post',
        url: 'http://localhost:3000/user/signin',
        data: {
            user_mail: mail,
            user_password: pass,
            user_name: name
        }
    }).then(function(res){
        console.lof(res);
        alert("REGISTRO EXITOSO");
        window.location.href="login.html"
    }).catch(function(err){
        console.log(err);
    })
}
