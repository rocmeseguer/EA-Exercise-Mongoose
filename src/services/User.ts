// Model and Interface
import { IUser, UserModel } from '../models/User.js';
import logger from "../config/logger.js";
import { Types } from 'mongoose';

// Insert User
export async function createUser(user: Partial<IUser>): Promise<IUser|null> {
    const newUser = new UserModel(user);
    logger.info(user, "createUser - New User to insert");
    return await newUser.save()
}

// Find User by _id
export async function findUserById(id: string): Promise<IUser|null> {
    logger.info({id}, "findUserById - Finding User by ID");
    return await UserModel.findById(id);
}

// Find User by email
export async function findUserByEmail(email: string): Promise<IUser|null> {
    logger.info({email}, "findUserByEmail - Finding User by Email");
    return await UserModel.findOne({email: email});
}

// Delete User by _id
export async function deleteUserById(id: string): Promise<IUser|null> {
    logger.info({id}, "deleteUserById - Deleting User by ID");
    return await UserModel.findByIdAndDelete(id);
}

// Insert Todo of User by _id
export async function insertTodoOfUserById(userId: Types.ObjectId, todoId: Types.ObjectId): Promise<void|null> {
    logger.info({userId, todoId}, "insertTodoOfUserById - Inserting Todo for User");
    return await UserModel.findByIdAndUpdate(userId ,{$addToSet:{todos: todoId}});
}

// Find All Users
export async function findAllUsers(): Promise<IUser[]> {
    logger.info("findAllUsers - Finding All Users");
    return await UserModel.find();
}
