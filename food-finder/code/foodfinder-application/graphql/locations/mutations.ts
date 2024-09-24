import { updateWishlist } from "@/mongoose/locations/services";

interface UpdateWishlistInterface {
    user_id: string;
    location_id: string;
}

export const locationMutations = {
    removeWishlist: async(
        _: any,
        param: UpdateWishlistInterface,
        context: {}
    ) => {
        return await updateWishlist(param.location_id, param.user_id, "remove");
    },
    addWishlist: async (_: any, param: UpdateWishlistInterface, context: {}) => {
        return await updateWishlist(param.location_id, param.user_id, "add");
    },
};