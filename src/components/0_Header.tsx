import CardNav from './CardNav'
import './0_Header.css'
import logo from '../assets/logo.svg'

  const items = [
    {
      label: "About",
      bgColor: "var(--navy)",
      textColor: "var(--white)",
      links: [
        { label: "LOCATION OVERVIEW", href: "/Lagoon/#info", ariaLabel: "Location overview" },
        { label: "LOCATION", href: "/Lagoon/#location", ariaLabel: "Location" },
        { label: "PLOT REGISTER", href: "/Lagoon/#spis", ariaLabel: "Plot register" },
        { label: "FOR DEVELOPERS", href: "/Lagoon/#dev", ariaLabel: "Information for developers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "var(--navy)",
      textColor: "var(--white)",
      links: [
        { label: "INTERACTIVE MAP", href: "/Lagoon/#map", ariaLabel: "Interactive map" },
        { label: "3D MODEL", href: "/Lagoon/#model", ariaLabel: "3D model" }
      ]
    },
    {
      label: "Contact",
      bgColor: "var(--navy)", 
      textColor: "var(--white)",
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
      baseColor="var(--navy)"
      menuColor="var(--white)"
      buttonBgColor="var(--navy)"
      buttonTextColor="var(--navy)"
      ease="power3.out"
      />
  )
}

export default Header