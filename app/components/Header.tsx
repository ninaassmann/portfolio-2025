import NavItem from "./NavItem";

interface Route {
  title: string;
  link: string;
  subMenu?: { title: string; link: string }[];
}

const routes: Route[] = [
  { link: "/", title: "Home" },
  {
    link: "/projects",
    title: "Projects",
    subMenu: [{ title: "QR Code", link: "/projects/qrcode" }],
  },
];

export default function Header() {
  return (
    <header className="border-b-1 py-4 sticky top-0 bg-white">
      <div className="container flex justify-between items-center">
        Nina Aßmann
        <nav>
          <ul className="flex gap-6">
            {routes.map((route) => (
              <NavItem
                key={route.title}
                link={route.link}
                title={route.title}
                subMenu={route.subMenu}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
