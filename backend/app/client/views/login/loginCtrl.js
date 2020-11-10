angular.module("reg").controller("LoginCtrl", [
  "$scope",
  "$http",
  "$state",
  "settings",
  "Utils",
  "AuthService",
  function($scope, $http, $state, settings, Utils, AuthService) {
    var re = /\S+@\S+\.\S+/;
    // Is registration open?
    var Settings = settings.data;
    $scope.regIsOpen = Utils.isRegOpen(Settings);

    // Start state for login
    $scope.loginState = "login";

    function onSuccess() {
      $state.go("app.admin.stats");
    }

    function onError(data) {
      $scope.error = data.message;
    }

    function resetError() {
      $scope.error = null;
    }

    $scope.login = function() {
      resetError();
      AuthService.loginWithPassword(
        $scope.email,
        $scope.password,
        onSuccess,
        onError
      );
    };

    // TODO: Remove reference after migrating to ApplyCtrl
    $scope.register = function() {
      resetError();
      AuthService.register(
        $scope.email,
        $scope.password,
        $scope.user.profile,
        onSuccess,
        onError
      );
    };

    $scope.setLoginState = function(state) {
      $scope.loginState = state;
    };

    $scope.sendResetEmail = function() {
      if (!re.test($scope.email)) {
        sweetAlert({
          title: "Oops",
          text: "Please enter a valid email address.",
          type: "error",
          confirmButtonColor: "#e76482"
        });
      } else {
        AuthService.sendResetEmail($scope.email);
        sweetAlert({
          title: "Don't Sweat!",
          text: "You will receive an email shortly.",
          type: "success",
          confirmButtonColor: "#e76482"
        });
      }
    };
  }
]);
