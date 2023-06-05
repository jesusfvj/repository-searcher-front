import { FollowerFollowing } from "../interface/followerFollowing";

export const removeDuplicates = (array: FollowerFollowing[]) => {
    const uniqueArray = array.reduce((unique: FollowerFollowing[], item: FollowerFollowing) => {
        const existingItem = unique.find((element) => element.login === item.login);
        if (!existingItem) {
            unique.push(item);
        }
        return unique;
    }, []);

    return uniqueArray;
};
