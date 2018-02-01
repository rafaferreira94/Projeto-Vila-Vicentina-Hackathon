app.controller("informacoesController", ["$scope",'textAngularManager', "$http", function ($scope, textAngularManager, $http) {
    $scope.editCont=false;

     $scope.editInfo=false;
    $scope.infohtml = string;
$scope.infohtml = "oi";
$scope.informacoesUteis = {};

	var url = "http://localhost/VilaVicentinaProvider/api/informacoesUteis";
    $http({
        method: 'GET',
        url: url
    }).then(function successCallback(response) {
        var data = response.data;  
 $scope.informacoesUteis = data;
 var string = "";

for (i = 0; i <  $scope.informacoesUteis.length; i++) { 
  console.log(i);
  string += informacoesUteis[i].TITULO + "<BR/>" + informacoesUteis[i].INFORMACAO + "<BR />"  + informacoesUteis[i].TELEFONE + "<BR /> <BR />"; 
}

//$scope.infohtml = string;

    }, function errorCallback(response) {
        alert("Ocorreu um erro ao carregar a página");
        console.log(response);
    });

    $scope.onClickSaveContatos= function(){
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