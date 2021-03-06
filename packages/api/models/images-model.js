import mongoose from 'mongoose';

const ImageSchema = mongoose.Schema({
    _id: String,
    username: {
        type: String,
        ref: 'user',
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    url: {
        type: String,
        require: true,
    },
    bytes: {
        type: String,
        require: true,
    },
    format: {
        type: String,
        require: true,
    },
    likes: [
        {
            type: String,
            ref: 'user',
        },
        {
            timestamps: true,
        },
    ],
});

const Image = mongoose.model('image', ImageSchema);

export default Image;
