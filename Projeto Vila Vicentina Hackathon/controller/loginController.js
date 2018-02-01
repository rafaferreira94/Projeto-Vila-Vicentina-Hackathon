app.controller("loginController", ["$scope", "$http", function ($scope, $http) {
  $scope.recuperar = function (){
    var email = "";
    if ($scope.email == null || $scope.email == "") {
        alert("Digite o nome do usuário!");
        return;
    } else {
        email = $scope.email;
    }
    var data =
        {
          "idUsuario": "",
          "nome": "",
          "sobrenome": "",
          "matricula": "",
          "email": email,
          "usuario": "" ,
          "senha": "" ,
          "ativo": "",
          "administrador": ""
        };
        console.log(data);

    var requisicao = {
        method: 'POST',
        url: 'http://localhost/VilaVicentinaProvider/api/usuario/recuperacao',
        headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"},
        data: data
    };

    $http(requisicao).then(function successCallback(response) {
        var data = response.data;
        console.log(data);
        if (!data.toString().match("Nao Encontrado")) {
            localStorage.setItem("usuarioLogado", JSON.stringify(data));
            window.location.replace("index.html");
        } else {
            alert("Usuário ou senha incorretos.");
        }

    }, function errorCallback(response) {
        alert("Ocorreu um erro ao realizar a requisição");
        console.log(response);
    });
  };
    $scope.logar = function () {
        console.log("oi");
        var usuario = "";
        var senha = "";

        if ($scope.usuario.login == null || $scope.usuario.login == "") {
            alert("Digite o nome do usuário!");
            return;
        } else {
            usuario = $scope.usuario.login;
        }
        if ($scope.usuario.senha == null || $scope.usuario.senha == "") {
            alert("Digite a senha do usuário!");
            return;
        } else {
            senha = $scope.usuario.senha;
        }
        var data =
            {
              "idUsuario": "",
              "nome": "",
              "sobrenome": "",
              "matricula": "",
              "email": "",
              "usuario": usuario,
              "senha": senha,
              "ativo": "",
              "administrador": ""
            };

            console.log(data);

        var requisicao = {
            method: 'POST',
            url: 'http://localhost/VilaVicentinaProvider/api/usuario/login',
            headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"},
            data: data
        };

        $http(requisicao).then(function successCallback(response) {
            var data = response.data;
            console.log(data);
            if (!data.toString().match("Nao Encontrado")) {
                localStorage.setItem("usuarioLogado", JSON.stringify(data));
                window.location.replace("index.html");
            } else {
                alert("Usuário ou senha incorretos.");
            }

        }, function errorCallback(response) {
            alert("Ocorreu um erro ao realizar a requisição");
            console.log(response);
        });
    };
}]);
