import express from "express";
import { protectRoute } from "../middleware/authMiddleware.js";
import {getMyFriends, getRecommendedUsers, sendFriendRequest,accpetFriendRequest,
    getMyFriendRequest,getOutgoingFriendReqs} from "../controllers/userController.js";

const router = express.Router();

router.use(protectRoute);

router.get("/", getRecommendedUsers);
router.get("/friends", getMyFriends);

router.post("/friend-request/:id", sendFriendRequest);
router.put("/friend-request/:id/accept", accpetFriendRequest);

router.get("/friend-request", getMyFriendRequest);
router.get("outgoing-friend-request", getOutgoingFriendReqs);

export default router;