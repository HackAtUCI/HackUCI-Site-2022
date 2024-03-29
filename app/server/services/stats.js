var _ = require("underscore");
var async = require("async");
var User = require("../models/User");

// In memory stats.
var stats = {};
function calculateStats() {
  console.log("Calculating stats...");

  var newStats = {
    lastUpdated: 0,

    total: 0,
    demo: {
      pronouns: {
        M: 0,
        F: 0,
        T: 0,
        X: 0,
        O: 0,
        N: 0
      },
      gender: {
        M: 0,
        F: 0,
        T: 0,
        X: 0,
        O: 0,
        N: 0
      },
      schools: {},
      majors: {},
      year: {
        first: 0,
        second: 0,
        third: 0,
        fourth: 0,
        fifth: 0,
        graduate: 0
      },
      ethnicity: {
        AIA: 0,
        API: 0,
        BAA: 0,
        H: 0,
        WC: 0,
        TOM: 0,
        N: 0,
        O: 0
      }
    },

    verified: 0,
    submitted: 0,
    admitted: 0,
    confirmed: 0,
    confirmedUCI: 0,
    declined: 0,
    signedWaiver: 0,
    requireTransportation: 0,

    confirmedFemale: 0,
    confirmedMale: 0,
    confirmedThey: 0,
    confirmedZir: 0,
    confirmedOther: 0,
    confirmedNone: 0,

    shirtSizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
      XXL: 0
    },

    dietaryRestrictions: {},

    checkedIn: 0
  };

  User.find({}).exec(function(err, users) {
    if (err || !users) {
      throw err;
    }

    newStats.total = users.length;

    async.each(
      users,
      function(user, callback) {
        // Grab the email extension
        var email = user.email.split("@")[1];
        var major = user.profile.major;

        // Add to the pronouns
        newStats.demo.pronouns[user.profile.pronouns] += 1;
        newStats.demo.gender[user.profile.gender] += 1;

        // Count verified
        newStats.verified += user.verified ? 1 : 0;

        // Count submitted
        newStats.submitted += user.status.completedProfile ? 1 : 0;

        // Count accepted
        newStats.admitted += user.status.admitted ? 1 : 0;

        // Count confirmed
        newStats.confirmed += user.status.confirmed ? 1 : 0;

        // Count confirmed that are uci
        newStats.confirmedUCI +=
          user.status.confirmed && email === "uci.edu" ? 1 : 0;

        newStats.confirmedFemale +=
          user.status.confirmed && user.profile.pronouns == "F" ? 1 : 0;
        newStats.confirmedMale +=
          user.status.confirmed && user.profile.pronouns == "M" ? 1 : 0;
        newStats.confirmedThey +=
          user.status.confirmed && user.profile.pronouns == "T" ? 1 : 0;
        newStats.confirmedZir +=
          user.status.confirmed && user.profile.pronouns == "X" ? 1 : 0;
        newStats.confirmedOther +=
          user.status.confirmed && user.profile.pronouns == "O" ? 1 : 0;
        newStats.confirmedNone +=
          user.status.confirmed && user.profile.pronouns == "N" ? 1 : 0;

        // Count declined
        newStats.declined += user.status.declined ? 1 : 0;

        // Count the number of people who need transportation
        newStats.requireTransportation += user.confirmation.needsReimbursement
          ? 1
          : 0;

        // Count the number of people who still need to be reimbursed
        newStats.reimbursementMissing +=
          user.confirmation.needsReimbursement &&
          !user.status.reimbursementGiven
            ? 1
            : 0;

        // Count the number of people who want hardware
        newStats.wantsHardware += user.confirmation.wantsHardware ? 1 : 0;

        newStats.signedWaiver +=
          user.confirmation.signatureLiability &&
          user.confirmation.signatureLiability !== ""
            ? 1
            : 0;

        // Count schools
        if (!newStats.demo.schools[email]) {
          newStats.demo.schools[email] = {
            submitted: 0,
            admitted: 0,
            confirmed: 0,
            declined: 0
          };
        }
        newStats.demo.schools[email].submitted += user.status.completedProfile
          ? 1
          : 0;
        newStats.demo.schools[email].admitted += user.status.admitted ? 1 : 0;
        newStats.demo.schools[email].confirmed += user.status.confirmed ? 1 : 0;
        newStats.demo.schools[email].declined += user.status.declined ? 1 : 0;

        // Count majors
        if (!newStats.demo.majors[major]) {
          newStats.demo.majors[major] = {
            submitted: 0,
            admitted: 0,
            confirmed: 0,
            declined: 0
          };
        }
        newStats.demo.majors[major].submitted += user.status.completedProfile
          ? 1
          : 0;
        newStats.demo.majors[major].admitted += user.status.admitted ? 1 : 0;
        newStats.demo.majors[major].confirmed += user.status.confirmed ? 1 : 0;
        newStats.demo.majors[major].declined += user.status.declined ? 1 : 0;

        // Count graduation years
        if (user.profile.graduationYear) {
          newStats.demo.year[user.profile.graduationYear] += 1;
        }

        newStats.demo.ethnicity[user.profile.ethnicity] += 1;

        // Count shirt sizes
        if (user.confirmation.shirtSize in newStats.shirtSizes) {
          newStats.shirtSizes[user.confirmation.shirtSize] += 1;
        }

        // Host needed counts
        newStats.hostNeededFri += user.confirmation.hostNeededFri ? 1 : 0;
        newStats.hostNeededSat += user.confirmation.hostNeededSat ? 1 : 0;
        newStats.hostNeededUnique +=
          user.confirmation.hostNeededFri || user.confirmation.hostNeededSat
            ? 1
            : 0;

        newStats.hostNeededFemale +=
          (user.confirmation.hostNeededFri ||
            user.confirmation.hostNeededSat) &&
          user.profile.pronouns == "F"
            ? 1
            : 0;
        newStats.hostNeededMale +=
          (user.confirmation.hostNeededFri ||
            user.confirmation.hostNeededSat) &&
          user.profile.pronouns == "M"
            ? 1
            : 0;
        newStats.hostNeededOther +=
          (user.confirmation.hostNeededFri ||
            user.confirmation.hostNeededSat) &&
          user.profile.pronouns == "O"
            ? 1
            : 0;
        newStats.hostNeededNone +=
          (user.confirmation.hostNeededFri ||
            user.confirmation.hostNeededSat) &&
          user.profile.pronouns == "N"
            ? 1
            : 0;

        // Dietary restrictions
        if (user.confirmation.dietaryRestrictions) {
          user.confirmation.dietaryRestrictions.forEach(function(restriction) {
            if (!newStats.dietaryRestrictions[restriction]) {
              newStats.dietaryRestrictions[restriction] = 0;
            }
            newStats.dietaryRestrictions[restriction] += 1;
          });
        }

        // Count checked in
        newStats.checkedIn += user.status.checkedIn ? 1 : 0;

        callback(); // let async know we've finished
      },
      function() {
        // Transform dietary restrictions into a series of objects
        var restrictions = [];
        _.keys(newStats.dietaryRestrictions).forEach(function(key) {
          restrictions.push({
            name: key,
            count: newStats.dietaryRestrictions[key]
          });
        });
        newStats.dietaryRestrictions = restrictions;

        // Transform schools into an array of objects
        var schools = [];
        _.keys(newStats.demo.schools).forEach(function(key) {
          schools.push({
            email: key,
            count: newStats.demo.schools[key].submitted,
            stats: newStats.demo.schools[key]
          });
        });
        newStats.demo.schools = schools;

        var majorsList = {
          AE: "Aerospace Engineering",
          AP: "Applied Physics",
          BE: "Biomedical Engineering",
          BIM: "Business Information Management",
          CME: "Chemical Engineering",
          CH: "Chemistry",
          CVE: "Civil Engineering",
          CE: "Computer Engineering",
          CGS: "Computer Game Science",
          CS: "Computer Science",
          CSE: "Computer Science and Engineering",
          DS: "Data Science",
          ESS: "Earth System Science",
          EE: "Electrical Engineering",
          ENG: "Engineering",
          ENE: "Environmental Engineering",
          ENS: "Environmental Science",
          INF: "Informatics",
          MSE: "Materials Science Engineering",
          MAT: "Mathematics",
          MCE: "Mechanical Engineering",
          PHY: "Physics",
          SE: "Software Engineering",
          other: "Other",
          undefined: "Undefined"
        };

        // Transform majors into an array of objects
        var majors = [];
        _.keys(newStats.demo.majors).forEach(function(key) {
          majors.push({
            name: majorsList[key],
            count: newStats.demo.majors[key].submitted,
            stats: newStats.demo.majors[key]
          });
        });
        newStats.demo.majors = majors;

        console.log("Stats updated!");
        newStats.lastUpdated = new Date();
        stats = newStats;
      }
    );
  });
}

// Calculate once every 5 minutes.
calculateStats();
setInterval(calculateStats, 300000);

var Stats = {};

Stats.getUserStats = function() {
  return stats;
};

module.exports = Stats;
