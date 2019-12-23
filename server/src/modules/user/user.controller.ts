import { User } from './user.model';

export const getUsers = async (ctx) => {
    ctx.body = await User.find();
};

export const getUserById = async (ctx) => {
    const _id = null;
    ctx.body = await User.findById(_id);
};

export const createUser = async (ctx) => {
    ctx.body = await User.create(ctx.request.body);
};

export const updateUser = async (ctx) => {
    const _id = null;
    const user = null;
    ctx.body = await User.updateOne({ _id }, { $set: user }, { runValidators: true });
};

export const deleteUser = async (ctx) => {
    const _id = null;
    ctx.body = await User.deleteOne({ _id });
};
