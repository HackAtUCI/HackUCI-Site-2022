import { adminUsersFormatTime } from "utils/date";

export function formatPronoun(pronoun) {
  let pronounDict = {
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

export const generateSections = user => {
  return [
    {
      name: "Basic Info",
      fields: [
        {
          name: "Created On",
          value: adminUsersFormatTime(user.timestamp)
        },
        {
          name: "Last Updated",
          value: adminUsersFormatTime(user.lastUpdated)
        },
        {
          name: "Confirm By",
          value: adminUsersFormatTime(user.status.confirmBy) || "N/A"
        },
        {
          name: "Checked In",
          value: adminUsersFormatTime(user.status.checkInTime) || "N/A"
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
            "What is your favorite memory from a hackathon? If you have not been, what is something that you are looking forward to at your first one?",
          value: user.profile.question1
        },
        {
          name: "What would you do if the power goes out at HackUCI?",
          value: user.profile.question2
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
};
