import { ProfileInformation } from "../components/pages/Dashboard/ProfileInformation"
import { RepositoryInformation } from "../components/pages/Dashboard/RepositoryInformation"
import { RepositoryTitles } from "../components/pages/Dashboard/RepositoryTitles"

export const Dashboard = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="h-[4vh]">
        </div>
        <nav className="w-full h-[7vh] pb-2 flex justify-center items-center border-b-[0.1rem] border-[#1f2328]">
          <RepositoryTitles />
        </nav>
        <section className="flex gap-4 px-10 h-full">
          <ProfileInformation />
          <RepositoryInformation />
        </section>
      </div>
    </>
  )
}
