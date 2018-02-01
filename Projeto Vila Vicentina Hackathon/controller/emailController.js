app.controller("emailController", ["$scope",'textAngularManager', "$http", function ($scope, textAngularManager, $http) {

    $scope.onClickEnviarEmail = function (){
        console.log("olar");
      var email = "";
      if ($scope.emailMsg == null || $scope.emailMsg == "") {
          alert("Digite o seu e-mail!");
          return;
      } else {
          email = $scope.emailMsg;
      }

      var data =
          {
            "nome": $scope.nome,
            "email": email,
            "assunto": $scope.assunto,
            "corpo": $scope.corpo
          };
          console.log(data);

      var requisicao = {
          method: 'POST',
          url: 'http://localhost/VilaVicentinaProvider/api/email',
          headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"},
          data: data
      };

      $http(requisicao).then(function successCallback(response) {
          var data = response.data;
          console.log(data);

      }, function errorCallback(response) {
          alert("Ocorreu um erro ao realizar a requisição");
          console.log(response);
      });
    };
}]);
