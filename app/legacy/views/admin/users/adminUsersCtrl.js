angular.module("reg").controller("AdminUsersCtrl", [
  "$scope",
  "$state",
  "$stateParams",
  "UserService",
  "$http",
  "$window",
  function($scope, $state, $stateParams, UserService, $http, $window) {
    $scope.pages = [];
    $scope.users = [];

    // Semantic-UI moves modal content into a dimmer at the top level.
    // While this is usually nice, it means that with our routing will generate
    // multiple modals if you change state. Kill the top level dimmer node on initial load
    // to prevent this.
    $(".ui.dimmer").remove();
    // Populate the size of the modal for when it appears, with an arbitrary user.
    $scope.selectedUser = {};
    $scope.selectedUser.sections = generateSections({
      status: "",
      confirmation: {
        dietaryRestrictions: []
      },
      profile: ""
    });

    $scope.queryText = $stateParams.query;

    function updatePage(data) {
      for (var i = 0; i < data.users.length; i++) {
        data.users[i]["created"] = formatTimeShort(data.users[i]["timestamp"]);
      }
      $scope.users = data.users;

      $scope.currentPage = data.page;
      $scope.pageSize = data.size;

      var p = [];
      for (var i = 0; i < data.totalPages; i++) {
        p.push(i);
      }
      $scope.pages = p;
    }

    UserService.getPage(
      $stateParams.page,
      $stateParams.size,
      $scope.queryText,
      "date"
    ).success(function(data) {
      updatePage(data);
    });

    $scope.$watch("queryText", function(queryText) {
      UserService.getPage(
        $stateParams.page,
        $stateParams.size,
        queryText
      ).success(function(data) {
        updatePage(data);
      });
    });

    $scope.goToPage = function(page) {
      $state.go("app.admin.users", {
        page: page,
        size: $stateParams.size || 50,
        query: $scope.queryText
      });
    };

    $scope.goUser = function($event, user) {
      $event.stopPropagation();

      $state.go("app.admin.user", {
        id: user._id
      });
    };

    $scope.resolveClick = function(functionKey, data) {
      $scope[functionKey](data);
    };

    $scope.openResume = function() {
      var id = $scope.selectedUser.id;
      var resumeWindow = $window.open("", "_blank");
      $http.get("/api/resume/" + id).then(function(response) {
        resumeWindow.location.href = "/api/resume/view/" + response.data.token;
      });
    };

    $scope.toggleCheckIn = function($event, user, index) {
      $event.stopPropagation();

      if (!user.status.checkedIn) {
        swal(
          {
            title: "Whoa, wait a minute!",
            text: "You are about to check in " + user.profile.name + "!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, check them in.",
            closeOnConfirm: false
          },
          function() {
            UserService.checkIn(user._id).success(function(user) {
              $scope.users[index] = user;
              swal(
                "Accepted",
                user.profile.name + " has been checked in.",
                "success"
              );
            });
          }
        );
      } else {
        UserService.checkOut(user._id).success(function(user) {
          $scope.users[index] = user;
          swal(
            "Accepted",
            user.profile.name + " has been checked out.",
            "success"
          );
        });
      }
    };

    $scope.toggleQueue = function($event, user, index) {
      $event.stopPropagation();

      if (!user.status.queued) {
        UserService.addQueue(user._id).success(function(user) {
          if (user === null) {
            swal({
              title: "User not Verified",
              text: "User cannot be queued!",
              type: "success",
              timer: 750
            });
            return;
          }
          $scope.users[index] = user;
          swal({
            title: "Queued",
            text: user.profile.name + " has been queued!",
            type: "success",
            timer: 500
          });
        });
      } else {
        UserService.removeQueue(user._id).success(function(user) {
          $scope.users[index] = user;
          swal(
            "Removed",
            user.profile.name + " has been removed from the queue.",
            "success"
          );
        });
      }
    };

    $scope.acceptUser = function($event, user, index) {
      $event.stopPropagation();

      swal(
        {
          title: "Whoa, wait a minute!",
          text: "You are about to accept " + user.profile.name + "!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes, accept them.",
          closeOnConfirm: false
        },
        function() {
          swal(
            {
              title: "Are you sure?",
              text:
                "Your account will be logged as having accepted this user. " +
                "Remember, this power is a privilege.",
              type: "warning",
              showCancelButton: true,
              confirmButtonColor: "#DD6B55",
              confirmButtonText: "Yes, accept this user.",
              closeOnConfirm: false
            },
            function() {
              UserService.admitUser(user._id).success(function(user) {
                $scope.users[index] = user;
                swal(
                  "Accepted",
                  user.profile.name + " has been admitted.",
                  "success"
                );
              });
            }
          );
        }
      );
    };

    $scope.sendConfirmedEmail = function($event, user, index) {
      $event.stopPropagation();

      swal(
        {
          title: "Send Email to Confirmed Users",
          text: "Please input the SendGrid Email Template ID:",
          type: "input",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Send emails",
          closeOnConfirm: false
        },
        function(inputValue) {
          if (inputValue !== false) {
            UserService.sendConfirmedEmail(inputValue).success(function() {
              swal(
                "Emails Sent!",
                "The email will be sent to all confirmed users!",
                "success"
              );
            });
          }
        }
      );
    };

    $scope.sendAdmittedEmail = function($event, user, index) {
      $event.stopPropagation();

      swal(
        {
          title: "Send Admitted Email",
          text:
            "Are you sure you want to send the email to all admitted users?",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes, send the admitted email!",
          closeOnConfirm: false
        },
        function() {
          UserService.sendAdmittedEmail().success(function() {
            swal(
              "Admitted Email Sent!",
              "The email will be sent to all admitted users!",
              "success"
            );
          });
        }
      );
    };

    $scope.queueUnadmitted = function($event) {
      $event.stopPropagation();

      swal(
        {
          title: "Queue Everyone",
          text: "Are you sure you want to queue all unadmitted users?",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes, queue them!",
          closeOnConfirm: false
        },
        function() {
          UserService.queueUnadmitted().success(function() {
            swal(
              "Users queued!",
              "All Unadmitted users will be queued!",
              "success"
            );
          });
        }
      );
    };

    $scope.sendWaiverEmail = function($event, user, index) {
      $event.stopPropagation();

      swal(
        {
          title: "Send Waiver Email",
          text:
            "Are you sure you want to send the waiver email to " +
            user.profile.name +
            "?",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes, send the waiver email.",
          closeOnConfirm: false
        },
        function() {
          UserService.sendWaiverEmail(user._id).success(function() {
            swal(
              "Waiver Email Sent!",
              user.profile.name +
                " will receive a copy of the waiver email shortly.",
              "success"
            );
          });
        }
      );
    };

    $scope.markWaiverAsSigned = function($event, user, index) {
      $event.stopPropagation();

      if (!user.confirmation.signatureLiability) {
        swal(
          {
            title: "Whoa, wait a minute!",
            text:
              "You are about to mark " +
              user.profile.name +
              "'s waiver documents as signed!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, mark them as signed.",
            closeOnConfirm: false
          },
          function() {
            UserService.markWaiverAsSigned(user._id).success(function(user) {
              $scope.users[index] = user;
              swal(
                "Marked As Signed",
                user.profile.name +
                  "'s waiver documents have been marked as signed.",
                "success"
              );
            });
          }
        );
      }
    };

    function formatPronoun(pronoun) {
      pronounDict = {
        M: "He, Him, His",
        F: "She, Her, Hers",
        T: "They, Them, Theirs",
        X: "Ze, Zir, Zirs",
        O: "Other",
        N: "N/A"
      };
      if (pronoun) {
        return pronounDict[pronoun];
      }
    }

    function formatGender(gender) {
      genderDict = {
        F: "Female",
        M: "Male",
        T: "Non-Binary",
        O: "Other",
        N: "N/A"
      };
      if (gender) {
        return genderDict[gender];
      }
    }

    function formatEthnicity(eth) {
      ethDict = {
        AIA: "American Indian or Alaskan",
        API: "Asian or Pacific Islander",
        BAA: "Black or African American",
        H: "Hispanic",
        WC: "White or Caucasian",
        TOM: "Two or more races/ethnicities",
        N: "Prefer not to answer",
        O: "Other"
      };
      if (eth) {
        return ethDict[eth];
      }
    }

    function formatTime(time) {
      if (time) {
        return moment(time).format("MMMM Do YYYY, h:mm:ss a");
      }
    }

    function formatTimeShort(time) {
      if (time) {
        return moment(time).format("MMMM Do, h:mm a");
      }
    }

    $scope.rowClass = function(user) {
      if (user.admin) {
        return "admin";
      }
      if (user.status.confirmed) {
        return "positive";
      }
      if (user.status.admitted && !user.status.confirmed) {
        return "warning";
      }
    };

    function selectUser(user) {
      $scope.selectedUser = user;
      $scope.selectedUser.sections = generateSections(user);
      $(".long.user.modal").modal("show");
    }

    function generateSections(user) {
      return [
        {
          name: "Basic Info",
          fields: [
            {
              name: "Created On",
              value: formatTime(user.timestamp)
            },
            {
              name: "Last Updated",
              value: formatTime(user.lastUpdated)
            },
            {
              name: "Confirm By",
              value: formatTime(user.status.confirmBy) || "N/A"
            },
            {
              name: "Checked In",
              value: formatTime(user.status.checkInTime) || "N/A"
            },
            {
              name: "Email",
              value: user.email
            }
          ]
        },
        {
          name: "Profile",
          fields: [
            {
              name: "First Name",
              value: user.profile.firstname
            },
            {
              name: "Last Name",
              value: user.profile.lastname
            },
            {
              name: "Ethnicity",
              value: formatEthnicity(user.profile.ethnicity)
            },
            {
              name: "GenderIdentity",
              value: formatGender(user.profile.gender)
            },
            {
              name: "Pronouns",
              value: formatPronoun(user.profile.pronouns)
            },
            {
              name: "School",
              value: user.profile.school
            },
            {
              name: "Major",
              value: user.profile.major
            },
            {
              name: "Graduation Year",
              value: user.profile.graduationYear
            },
            {
              name: "LinkedIn",
              value: user.profile.linkedin,
              type: "link",
              text: user.profile.linkedin
            },
            {
              name: "Portfolio",
              value: user.profile.portfolio,
              type: "link",
              text: user.profile.portfolio
            },
            {
              name:
                "Think of people that say, “Coding is too hard, I could never do it.” How would you change their minds or make coding easier to learn?",
              value: user.profile.essay
            },
            {
              name:
                "Choose a company that provides a non-tech product or service, and pretend that you have been recently hired by them. What would you build to make their company better?",
              value: user.profile.essay2
            },
            {
              name: "Resume",
              value: "openResume",
              type: "click",
              text: "View Resume"
            }
          ]
        },
        {
          name: "Confirmation",
          fields: [
            {
              name: "Phone Number",
              value: user.confirmation.phoneNumber
            },
            {
              name: "Dietary Restrictions",
              value: user.confirmation.dietaryRestrictions.join(", ")
            },
            {
              name: "Shirt Size",
              value: user.confirmation.shirtSize
            },
            {
              name: "Major",
              value: user.confirmation.major
            },
            {
              name: "Github",
              value: user.confirmation.github
            },
            {
              name: "Website",
              value: user.confirmation.website
            },
            {
              name: "Needs Hardware",
              value: user.confirmation.wantsHardware,
              type: "boolean"
            },
            {
              name: "Hardware Requested",
              value: user.confirmation.hardware
            }
          ]
        },
        {
          name: "Hosting",
          fields: [
            {
              name: "Needs Hosting Friday",
              value: user.confirmation.hostNeededFri,
              type: "boolean"
            },
            {
              name: "Needs Hosting Saturday",
              value: user.confirmation.hostNeededSat,
              type: "boolean"
            },
            {
              name: "Gender Neutral",
              value: user.confirmation.genderNeutral,
              type: "boolean"
            },
            {
              name: "Cat Friendly",
              value: user.confirmation.catFriendly,
              type: "boolean"
            },
            {
              name: "Smoking Friendly",
              value: user.confirmation.smokingFriendly,
              type: "boolean"
            },
            {
              name: "Hosting Notes",
              value: user.confirmation.hostNotes
            }
          ]
        },
        {
          name: "Travel",
          fields: [
            {
              name: "Needs Reimbursement",
              value: user.confirmation.needsReimbursement,
              type: "boolean"
            },
            {
              name: "Received Reimbursement",
              value:
                user.confirmation.needsReimbursement &&
                user.status.reimbursementGiven
            },
            {
              name: "Address",
              value: user.confirmation.address
                ? [
                    user.confirmation.address.line1,
                    user.confirmation.address.line2,
                    user.confirmation.address.city,
                    ",",
                    user.confirmation.address.state,
                    user.confirmation.address.zip,
                    ",",
                    user.confirmation.address.country
                  ].join(" ")
                : ""
            },
            {
              name: "Additional Notes",
              value: user.confirmation.notes
            }
          ]
        }
      ];
    }

    $scope.selectUser = selectUser;
  }
]);
