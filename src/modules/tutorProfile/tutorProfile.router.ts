import { Router } from "express";
import { tutorProfileController } from "./tutorProfile.controller";
import authMiddleware from "../../middleware/authMiddleware";
import { UserRole } from "../../utils/enums";

const router = Router();

router.post(
  "/",
  authMiddleware(UserRole.USER),
  tutorProfileController.createTutorProfile,
);
router.get(
  "/",
  authMiddleware(UserRole.ADMIN, UserRole.USER, UserRole.TUTOR),
  tutorProfileController.getAllTutorProfiles,
);

// GET own profile
router.get(
  "/own-profile",
  authMiddleware(UserRole.ALL),
  tutorProfileController.getOwnTutorProfile,
);

// DELETE Profile by user or admin
router.delete(
  "/:profileId",
  authMiddleware(UserRole.ADMIN, UserRole.TUTOR),
  tutorProfileController.deleteTutorProfile,
);

export const tutorProfileRouter: Router = router;
