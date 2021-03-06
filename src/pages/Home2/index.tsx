import { Footer, Header } from "@components"
import { Section1, Section2, Section3 } from "./_components"

export const Home = () => {
  return (
    <>
      <Header />

      <main>
        <Section1 />
        <Section2 />
        <Section3 />
      </main>

      <Footer />
    </>
  )
}
