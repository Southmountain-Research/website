
export const metadata = {
  title: 'Our Work',
  description: 'Previous and ongoing work at Southmountain Research.',
}

export default function Page() {
  return (
    <div className="prose">
      <section>
        {/* <h1>Our Work</h1> */}
        <p className="mb-4">
          Previous and ongoing work at Southmountain Research.
        </p>
      </section>
      <section>
        <h1 className="">Churchroad</h1>
        <a href="https://github.com/gussmith23/churchroad">GitHub link</a>
        <p>
          Churchroad is an open-source technology mapper for FPGAs.
        </p>
      </section>
      <section>
        <h1 className="">Lakeroad</h1>
        <a href="https://github.com/gussmith23/lakeroad">GitHub link</a>
        <p>
          Lakeroad is an open-source technology mapper for FPGAs, specially designed
          to work on complex programmable primitives
          like DSPs.

          Lakeroad was developed during Gus Smith's Ph.D. at the University of Washington.
        </p>
      </section>
    </div>
  )
}
