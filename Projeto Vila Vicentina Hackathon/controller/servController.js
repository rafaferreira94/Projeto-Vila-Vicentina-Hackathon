app.controller("servController", ["$scope",'textAngularManager', "$http", function ($scope, textAngularManager, $http) {
    $scope.servhtml='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.';
    $scope.edit=false;
    $scope.servicos = {};

    var url = "http://localhost/VilaVicentinaProvider/api/servico";
    $http({
        method: 'GET',
        url: url
    }).then(function successCallback(response) {
        var data = response.data;  
     $scope.servicos= data;
    }, function errorCallback(response) {
        alert("Ocorreu um erro ao carregar a página");
        console.log(response);
    });

    $scope.incluir = function () {
        $scope.usuario = {};
        $('#modalUsuario').modal()
        $scope.serv.IMG = null;
        $scope.serv.NOME="";
        $scope.serv.DESC="";
        $scope.serv.PRECO="";
    };

    $scope.salvarServico = function (servico) {
        var metodo = "";

         var data =
            {
                "img": usuario.idUsuario,
                "nome": usuario.nome,
                "descricao": usuario.sobrenome,
                "preco": usuario.id
            };

        console.log(data);



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
