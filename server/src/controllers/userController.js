import User from '../models/User.js';

export async function getRecommendedUsers(req,res){
    try{
        const currentUserId = req.user.id;
        const currentUser = req.user;

        const getRecommendedUsers  = await User.find({
            $and:[
                {_id:{$ne: currentUserId}},
                {$id:{$nin: currentUser.friends}},
                {isOnboarded:true}
            ]
        })
        res.status(200).json( getRecommendedUsers)
    }catch(error){
        console.log("Error in getRecommendedUsers controller", error.message);
        res.status(500).json({message:"Internal server error"});
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
        const {id:recipient } = req.params;

        // prevent sending req to yourself 
        if(myId === recipientId){
            return res.stauts(400).json({message:"you can't send friend to yourself "});

        }
        recipient = await User.findById(recipientId)
        if(!recipient){
            return res.status(404).json({message:"recipient not found "});
        }
    }catch(error){
        console.log("Error found in sendFriendRequest", message.error);
        res.status(500).json({message:"error in sendFriendRequest"});

    }
}