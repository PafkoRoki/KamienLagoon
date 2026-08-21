import CardNav from './CardNav'
import './Header.css'
import logo from '../assets/logo.svg'

  const items = [
    {
      label: "About",
      bgColor: "hsl(178, 52%, 32%)",
      textColor: "#f0f0f0",
      links: [
        { label: "LOCATION OVERVIEW", href: "/Lagoon/#info" },
        { label: "LOCATION", href: "/Lagoon/#location" },
        { label: "PLOT REGISTER", href: "/Lagoon/#spis" },
        { label: "FOR DEVELOPERS", href: "/Lagoon/#dev" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "hsl(177, 55%, 48%)",
      textColor: "#f0f0f0",
      links: [
        { label: "INTERACTIVE MAP", href: "/Lagoon/#map" },
        { label: "3D MODEL", href: "/Lagoon/#model" }
      ]
    },
    {
      label: "Contact",
      bgColor: "hsl(171, 42%, 56%)", 
      textColor: "#f0f0f0",
      links: [
        { label: "790 820 114", href: "tel:+48790820114" },
        { label: "EMAIL ✉", href: "mailto:eranpro@wp.pl" }
      ]
    }
  ];

function Header() {
  return (

    <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="#f0f0f0"
      menuColor="#2d2d2d"
      buttonBgColor="#f0f0f0"
      buttonTextColor="#f0f0f0"
      ease="power3.out"
      theme="dark"
      />
  )
}

export default Header