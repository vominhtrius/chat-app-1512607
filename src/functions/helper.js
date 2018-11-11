export const compareUserWithName = (userKV_A, userKV_B) => {
    return userKV_A.value.displayName.localeCompare(userKV_B.value.displayName);
}

export const checkUserStar = (stars, user) => {
    const uid = user.key;
    
    if (stars === null) return false;

    return stars[uid] !== undefined;
}