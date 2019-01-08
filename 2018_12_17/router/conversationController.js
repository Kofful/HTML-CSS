const Conversation = require("../models/conversation.model");
const Message = require("../models/message.model");

module.exports.getAllConversations = async (req, res, next) => {
    try {
            const foundConvs = [];
            await Conversation.find({participants: req.user._id})
            .forEach(conversation => {
                Message.find({cid: conversation._id})
                    .sort("-createdAt")
                    .limit(1)
                    .populate({
                        path: "author",
                        select: "firstName lastName photoPath"
                    })
                    .then(message => {
                        conversation.message = message;
                        foundConvs.push(message);
                        req.send(foundConvs);
                    })
            });
    } catch (e) {

    }
};

module.exports.getConversationById = async (req, res, next) => {
    const cid = req.params.id;
    const conversations = await Conversation.findById(cid)
        .select("createdAt body author")
        .sort("createdAt")
        .populate({
            path: "author",
            select: "_id firstName lastName photoPath"
        });
    res.send(conversations);
};

module.exports.createConversation = async (req, res, next) => {
    const currentUser = req.user;
    const { recipient } = req.params;
    const text = req.body.text;

    try {
        const newConversation = new Conversation({
            participants: [
                currentUser._id,
                recipient,
            ]
        });

        const savedConversation = await newConversation.save();
        const newMessage = new Message({
            cid: savedConversation._id,
            text,
            uid: currentUser._id,
        });

        const savedMessage = await new Message.save();
        res.send({conversation: savedConversation, message: savedMessage})
    } catch (e) {
        next(e);
    }
};