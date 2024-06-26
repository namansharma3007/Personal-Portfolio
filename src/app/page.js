import HeroContainer from "@components/HeroContainer"
import Navbar from "@components/Navbar"

const Home = () => {
  return (
    <section className="w-[800px] h-[500px] bg-terminal-color rounded-lg overflow-hidden flex flex-col">
      <Navbar/>
      <HeroContainer/>
    </section>
  )
}

export default Home