const locationTypeDefsMutations = `
    addWishlist(location_id: String!, user_id: String!): Location!
    removeWishlist(location_id: String!, user_id: String!): Location!
`;

export default locationTypeDefsMutations;