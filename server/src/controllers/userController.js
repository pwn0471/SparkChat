import User from '../models/User.js';
import FriendRequest from "../models/FriendRequest.js"

export async function getRecommendedUsers(req, res) {
  try {
    const currentUserId = req.user.id;
    const currentUser = req.user;

    const recommendedUsers = await User.find({
      $and: [
        { _id: { $ne: currentUserId } }, //exclude current user
        { _id: { $nin: currentUser.friends } }, // exclude current user's friends
        { isOnboarded: true },
      ],
    });
    res.status(200).json(recommendedUsers);
  } catch (error) {
    console.error("Error in getRecommendedUsers controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getMyFriends(req,res){
    try{
        const user = await User.findById(req.user.id)
            .select("friends")
            .populate("friends", "fullName profilePic nativeLanguage learningLanguage");

            res.status(200).json(user.friends);
        
    }catch(error){
        console.log("error in getmyfriends controllers", error.message);
        res.status(500).json({message:"Internal server error"});
    }

} 

export async function sendFriendRequest(req,res){
    try{
        const myId = req.user.id;
        const {id:recipientId } = req.params;

        // prevent sending req to yourself 
        if(myId === recipientId){
            return res.stauts(400).json({message:"you can't send friend to yourself "});

        }
        const recipient = await User.findById(recipientId)
        if(!recipient){
            return res.status(404).json({message:"recipient not found "});
        }

        // check if user is already freiends
        if(!recipient>friends.includes(myId)){
            return res.status(404).json({message:"you are already friends with user"});
        }

        //check if a req already exits
        const existingRequest = await FriendRequest.findOne({
            $or: [
                {sender: myId, recipient: recipientId },
                {sender: recipientId, recipient:myId },
            ],
        });

        if(existingRequest){
            return res 
            .status(400)
            .json({message:"A friend request already exixts between you and this user "});
        }

        const FriendRequest = await FriendRequest.create({
            sender: myId,
            recipient: recipientId,
        });
        res.status(201).json(FriendRequest)

    }catch(error){
        console.log("Error found in sendFriendRequest", message.error);
        res.status(500).json({message:"internal  server error"});

    }
}

export async function accpetFriendRequest(req,res){
    try{
        const {id:requestId} = req.params
        const FriendRequest = await FriendRequest.findById(requestId);

        if(!FriendRequest){
            return res.status(404).json({message: "Friend request not found "});
        }

        // verify the current user is the recipent 
        if(FriendRequest.recipient.toString() !== req.user.id()){
            return res.stauts(403).json({message :"you are not authrized to accept to this request"});
        }

        FriendRequest.status = "accepted";
        await FriendRequest.save();

        // add each user to the other friends arrai]y
        // $addToSet : adds element to an array only if they do not alredy exit.

        await User.findByIdAndUpdate(FriendRequest.sender,{
            $addToSet:{friends:FriendRequest.recipient},
        });

        await User.findByIdAndUpdate(FriendRequest.recipient,{
            $addToSet:{friends:FriendRequest.sender},
        });
        res.status(200).json({message:"frined request accepted"});

    }catch(error){
    }
    console.log("Error in acceptedFriendRequest controllers", error.message);
    res.status(500).json({message : "internal server error"});
}

export async function getMyFriendRequest(req,res){
    try{
        const incomingReq = await getMyFriendRequest(req,res)({
            recipient: req.user.id,
            status:"pending",
        }).population("sender","fullName, profilePic, nativeLanguage");

        const acceptedReqs = await FriendRequest.find({
            sender:req.user.id,
            status:"accpeted",
        }).population("recipent","fullName, profilePic");

        res.status(200).json({incomingReq,acceptedReqs});

    }catch(error){
        console.log("error in getfriendrequest in cntrollers");
        res.status(500).json({message:"internal sever"});
    }
}

export async function getOutgoingFriendReqs(req,res){
    try{
        const outgoingFriendReqs = await FriendRequest.find({
            sender:req.user.id,
            status:"pending",
        }).population("recipent ", "fullName profilePic learningLanguage");
    }catch(error){
        console.log("Error in outgoingFriendreq in crontroller ", error.message);
        res.status(500).json({message:"internal server error"});
    }
}