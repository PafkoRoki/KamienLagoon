import CardNav from './CardNav'
import './0_Header.css'
import logo from '../assets/logo.svg'

  const items = [
    {
      label: "About",
      bgColor: "hsl(178, 52%, 32%)",
      textColor: "#f0f0f0",
      links: [
        { label: "LOCATION OVERVIEW", href: "/Lagoon/#info", ariaLabel: "Location overview" },
        { label: "LOCATION", href: "/Lagoon/#location", ariaLabel: "Location" },
        { label: "PLOT REGISTER", href: "/Lagoon/#spis", ariaLabel: "Plot register" },
        { label: "FOR DEVELOPERS", href: "/Lagoon/#dev", ariaLabel: "Information for developers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "hsl(177, 55%, 48%)",
      textColor: "#f0f0f0",
      links: [
        { label: "INTERACTIVE MAP", href: "/Lagoon/#map", ariaLabel: "Interactive map" },
        { label: "3D MODEL", href: "/Lagoon/#model", ariaLabel: "3D model" }
      ]
    },
    {
      label: "Contact",
      bgColor: "hsl(171, 42%, 56%)", 
      textColor: "#f0f0f0",
      links: [
        { label: "790 820 114", href: "tel:+48790820114", ariaLabel: "Call 790 820 114" },
        { label: "EMAIL ✉", href: "mailto:eranpro@wp.pl", ariaLabel: "Email eranpro@wp.pl" }
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
      />
  )
}

export default Header