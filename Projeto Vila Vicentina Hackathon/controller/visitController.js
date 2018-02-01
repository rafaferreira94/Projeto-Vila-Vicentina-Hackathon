app.controller("visitController", ["$scope", "$http", function ($scope, $http) {
$scope.edit=false;


var url = "http://localhost/VilaVicentinaProvider/api/visita";
    $http({
        method: 'GET',
        url: url
    }).then(function successCallback(response) {
        var data = response.data;  
        $scope.funcionamento = data[0].HORARIO_FUNCIONAMENTO;
   		$scope.text = data[0].RESUMO;
    }, function errorCallback(response) {
        alert("Ocorreu um erro ao carregar a página");
        console.log(response);
    });


$scope.onClickSave= function(){
  var data =
      {
        "idVisita": "1",
        "data":"",
        "resumo": $scope.text,
        "endereco":"",
        "horario_funcionamento": $scope.funcionamento
      };
      console.log(data);

  var requisicao = {
      method: 'PUT',
      url: 'http://localhost/VilaVicentinaProvider/api/visita',
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
