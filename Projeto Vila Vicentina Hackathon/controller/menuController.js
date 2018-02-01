app.controller("menuController", ["$scope", "$http", function ($scope, $http) {
   
 try {
        var user = JSON.parse(localStorage.getItem("usuarioLogado"));
        $scope.nome = user[0].nome;
    } catch (err) {
        window.location.href = 'login.html';
    }
    
    $scope.abrirUsuarios = function () {
       window.location.replace("users.html");
    };

     $scope.abrirVoluntarios = function () {
       window.location.replace("voluntarios.html");
    };

      $scope.logout = function () {
      localStorage.clear();
      window.location.replace("login.html");
    };
}]);
