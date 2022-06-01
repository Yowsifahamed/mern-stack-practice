import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        const PostMessage = await PostMessage.find();
        res.status(200).json(PostMessage);
        console.log(res.status(200).json(PostMessage), "res.status(200).json(PostMessage)")
    } catch (error) {
        res.status(400).json({ messgae: error.messgae })
    }
};


export const createPost = async (req, res) => {
    const post = res.body;
    const newPost = await PostMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ messgae: error.messgae })
    }
};