app.controller("voluntarioController", ["$scope",'textAngularManager', "$http", function ($scope, textAngularManager, $http) {
    $scope.editCont=false;

     $scope.editInfo=false;
    $scope.infohtml="Texto de informações";


	
    $scope.voluntarioClick= function(){
  	var data =
      {
        "idVoluntarios": "",
        "nomeVoluntarios": $scope.nome,
        "atividadeVoluntarios": $scope.atividade,
        "email": $scope.email,
        "disponibilidade": $scope.disponibilidade,
        "telefoneVoluntarios": $scope.telefone

      };
      console.log(data);

  	  var requisicao = {
      method: 'POST',
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