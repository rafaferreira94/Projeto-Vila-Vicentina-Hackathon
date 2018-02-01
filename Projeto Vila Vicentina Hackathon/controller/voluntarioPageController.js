app.controller("voluntarioController", ["$scope", "$http", function ($scope, $http) {
    $scope.listVoluntarios = {};

    var url = "http://localhost/VilaVicentinaProvider/api/voluntario";
    $http({
        method: 'GET',
        url: url
    }).then(function successCallback(response) {
        var data = response.data;
        console.log(data);
        $scope.listVoluntarios = data;

    }, function errorCallback(response) {
        alert("Ocorreu um erro ao carregar a página");
        console.log(response);
    });

    $scope.openWindow = function (voluntarios) {
        $scope.voluntario = {};
        console.log(voluntarios);
        $('#modalVoluntario').modal()
        $scope.voluntario.idVoluntario = voluntarios.ID_VOLUNTARIOS;
        $scope.voluntario.nome = voluntarios.NOME_VOLUNTARIO;
        $scope.voluntario.atividade = voluntarios.ATIVIDADE_VOLUNTARIO;
        $scope.voluntario.email = voluntarios.EMAIL;
        $scope.voluntario.telefone = voluntarios.TELEFONE_VOLUNTARIOS;
        $scope.voluntario.disponibilidade = voluntarios.DISPONIBILIDADE;
    };

    $scope.incluir = function () {
        $scope.voluntario = {};
        $('#modalVoluntario').modal()
        $scope.voluntario.idVoluntario = null;
        $scope.voluntario.nome = "";
        $scope.voluntario.atividade = "";
        $scope.voluntario.email = "";
        $scope.voluntario.telefone = "";
        $scope.voluntario.disponibilidade = "";
    };

    $scope.delete = function (voluntario) {
        var data =
            {
              "idVoluntarios": voluntario.ID_VOLUNTARIOS,
              "nomeVoluntarios": voluntario.NOME_VOLUNTARIO,
              "atividadeVoluntarios": voluntario.ATIVIDADE_VOLUNTARIO,
              "email": voluntario.EMAIL,
              "telefoneVoluntarios": voluntario.TELEFONE_VOLUNTARIOS,
              "disponibilidade": voluntario.DISPONIBILIDADE
            };


        var requisicao = {
            method: 'DELETE',
            url: 'http://localhost/VilaVicentinaProvider/api/voluntario',
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

    $scope.salvarVoluntario = function (voluntario) {
        var metodo = "";

         var data =
            {
              "idVoluntarios": voluntario.idVoluntario,
              "nomeVoluntarios": voluntario.nome,
              "atividadeVoluntarios": voluntario.atividade,
              "email": voluntario.email,
              "telefoneVoluntarios": voluntario.telefone,
              "disponibilidade": voluntario.disponibilidade
            };

        console.log(data);

        if ($scope.voluntario.idVoluntario == null) {
            metodo = 'POST';
           var data =
            {
              "idVoluntarios": voluntario.idVoluntario,
              "nomeVoluntarios": voluntario.nome,
              "atividadeVoluntarios": voluntario.atividade,
              "email": voluntario.email,
              "telefoneVoluntarios": voluntario.telefone,
              "disponibilidade": voluntario.disponibilidade
            };
        } else {
            metodo = 'PUT';
        }

        var requisicao = {
            method: metodo,
            url: 'http://localhost/VilaVicentinaProvider/api/voluntario',
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
