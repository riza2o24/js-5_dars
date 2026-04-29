import logo from "../../5-darss/src/assets/logo.png"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import heroLogo from "../../5-darss/src/assets/qwet.png"
import Banner from "./components/banner/Banner"
import user from "../../5-darss/src/assets/user.png"
import Hero2 from "./components/hero2/Hero2"
import Carta from "./components/carta/Carta"
import yes from "../../5-darss/src/assets/card.png"
import illus from "../../5-darss/src/assets/illus"

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

// hero2
const hero22="We Provide Many Features You Can Use"
const hero3="You can explore the features that we provide with fun and have their own functions each feature."
const hero4="We Provide Many Features You Can Use"

function App() {

  return (
    <>
      <Header logo={logo} navLink={nav_menu} nav_btns={btns} />
      <Hero text={text} btn={btn} paragrf={paragrf} heroLogo={heroLogo}/>
      <Banner bannerText={bannerText} user={user}/>
      <Hero2 card={yes} hero22={hero22}  hero22={hero3} hero4={hero4}/>
      <Carta/>
    </>
  )
}

export default App
