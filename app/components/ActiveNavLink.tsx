import { NavLink } from "@remix-run/react";

const ActiveNavLink = ({ to, value }: { to: string; value: string }) => {
  return (
    <NavLink
      className={({ isActive, isPending }) =>
        `text-3xl ${
          isPending ? " text-accent" : isActive ? " text-primary" : ""
        }`
      }
      to={to}
    >
      {value}
    </NavLink>
  );
};

export default ActiveNavLink;
