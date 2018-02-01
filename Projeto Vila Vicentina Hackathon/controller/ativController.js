app.controller("ativController", ["$scope", "$http", function ($scope, $http) {
$scope.editCent=false;
$scope.editMiss=false;


	var url = "http://localhost/VilaVicentinaProvider/api/missa";
    $http({
        method: 'GET',
        url: url
    }).then(function successCallback(response) {
        var data = response.data;  
        $scope.resumo = data[0].RESUMO;
        $scope.misstext = data[0].DATA;
    }, function errorCallback(response) {
        alert("Ocorreu um erro ao carregar a página");
        console.log(response);
    });

	$scope.onClickSaveMissa= function(){
    var data =
      {
        "idMissa": "1",
        "resumo": $scope.resumo,
        "data": $scope.misstext
      };
      console.log(data);

  var requisicao = {
      method: 'PUT',
      url: 'http://localhost/VilaVicentinaProvider/api/missa',
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

	var url = "http://localhost/VilaVicentinaProvider/api/centroDia";
    $http({
        method: 'GET',
        url: url
    }).then(function successCallback(response) {
        var data = response.data;  
   		$scope.centhtml = data[0].RESUMO;
    }, function errorCallback(response) {
        alert("Ocorreu um erro ao carregar a página");
        console.log(response);
    });

    $scope.onClickSaveCentroDia= function(){
  	var data =
      {
        "idCentroDia": "1",
        "resumo": $scope.centhtml
      };
      console.log(data);

  	var requisicao = {
      method: 'PUT',
      url: 'http://localhost/VilaVicentinaProvider/api/centroDia',
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