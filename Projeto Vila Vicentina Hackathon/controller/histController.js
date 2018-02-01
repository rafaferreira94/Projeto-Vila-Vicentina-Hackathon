app.controller("histController", ["$scope",'textAngularManager', "$http", function ($scope, textAngularManager, $http) {
    $scope.edit=false;
  

	var url = "http://localhost/VilaVicentinaProvider/api/historia";
    $http({
        method: 'GET',
        url: url
    }).then(function successCallback(response) {
        var data = response.data;  
        console.log(data);
   		$scope.htmlVariable = data[0].HISTORIA;
    }, function errorCallback(response) {
        alert("Ocorreu um erro ao carregar a página");
        console.log(response);
    });

    $scope.onClickSave= function(){
  var data =
      {
        "idHistoria": "1",
        "historia": $scope.htmlVariable
      };
      console.log(data);

  var requisicao = {
      method: 'PUT',
      url: 'http://localhost/VilaVicentinaProvider/api/historia',
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