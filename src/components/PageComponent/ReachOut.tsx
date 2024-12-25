import { gruzContact, gruzContactLink } from "@/data/GruzData/data"
import SectionTitle from "../SectionTitle"

const ReachOut = () => {
  return (
    <section className="flex flex-col gap-0.5">
      <SectionTitle title="Reach out to me" />
      <div className=" flex flex-col gap-2.5">
        <p>{gruzContact}</p>
        <div>
          <div className=" flex flex-wrap items-center gap-2">
            {gruzContactLink.map((link) => (
              <a className="btn" key={link.id} target="_blank" href={link.link}>
                <link.icon />
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReachOut
