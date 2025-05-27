


const people = [
  {
    name: 'Gus Smith',
    image: '/people/gus.jpeg',
    title: 'Founder and Principal Engineer',
    transform: 'scale(160%) translate(5%, 15%)',
  }
]
export const metadata = {
  title: 'People',
  description: 'The people of Southmountain Research.',
}

export default function Page() {
  return (
    <section className="prose">
      {/* <h1 className="font-semibold text-2xl mb-8 tracking-tighter">People</h1> */}
      {people.map((person) => (
        <Card key={person.name} name={person.name} image={person.image} title={person.title} transform={person.transform} />
      ))}
    </section>
  )
}


function Card({ name, image, title, transform }: { name: string; image: string; title?: string, transform?: string }) {
  return (
    <div className="flex flex-col items-center">
      {/* Use fixed sized frame, resize image within it */}
      <div className="w-80 h-80 mb-4 overflow-hidden rounded-md border-2 border-gray-300">
        <img src={image} alt={name}
          style={{
            transform: transform
          }} />
      </div>
      <h2 className="text-lg font-semibold">{name}</h2>
      {title && <p className="text-sm text-gray-600">{title}</p>}
    </div>
  )
}