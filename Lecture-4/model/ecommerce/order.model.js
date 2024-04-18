import mongoose from "mongoose";
// mini model for order
const orderItemsSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },

},);

const orderSchema = new mongoose({
    orderPrice: {
        type: Number,
        required: true,
        default: 0
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    orderItems: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },

    orderItems: {
        type: [orderItemsSchema],
        required: true
    },
    address: {
        type: String,
        required: true,
        lowercase: true
    },

    status: {
        type: String,
        enum: ["pending", "completed", "cancelled", "delivered"],
        default: "pending"
    }


}, { timestamps: true });
export const Order = mongoose.model("Order", orderSchema);
