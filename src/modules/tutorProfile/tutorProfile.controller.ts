import { Request, Response } from "express";
import { tutorProfileService } from "./tutorProfile.service";

// CREATE tutor profile
const createTutorProfile = async (req: Request, res: Response) => {
  try {
    const user = req.user;

    if (!user) {
      return {
        success: false,
        message: "You are not a user, Please login and try again",
      };
    }

    const result = await tutorProfileService.createTutorProfile(req.body, user);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// GET Tutor profiles
const getAllTutorProfiles = async (req: Request, res: Response) => {
  try {
    const result = await tutorProfileService.getAllTutorProfiles();
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getOwnTutorProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return {
        success: false,
        message: "Your don't have any profile, please create a profile",
      };
    }

    const result = await tutorProfileService.getOwnTutorProfile(userId);
    console.log(result);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE Profile by user or by admin
const deleteTutorProfile = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    const { profileId } = req.params;

    if (!user) {
      return {
        success: false,
        message: "User not available, please create your account",
      };
    }

    const result = await tutorProfileService.deleteTutorProfile(
      user,
      profileId as string,
    );

    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const tutorProfileController = {
  createTutorProfile,
  getAllTutorProfiles,
  getOwnTutorProfile,
  deleteTutorProfile,
};
