import mongoose from 'mongoose';

const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;

const userSchema = new Schema({
    name: { type: String, sparse: true, trim: true },
    phone: { type: Number, required: [true, 'Phone cannot be empty'] },
    vcode: { type: Number, required: [true, 'Validation code cannot be empty'] },
    disabled: { type: Boolean, default: false },
    isLogin: { type: Boolean, default: true }
}, {
    timestamps: true
});

export const User = mongoose.model('User', userSchema);
