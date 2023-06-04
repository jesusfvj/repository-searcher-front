export interface Repository {
    name: string,
    description: string,
    isPrivate: boolean;
    url: string,
    createdAt: string,
    updatedAt: string,
    primaryLanguage: {
      name?: string
    },
    forkedFrom: {
      name: string,
      htmlUrl: string
    },
    lastUpdated: string,
    forkCount: number,
    private: boolean
  }