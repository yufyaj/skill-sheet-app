import { NavLink } from "@remix-run/react";

export default function ActiveNavLink({
  to,
  value,
}: {
  to: string;
  value: string;
}) {
  return (
    <NavLink
      reloadDocument
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
}
