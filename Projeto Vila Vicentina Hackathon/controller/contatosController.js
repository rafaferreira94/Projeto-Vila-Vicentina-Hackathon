app.controller("contatosController", ["$scope",'textAngularManager', "$http", function ($scope, textAngularManager, $http) {
    $scope.editCont=false;

     $scope.editInfo=false;
    $scope.infohtml="Texto de informações";


	var url = "http://localhost/VilaVicentinaProvider/api/contato";
    $http({
        method: 'GET',
        url: url
    }).then(function successCallback(response) {
        var data = response.data;  
        $scope.endereco = data[0].ENDERECO;
        $scope.telefone = data[0].TELEFONE;
        $scope.email = data[0].EMAIL;
        $scope.facebook = data[0].FACEBOOK;
    }, function errorCallback(response) {
        alert("Ocorreu um erro ao carregar a página");
        console.log(response);
    });

    $scope.onClickSave= function(){
  	var data =
      {
        "idContato": "1",
        "telefone": $scope.telefone,
        "facebook": $scope.facebook,
        "email": $scope.email,
        "endereco": $scope.endereco

      };
      console.log(data);

  	  var requisicao = {
      method: 'PUT',
      url: 'http://localhost/VilaVicentinaProvider/api/contato',
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