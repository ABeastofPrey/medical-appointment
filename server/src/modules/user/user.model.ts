import mongoose from 'mongoose';

const { Schema } = mongoose;

export interface IUser {
    id: string;
    name: string;
}

const userSchema = new Schema({
    name: { type: String, sparse: true, trim: true },
    phone: { type: Number, required: [true, 'Phone cannot be empty'] },
    vcode: { type: Number, required: [true, 'Validation code cannot be empty'] },
    disabled: { type: Boolean, default: false }
}, {
    timestamps: true
});

export const User = mongoose.model('User', userSchema);
