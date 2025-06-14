import express from "express";
import { ContactController } from "../Controller/ContactController.js";
import { AddMember, GetMember, MemberController, MemberEdit, MemberGet, MemberProfile } from "../Controller/MemberController.js";
import { AddOfferController, DeleteOffer, EditOffer, OfferFind, OfferFindByID } from "../Controller/AddOfferController.js";
import { DeleteTrainer, GetTrainer, GetTrainerById, TrainerController, UpdateTrainer } from "../Controller/TrainerController.js";
import { AdminController, LoginController } from "../Controller/AdminController.js";

const router = express.Router();

router.post("/contact", ContactController);
router.get("/message", MemberController);
router.post("/add/member", AddMember);
router.get("/members", GetMember);
router.post("/add/offer", AddOfferController);
router.put('/edit/offer/:id', EditOffer);
router.delete("/delete/:id", DeleteOffer);
router.get("/classes", OfferFind);
router.get("/classes/:id", OfferFindByID);
router.post("/add/trainer", TrainerController);
router.put("/edit/trainer/:id", UpdateTrainer);
router.delete("/delete/trainer/:id", DeleteTrainer);
router.get("/trainers", GetTrainer);
router.get("/trainers/:id",GetTrainerById);
router.post("/new/admin", AdminController);
router.post("/login", LoginController);
router.get("/member/profile/:id", MemberProfile);
router.get("/member/:id",MemberGet);
router.put("/edit/member/:id", MemberEdit);



export default router;