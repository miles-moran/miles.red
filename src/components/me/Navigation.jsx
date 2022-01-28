import { useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();
  const PATHS = [
    {
      href: "/",
      name: "home",
    },
    {
      href: "/projects",
      name: "projects",
    },
    {
      href: "/bio",
      name: "bio",
    },
  ];
  return (
    <div>
      <div>
        <div className="nav">
          {PATHS.map((path) => (
            <a className={path.href === location.pathname ? "mr-05 bg-green filled": "mr-05 bg-green a" } href={path.href} rel="noreferrer">
              {path.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
