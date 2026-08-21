import CardNav from './CardNav'
import './0_Header.css'
import logo from '../assets/logo.svg'

  const items = [
    {
      label: "About",
      bgColor: "var(--navy)",
      textColor: "var(--white)",
      links: [
        { label: "LOCATION", href: "/KamienLagoon/#location", ariaLabel: "Location" },
        { label: "PLOT REGISTER", href: "/KamienLagoon/#spis", ariaLabel: "Plot register" },
        { label: "FOR DEVELOPERS", href: "/KamienLagoon/#dev", ariaLabel: "Information for developers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "var(--navy)",
      textColor: "var(--white)",
      links: [
        { label: "INTERACTIVE MAP", href: "/KamienLagoon/#map", ariaLabel: "Interactive map" },
        { label: "3D MODEL", href: "/KamienLagoon/#model", ariaLabel: "3D model" }
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
<div>
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
</div>
  )
}

export default Header