import express from "express";
import { ContactController } from "../Controller/ContactController.js";
import { AddMember, GetMember, MemberController, MemberDelete, MemberEdit, MemberGet, MemberProfile } from "../Controller/MemberController.js";
import { AddOfferController, DeleteOffer, EditOffer, OfferFind, OfferFindByID } from "../Controller/AddOfferController.js";
import { DeleteTrainer, GetTrainer, GetTrainerById, TrainerController, UpdateTrainer } from "../Controller/TrainerController.js";
import { AdminController, AdminLogin, LoginController } from "../Controller/AdminController.js";
import { auth } from "../middleware/auth.js";
import { LogoutUser } from "../Controller/LogoutUser.js";

const router = express.Router();


router.post("/login", LoginController);
router.get("/logout",LogoutUser);
router.get("/admin", auth, AdminLogin);
router.post("/contact", ContactController);
router.get("/message", auth, MemberController);
router.post("/add/member", auth, AddMember);
router.get("/members", auth, GetMember);
router.post("/add/offer", auth, AddOfferController);
router.put('/edit/offer/:id', auth, EditOffer);
router.delete("/delete/:id", auth, DeleteOffer);
router.get("/classes", auth, OfferFind);
router.get("/classes/:id", auth, OfferFindByID);
router.post("/add/trainer", auth, TrainerController);
router.put("/edit/trainer/:id", auth, UpdateTrainer);
router.delete("/delete/trainer/:id", auth, DeleteTrainer);
router.get("/trainers", auth, GetTrainer);
router.get("/trainers/:id", auth, GetTrainerById);
router.post("/new/admin", auth, AdminController);
router.get("/member/profile/:id", auth, MemberProfile);
router.get("/member/:id", auth, MemberGet);
router.delete("/member/delete/:id", auth, MemberDelete);
router.put("/edit/member/:id", auth, MemberEdit);

export default router;