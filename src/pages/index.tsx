import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import Menu from "../components/menu/menu"
import About from "../components/about/about"
import Experience from "../components/experience/experience"
import Projects from "../components/projects/projects"
import Contact from "../components/contact/contact"

const IndexPage: React.FC<PageProps> = () => {
  const [screen, setScreen] = React.useState('menu');

  const backToMenu = () => {
    setScreen('menu');
  }

  const visibleComponent = () => {
    switch(screen) {
      case 'menu':
        return <Menu setScreen={setScreen}/>
      case 'about':
        return <About backToMenu={backToMenu}/>
      case 'experience':
        return <Experience backToMenu={backToMenu}/>
      case 'projects':
        return <Projects backToMenu={backToMenu}/>
      case 'contact':
        return <Contact backToMenu={backToMenu}/>
      default:
        return <Menu setScreen={setScreen}/>;
    }
  }

  return (
    <Layout>
      {visibleComponent()};
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Ryan Dimaranan - Home</title>
