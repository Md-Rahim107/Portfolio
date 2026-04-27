import Hero   from '../components/Hero'
import About  from '../components/About'

/**
 * HomePage — rendered at route "/"
 * Contains the Hero and About sections.
 * Projects/Blog/Contact live on their own routes.
 */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  )
}
