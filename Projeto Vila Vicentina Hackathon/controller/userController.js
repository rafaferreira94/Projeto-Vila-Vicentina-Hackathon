app.controller("userController", ["$scope", "$http", function ($scope, $http) {
    $scope.listUsuarios = [];

    var url = "http://localhost/VilaVicentinaProvider/api/usuario";
    $http({
        method: 'GET',
        url: url
    }).then(function successCallback(response) {
        var data = response.data;
        console.log(data);
        $scope.listUsuarios = data;

    }, function errorCallback(response) {
        alert("Ocorreu um erro ao carregar a página");
        console.log(response);
    });

    $scope.openWindow = function (usuarios) {
        $scope.usuario = {};
        $('#modalUsuario').modal()
        $scope.nomeUsuario = usuarios.NOME;
        $scope.usuario.idUsuario = usuarios.ID_USUARIO;
        $scope.usuario.nome = usuarios.NOME;
        $scope.usuario.sobrenome = usuarios.SOBRENOME;
        $scope.usuario.email = usuarios.EMAIL;
        $scope.usuario.id = usuarios.MATRICULA;
        $scope.usuario.login = usuarios.USUARIO;
        $scope.usuario.senha = usuarios.SENHA;
        $scope.usuario.ativo = usuarios.ATIVO;
        $scope.usuario.administrador = usuarios.ADMINISTRADOR;
    };

    $scope.incluir = function () {
        $scope.usuario = {};
        $('#modalUsuario').modal()
        $scope.nomeUsuario = null;
        $scope.usuario.nome = "";
        $scope.usuario.sobrenome = "";
        $scope.usuario.email = "";
        $scope.usuario.id = "";
        $scope.usuario.login = "";
        $scope.usuario.senha = "";
    };

    $scope.delete = function (usuario) {
        var data =
            {
                "idUsuario": usuario.ID_USUARIO,
                "nome": usuario.NOME,
                "sobrenome": usuario.SOBRENOME,
                "matricula": usuario.MATRICULA,
                "email": usuario.EMAIL,
                "usuario": usuario.USUARIO,
                "senha": usuario.SENHA,
                "ativo": usuario.ATIVO,
                "administrador": usuario.ADMINISTRADOR
            };

        var requisicao = {
            method: 'DELETE',
            url: 'http://localhost/VilaVicentinaProvider/api/usuario',
            headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"},
            data: data
        };

        $http(requisicao).then(function successCallback(response) {
            var data = response.data;
            if (data == "true") {
                alert("Apagado com sucesso!");
            } else {
                alert("Erro ao apagar!");
            }

        }, function errorCallback(response) {
            alert("Ocorreu um erro ao realizar a requisição");
            console.log(response);
        });
    }

    $scope.salvarUsuario = function (usuario) {
        var metodo = "";

         var data =
            {
                "idUsuario": usuario.idUsuario,
                "nome": usuario.nome,
                "sobrenome": usuario.sobrenome,
                "matricula": usuario.id,
                "email": usuario.email,
                "usuario": usuario.login,
                "senha": usuario.senha,
                "ativo": usuario.ativo,
                "administrador": "1"
            };

        console.log(data);

        if ($scope.nomeUsuario == null) {
            metodo = 'POST';
              var data =
            {
                "idUsuario": "0",
                "nome": usuario.nome,
                "sobrenome": usuario.sobrenome,
                "matricula": usuario.id,
                "email": usuario.email,
                "usuario": usuario.login,
                "senha": usuario.senha,
                "ativo": usuario.ativo,
                "administrador": "1"
            };
        } else {
            metodo = 'PUT';
        }

        var requisicao = {
            method: metodo,
            url: 'http://localhost/VilaVicentinaProvider/api/usuario',
            headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"},
            data: data
        };

        $http(requisicao).then(function successCallback(response) {
            var data = response.data;
            console.log(data);
            if (data == "true") {
                alert("Atualizado com sucesso!");
            } else {
                alert("Erro ao alterar!");
            }

        }, function errorCallback(response) {
            alert("Ocorreu um erro ao realizar a requisição");
            console.log(response);
        });
    }
}]);
