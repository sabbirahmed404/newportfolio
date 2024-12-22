import React from "react"
import SectionTitle from "../SectionTitle"
import GitHubCalendar from "react-github-calendar"

const DaysICode = () => {
  return (
    <section>
      <div className="flex flex-col gap-3">
        <SectionTitle title="Days I Code" />
        <div className=" mx-auto ">
          <GitHubCalendar
            hideMonthLabels={true}
            blockSize={10}
            username="rinkitadhana"
            style={{
              overflow: "hidden",
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default DaysICode
