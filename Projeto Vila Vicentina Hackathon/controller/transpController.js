app.controller("transpController", ["$scope",'textAngularManager', "$http", function ($scope, textAngularManager, $http) {
    $scope.transphtml='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.';
    $scope.edit=false;
    $scope.transparencias = {};

    var imgData = "";
    $scope.incluir = function () {
        $('#modalTrans').modal()
    };

    $('#verborgen_file1').change(function () {
        var file = this.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
           // $('#hero_area').css('background-image', 'url("' + reader.result + '")');
           console.log(reader.result);
           imgData = reader.result;
           $('#btnSave').click();
        }
        if (file) {
            reader.readAsDataURL(file);
        } else {
            console.log("Erro na leitura do arquivo");
        }
    });

var url = "http://localhost/VilaVicentinaProvider/api/transparencia";
    $http({
        method: 'GET',
        url: url
    }).then(function successCallback(response) {
        var data = response.data;
     $scope.transparencias = data;
    }, function errorCallback(response) {
        alert("Ocorreu um erro ao carregar a página");
        console.log(response);
    });

    $scope.onClickSaveTransparencia= function(){
  	var data =
      {
        "idTransparencia": "1",
        "data": $scope.data,
        "valor": $scope.valor,
        "nome_arquivo": $scope.nome_arquivo,
        "imgData": imgData
      };
      console.log(data);

  	var requisicao = {
      method: 'PUT',
      url: 'http://localhost/VilaVicentinaProvider/api/transparencia',
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
