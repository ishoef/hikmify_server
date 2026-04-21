"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorActivity = exports.TutorStatus = exports.UserRole = exports.UserStatus = void 0;
var UserStatus;
(function (UserStatus) {
    UserStatus["ACTIVE"] = "ACTIVE";
    UserStatus["INACTIVE"] = "INACTIVE";
    UserStatus["BANED"] = "BANED";
})(UserStatus || (exports.UserStatus = UserStatus = {}));
var UserRole;
(function (UserRole) {
    UserRole["USER"] = "USER";
    UserRole["TUTOR"] = "TUTOR";
    UserRole["ADMIN"] = "ADMIN";
    UserRole["ALL"] = "ALL";
})(UserRole || (exports.UserRole = UserRole = {}));
var TutorStatus;
(function (TutorStatus) {
    TutorStatus["APPROVED"] = "APPROVED";
    TutorStatus["PENDING"] = "PENDING";
})(TutorStatus || (exports.TutorStatus = TutorStatus = {}));
var TutorActivity;
(function (TutorActivity) {
    TutorActivity["ACTIVE"] = "ACTIVE";
    TutorActivity["INACTIVE"] = "INACTIVE";
    TutorActivity["BANNED"] = "BANNED";
})(TutorActivity || (exports.TutorActivity = TutorActivity = {}));
//# sourceMappingURL=enums.js.map