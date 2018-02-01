app.controller("headerController", ["$scope", "$http", function ($scope, $http) {
$scope.edit = false;
$scope.titulo = "Vila Vicentina";
$scope.bio = "Lar para idosos";
var imgData = "";



 var url = "http://localhost/VilaVicentinaProvider/api/home";
    $http({
        method: 'GET',
        url: url
    }).then(function successCallback(response) {
        var data = response.data;  
        $scope.titulo = data[0].TITULO;
      $scope.bio = data[0].BIO;
    }, function errorCallback(response) {
        alert("Ocorreu um erro ao carregar a página");
        console.log(response);
    });


$('#verborgen_file').change(function () {
    var file = this.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
       // $('#hero_area').css('background-image', 'url("' + reader.result + '")');
       //console.log(reader.result);
       imgData = reader.result;
       $('#btnSave').click();
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {
        console.log("Erro na leitura do arquivo");
    }
});

$scope.onClickSave= function(){
    // console.log("show");
  var data =
      {
        "idHome": "1",
        "titulo": $scope.titulo,
        "bio": $scope.bio,
        "imgData" : imgData
      };
      console.log(data);

  var requisicao = {
      method: 'PUT',
      url: 'http://localhost/VilaVicentinaProvider/api/home',
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
