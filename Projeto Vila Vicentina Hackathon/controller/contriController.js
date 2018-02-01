app.controller("contriController", ["$scope", "$http", function ($scope, $http) {
$scope.editDoa = false;
$scope.editPre = false;
$scope.editBaz = false;
$scope.doahtml = "<p>Texto do Doa</p>";


 var url = "http://localhost/VilaVicentinaProvider/api/doacoes/texto";
    $http({
        method: 'GET',
        url: url
    }).then(function successCallback(response) {
        var data = response.data;  
        
    $scope.doahtml = data[0].TEXTO;
    }, function errorCallback(response) {
        alert("Ocorreu um erro ao carregar a página");
        console.log(response);
    });


var url = "http://localhost/VilaVicentinaProvider/api/doacoes";
    $http({
        method: 'GET',
        url: url
    }).then(function successCallback(response) {
        var data = response.data;  
        
    $scope.preText = data[0].DESCRICAO;
    }, function errorCallback(response) {
        alert("Ocorreu um erro ao carregar a página");
        console.log(response);
    });



 var url = "http://localhost/VilaVicentinaProvider/api/bazar";
    $http({
        method: 'GET',
        url: url
    }).then(function successCallback(response) {
        var data = response.data;  
        $scope.bazHor = data[0].HORARIO_FUNCIONAMENTO;
    $scope.bazhtml =  data[0].TEXTO;
    }, function errorCallback(response) {
        alert("Ocorreu um erro ao carregar a página");
        console.log(response);
    });

  $scope.onClickSaveDoacao= function(){
  var data =
      {
        "texto": $scope.doahtml
      };
      console.log(data);

  var requisicao = {
      method: 'PUT',
      url: 'http://localhost/VilaVicentinaProvider/api/doacoes/texto',
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


  $scope.onClickSavePrecisamos= function(){
  var data =
      {
        "idDoacoes": "2",
        "titulo": "",
        "descricao": $scope.preText

      };
      console.log(data);

  var requisicao = {
      method: 'PUT',
      url: 'http://localhost/VilaVicentinaProvider/api/doacoes',
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


   $scope.onClickSaveBazar= function(){
  var data =
      {
        "idBazar": "1",
        "horario_funcionamento": $scope.bazHor,
        "telefone": "",
        "texto": $scope.bazhtml
      };
      console.log(data);

  var requisicao = {
      method: 'PUT',
      url: 'http://localhost/VilaVicentinaProvider/api/bazar',
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
