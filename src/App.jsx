import logo from "../../5-darss/src/assets/logo.png"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import heroLogo from "../../5-darss/src/assets/qwet.png"
import Banner from "./components/banner/Banner"
import user from "../../5-darss/src/assets/user.png"

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


// hero
const text="Want anything to be easy with LaslesVPN."

const paragrf="Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us."

const btn="Get Started"


// banner
const bannerText=[
  {
    suma:"90+",
    texts:"Users"
  }

]

function App() {

  return (
    <>
      <Header logo={logo} navLink={nav_menu} nav_btns={btns} />
      <Hero text={text} btn={btn} paragrf={paragrf} heroLogo={heroLogo}/>
      <Banner bannerText={bannerText} user={user}/>
    </>
  )
}

export default App
