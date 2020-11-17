angular
  .module("reg")
  .config([
    "$stateProvider",
    "$urlRouterProvider",
    "$locationProvider",
    function($stateProvider, $urlRouterProvider, $locationProvider) {
      // For any unmatched url, redirect to /404
      $urlRouterProvider.otherwise("/404");

      // Set up de states
      $stateProvider
        .state("app", {
          views: {
            "": {
              templateUrl: "views/base.html"
            },
            "navbar@app": {
              templateUrl: "views/navbar/navbar.html",
              controller: "NavbarCtrl",
              resolve: {
                settings: function(SettingsService) {
                  return SettingsService.getPublicSettings();
                }
              }
            }
          },
          data: {
            requireLogin: true
          }
        })
        .state("app.login", {
          url: "/login",
          templateUrl: "views/login/login.html",
          controller: "LoginCtrl",
          data: {
            requireLogin: false
          },
          resolve: {
            settings: function(SettingsService) {
              return SettingsService.getPublicSettings();
            }
          }
        })
        .state("app.admin", {
          views: {
            "": {
              templateUrl: "views/admin/admin.html",
              controller: "AdminCtrl"
            }
          },
          data: {
            requireAdmin: true,
            requireOwner: true
          }
        })
        .state("app.admin.stats", {
          url: "/admin",
          templateUrl: "views/admin/stats/stats.html",
          controller: "AdminStatsCtrl"
        })
        .state("app.admin.users", {
          url: "/admin/users?" + "&page" + "&size" + "&query",
          templateUrl: "views/admin/users/users.html",
          controller: "AdminUsersCtrl"
        })
        .state("app.admin.user", {
          url: "/admin/users/:id",
          templateUrl: "views/admin/user/user.html",
          controller: "AdminUserCtrl",
          resolve: {
            user: function($stateParams, UserService) {
              return UserService.get($stateParams.id);
            }
          }
        })
        .state("app.admin.settings", {
          url: "/admin/settings",
          templateUrl: "views/admin/settings/settings.html",
          controller: "AdminSettingsCtrl"
        })
        .state("app.admin.queue", {
          url: "/admin/queue",
          templateUrl: "views/admin/queue/queue.html",
          controller: "AdminQueueCtrl"
        });

      $locationProvider.html5Mode({
        enabled: true
      });
    }
  ])
  .run([
    "$rootScope",
    "$state",
    "$timeout",
    "$window",
    "Session",
    function($rootScope, $state, $timeout, $window, Session) {
      $rootScope.$on("$stateChangeSuccess", function() {
        $rootScope.fadeOut = false;
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      });

      $rootScope.$on("$stateChangeStart", function(
        event,
        toState,
        toParams,
        fromState
      ) {
        if (toState.external) {
          event.preventDefault();
          $window.open(toState.redirectTo, "_self");
        }

        var requireLogin = toState.data.requireLogin;
        var requireAdmin = toState.data.requireAdmin;
        var requireVerified = toState.data.requireVerified;
        var requireAdmitted = toState.data.requireAdmitted;
        var requireOwner = toState.data.requireOwner;
        $rootScope.fromState = fromState;

        if (toState.redirectTo) {
          event.preventDefault();
          $state.go(toState.redirectTo, toParams, { location: "replace" });
        }

        if (!$rootScope.fadeOut) {
          event.preventDefault();
          $rootScope.fadeOut = true;

          $timeout(function() {
            $state.go(toState.name, toParams);
          }, 100);
        }

        if (requireLogin && !Session.getToken()) {
          event.preventDefault();
          $state.go("app.login");
        }

        if (requireAdmin && !Session.getUser().admin) {
          event.preventDefault();
          $state.go("app.dashboard");
        }

        if (requireOwner && !Session.getUser().owner) {
          event.preventDefault();
          $state.go("app.checkin");
        }

        if (requireVerified && !Session.getUser().verified) {
          event.preventDefault();
          $state.go("app.dashboard");
        }

        if (requireAdmitted && !Session.getUser().status.admitted) {
          event.preventDefault();
          $state.go("app.dashboard");
        }

        if (toState.name === "app.apply" && Session.getUserId()) {
          event.preventDefault();
          $state.go("app.application");
        }

        if (toState.name === "app.volunteer") {
          event.preventDefault();
          $state.go("app.home");
        }

        if (toState.name === "app.live") {
          event.preventDefault();
          $state.go("app.expo");
        }
      });
    }
  ]);
