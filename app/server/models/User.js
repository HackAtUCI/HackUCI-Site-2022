var mongoose = require("mongoose"),
  bcrypt = require("bcrypt-nodejs"),
  validator = require("validator"),
  jwt = require("jsonwebtoken");
JWT_SECRET = process.env.JWT_SECRET;

var profile = {
  // Basic info
  name: {
    type: String,
    min: 1,
    max: 100
  },

  firstname: {
    type: String,
    min: 1,
    max: 100
  },

  lastname: {
    type: String,
    min: 1,
    max: 100
  },

  adult: {
    type: Boolean,
    required: true,
    default: false
  },

  firstTime: {
    type: Boolean,
    required: false,
    default: false
  },

  school: {
    type: String,
    min: 1,
    max: 150
  },

  ethnicity: {
    type: String,
    enum: {
      values: "AIA API BAA H WC TOM N O".split(" ")
    }
  },

  major: {
    type: String
  },

  graduationYear: {
    type: String,
    enum: {
      values: "first second third fourth fifth graduate".split(" ")
    }
  },

  linkedin: {
    type: String,
    min: 0,
    max: 100
  },

  portfolio: {
    type: String,
    min: 0,
    max: 100
  },

  essay: {
    type: String,
    min: 0,
    max: 1500
  },

  country: {
    type: String,
    min: 0,
    max: 100
  },

  essay2: {
    type: String,
    min: 0,
    max: 1500
  },

  description: {
    type: String,
    min: 0,
    max: 150
  },

  resume: {
    type: String
  },

  // Optional info for demographics
  pronouns: {
    type: String,
    enum: {
      values: "F M T O N".split(" ")
    }
  },

  gender: {
    type: String,
    enum: {
      values: "F M T O N".split(" ")
    }
  }
};

// Only after confirmed
var confirmation = {
  phoneNumber: String,
  dietaryRestrictions: [String],
  shirtSize: {
    type: String,
    enum: {
      values: "XS S M L XL XXL WXS WS WM WL WXL WXXL".split(" ")
    }
  },
  wantsHardware: Boolean,
  hardware: String,
  inPerson: Boolean,

  major: String,
  github: String,
  twitter: String,
  website: String,
  resume: String,

  needsReimbursement: Boolean,
  address: {
    name: String,
    line1: String,
    line2: String,
    city: String,
    state: String,
    zip: String,
    country: String
  },
  receipt: String,

  hostNeededFri: Boolean,
  hostNeededSat: Boolean,
  genderNeutral: Boolean,
  catFriendly: Boolean,
  smokingFriendly: Boolean,
  hostNotes: String,

  notes: String,

  signatureLiability: String,
  signaturePhotoRelease: String,
  signatureCodeOfConduct: String
};

var status = {
  /**
   * Whether or not the user's profile has been completed.
   * @type {Object}
   */
  completedProfile: {
    type: Boolean,
    required: true,
    default: false
  },
  queued: {
    type: Number
  },
  notified: {
    type: Boolean
  },
  admitted: {
    type: Boolean,
    required: true,
    default: false
  },
  admittedBy: {
    type: String,
    validate: [validator.isEmail, "Invalid Email"],
    select: false
  },
  confirmed: {
    type: Boolean,
    required: true,
    default: false
  },
  declined: {
    type: Boolean,
    required: true,
    default: false
  },
  checkedIn: {
    type: Boolean,
    required: true,
    default: false
  },
  checkInTime: {
    type: Number
  },
  confirmBy: {
    type: Number
  },
  reimbursementGiven: {
    type: Boolean,
    default: false
  }
};

// define the schema for our admin model
var schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Invalid Email"]
  },

  password: {
    type: String,
    required: true,
    select: false
  },

  admin: {
    type: Boolean,
    required: true,
    default: false
  },

  timestamp: {
    type: Number,
    required: true,
    default: Date.now()
  },

  lastUpdated: {
    type: Number,
    default: Date.now()
  },

  verified: {
    type: Boolean,
    required: true,
    default: false
  },

  salt: {
    type: Number,
    required: true,
    default: Date.now(),
    select: false
  },

  owner: {
    type: Boolean,
    required: true,
    default: false
  },

  /**
   * User Profile.
   *
   * This is the only part of the user that the user can edit.
   *
   * Profile validation will exist here.
   */
  profile: profile,

  /**
   * Confirmation information
   *
   * Extension of the user model, but can only be edited after acceptance.
   */
  confirmation: confirmation,

  status: status
});

schema.set("toJSON", {
  virtuals: true
});

schema.set("toObject", {
  virtuals: true
});

//=========================================
// Instance Methods
//=========================================

// checking if this password matches
schema.methods.checkPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

// Token stuff
schema.methods.generateEmailVerificationToken = function() {
  return jwt.sign(this.email.toString(), JWT_SECRET);
};

schema.methods.generateAuthToken = function() {
  return jwt.sign(this._id.toString(), JWT_SECRET);
};

/**
 * Generate a temporary authentication token (for changing passwords)
 * @return JWT
 * payload: {
 *   id: userId
 *   iat: issued at ms
 *   exp: expiration ms
 * }
 */
schema.methods.generateTempAuthToken = function() {
  return jwt.sign(
    {
      id: this._id
    },
    JWT_SECRET,
    {
      expiresIn: "1h"
    }
  );
};

//=========================================
// Static Methods
//=========================================

schema.statics.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

/**
 * Verify an an email verification token.
 * @param  {[type]}   token token
 * @param  {Function} cb    args(err, email)
 */
schema.statics.verifyEmailVerificationToken = function(token, callback) {
  jwt.verify(token, JWT_SECRET, function(err, email) {
    return callback(err, email);
  });
};

/**
 * Verify a temporary authentication token.
 * @param  {[type]}   token    temporary auth token
 * @param  {Function} callback args(err, id)
 */
schema.statics.verifyTempAuthToken = function(token, callback) {
  jwt.verify(token, JWT_SECRET, function(err, payload) {
    if (err || !payload) {
      return callback(err);
    }

    if (!payload.exp || Date.now() >= payload.exp * 1000) {
      return callback({
        message: "Token has expired."
      });
    }

    return callback(null, payload.id);
  });
};

schema.statics.findOneByEmail = function(email) {
  if (email) {
    return this.findOne({
      email: email.toLowerCase()
    });
  } else {
    return null;
  }
};

/**
 * Get a single user using a signed token.
 * @param  {String}   token    User's authentication token.
 * @param  {Function} callback args(err, user)
 */
schema.statics.getByToken = function(token, callback) {
  jwt.verify(
    token,
    JWT_SECRET,
    function(err, id) {
      if (err) {
        return callback(err);
      }
      this.findOne({ _id: id }, callback);
    }.bind(this)
  );
};

schema.statics.validateProfile = function(profile, cb) {
  return cb(
    !(
      profile.name.length > 0 &&
      profile.adult &&
      profile.school.length > 0 &&
      ["first", "second", "third", "fourth", "fifth", "graduate"].indexOf(
        profile.graduationYear
      ) > -1 &&
      ["F", "M", "T", "O", "N"].indexOf(profile.pronouns) > -1
    )
  );
};

//=========================================
// Virtuals
//=========================================

/**
 * Has the user completed their profile?
 * This provides a verbose explanation of their furthest state.
 */
schema.virtual("status.name").get(function() {
  if (this.status.checkedIn) {
    return "checked in";
  }

  if (this.status.declined) {
    return "declined";
  }

  if (this.status.confirmed) {
    return "confirmed";
  }

  if (this.status.admitted) {
    return "admitted";
  }

  if (this.status.completedProfile) {
    return "submitted";
  }

  if (!this.verified) {
    return "unverified";
  }

  return "incomplete";
});

module.exports = mongoose.model("User", schema);
