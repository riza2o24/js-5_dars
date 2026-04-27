import logo from "../../5-darss/src/assets/logo.png"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"

const nav_menu =[
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Features",
    link: "/features"
  },
  {
    title: "Pricing",
    link: "/pricing"
  },
  {
    title: "Testimonials",
    link: "/testimonials"
  },
  {
    title: "Help",
    link: "/help"
  }
]

const btns = ["Sign In ", "Sign up"]

function App() {

  return (
    <>
      <Header logo={logo} navLink={nav_menu} nav_btns={btns} />
      <Hero/>
    </>
  )
}

export default App
