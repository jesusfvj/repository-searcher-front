import { Repository } from "../interface/repository";

export const sortTime = (data: Array<Repository>) => {
    const sortedData = data.sort((a, b) => {
        /**Sort the array of objects dependind to their last updated time*/
        /**Convert the updatedAt strings to Date objects for comparison and sort them according to their update time*/
        const dateA = new Date(a.updatedAt);
        const dateB = new Date(b.updatedAt);

        if (dateA > dateB) {
            return -1;
        }
        if (dateA < dateB) {
            return 1;
        }
        return 0;
    });
    return sortedData;
}

export const sortName = (data: Array<Repository>) => {
    /**Sort the array of objects acording to their name*/

    const sortedData = data.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    return sortedData;
};

export const sortStars = (data: Array<Repository>) => {
    /**Sort the array of objects acording to their stars*/
    const sortedData = data.sort((a, b) => b.stargazerCount - a.stargazerCount);
    return sortedData
  };