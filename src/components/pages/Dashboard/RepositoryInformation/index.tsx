import { RepositoryComponents } from "./RepositoryComponents"
import { SearchHeader } from "./SearchHeader"

export const RepositoryInformation = () => {

  const repositories = [
    {
      title: "exercises-graphic-interface",
      description: "Exercises to learn the use of the graphic interface of VSC for Git",
      language: "JavaScript",
      lastUpdated: "Dec 1, 2022",
      forked: "0",
      forkedFrom: "",
      isPublic: true
    },
    {
      title: "exercises-something-else",
      description: "Exercises for something else",
      language: "Python",
      lastUpdated: "Jan 10, 2023",
      forked: "1",
      forkedFrom: "assembler-institute/php-basics",
      isPublic: true
    },
    {
      title: "exercises-another-one",
      description: "More exercises",
      language: "Java",
      lastUpdated: "Feb 15, 2023",
      forked: "0",
      forkedFrom: "",
      isPublic: true
    },
    {
      title: "exercises-another-one",
      description: "More exercises",
      language: "Java",
      lastUpdated: "Feb 15, 2023",
      forked: "0",
      forkedFrom: "",
      isPublic: false
    },
    {
      title: "exercises-another-one",
      description: "More exercises",
      language: "Java",
      lastUpdated: "Feb 15, 2023",
      forked: "2",
      forkedFrom: "",
      isPublic: true
    },
    {
      title: "exercises-another-one",
      description: "More exercises",
      language: "Java",
      lastUpdated: "Feb 15, 2023",
      forked: "0",
      forkedFrom: "",
      isPublic: false
    },
    {
      title: "exercises-another-one",
      description: "More exercises",
      language: "Java",
      lastUpdated: "Feb 15, 2023",
      forked: "0",
      forkedFrom: "",
      isPublic: true
    },
    {
      title: "exercises-another-one",
      description: "More exercises",
      language: "Java",
      lastUpdated: "Feb 15, 2023",
      forked: "8",
      forkedFrom: "",
      isPublic: true
    },
    {
      title: "exercises-another-one",
      description: "More exercises",
      language: "Java",
      lastUpdated: "Feb 15, 2023",
      forked: "0",
      forkedFrom: "",
      isPublic: true
    },
    {
      title: "exercises-another-one",
      description: "More exercises",
      language: "Java",
      lastUpdated: "Feb 15, 2023",
      forked: "0",
      forkedFrom: "",
      isPublic: false
    },
    {
      title: "exercises-another-one",
      description: "More exercises",
      language: "Java",
      lastUpdated: "Feb 15, 2023",
      forked: "0",
      forkedFrom: "",
      isPublic: true
    },
  ];

  return (
    <div className="flex flex-col w-full md:pl-4">
      <SearchHeader />
      {repositories && repositories.length > 0 &&
        <div>
          {Object.values(repositories).map((repository, index) => {
            return (
              <RepositoryComponents key={index} repository={repository} />
            )
          })}
        </div>
      }
    </div>
  )
}
