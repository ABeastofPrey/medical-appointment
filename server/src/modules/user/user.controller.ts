import { User } from './user.model';

export const getUsers = async (ctx, next) => {
    ctx.body = await User.find();
};

export const getUserById = async (ctx, next) => {
    const _id = null;
    ctx.body = await User.findById(_id);
};

export const createUser = async (ctx, next) => {
    console.log(ctx.query.body);
    const user = {
        name: "Mr.Devil",
        phone: 13585845436,
        vcode: 7758,
        disabled: false,
    };
    ctx.body = await User.create(user);
};

export const updateUser = async (ctx, next) => {
    const _id = null;
    const user = null;
    ctx.body = await User.updateOne({ _id }, { $set: user }, { runValidators: true });
};

export const deleteUser = async (ctx, next) => {
    const _id = null;
    ctx.body = await User.deleteOne({ _id });
};
