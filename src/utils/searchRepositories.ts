import { Repository } from "../interface/repository";

export const searchRepositories = (query: string, sortedRepositories:Repository[]) => {
    /**Convert the query to lowercase for case-insensitive matching*/
    const lowerCaseQuery = query.toLowerCase();

    /** Filter the sorted repositories based on the search query */
    const foundRepositories = sortedRepositories.filter((repository) => {
      const { name, description, isPrivate, primaryLanguage, forkedFrom } = repository;
      /**Check if any of the properties match the query*/
      return (
        (name && name.toLowerCase().includes(lowerCaseQuery)) ||
        (description && description.toLowerCase().includes(lowerCaseQuery)) ||
        (primaryLanguage && primaryLanguage.name && primaryLanguage.name.toLowerCase().includes(lowerCaseQuery)) ||
        (forkedFrom && forkedFrom.name.toLowerCase().includes(lowerCaseQuery)) ||
        (isPrivate ? 'private' : 'public').includes(lowerCaseQuery)
      );
    });
    return foundRepositories;
  }