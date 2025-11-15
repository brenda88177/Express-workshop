
window.onload = init;

function init(){
    if(localStorage("token")){
    document.querySelector('.btn-secondary').addEventListener('click',function() {
        window.location.href = "signin.html"
    });
    document.querySelector('.btn-primary').addEventListener("click", login);
    }else{
        window.location.href ="pokedex.html";
    }
}

function signin(){
    var mail = document.getElementById('input-mail').value;
    var pass = document.getElementById('input-password').value;
    var name = document.getElementById('input-name').value;

    axios({
        method: 'post',
        url: 'http://localhost:3000/user/signin',
        data: {
            user_mail: mail,
            user_password: pass,
            user_name: name
        }
    }).then(function(res){
        if(res.data.code ===200){
            localStorage.setItem("token", res.data.message);
            window.location.href="pokedex.html";
        }else{
            alert("USUARIO Y/O INCORRECTOS");
        }
    }).catch(function(err){
        console.log(err);
    })
}
