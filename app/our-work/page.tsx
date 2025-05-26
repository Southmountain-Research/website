
export const metadata = {
  title: 'Our Work',
  description: 'Previous and ongoing work at Southmountain Research.',
}

export default function Page() {
  return (
    <div className="prose">
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Our Work</h1>
        Previous and ongoing work at Southmountain Research.
      </section>
      <section>
        <h2 className="font-semibold text-2xl mb-8 tracking-tighter">Churchroad</h2>
        Churchroad is an open-source technology mapper for FPGAs.
      </section>
      <section>
        <h2 className="font-semibold text-2xl mb-8 tracking-tighter">Lakeroad</h2>
        Lakeroad is an open-source technology mapper for FPGAs, specially designed
        to work on complex programmable primitives
        like DSPs.

        Lakeroad was developed during Gus Smith's Ph.D. at the University of Washington.
      </section>
    </div>
  )
}
