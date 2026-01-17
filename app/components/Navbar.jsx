"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "COLLECTIONS", href: "/collections" },
  { label: "VISIT", href: "/visit" },
  { label: "CONTACT US", href: "/contact-us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu safely after route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <button className="menuToggle" onClick={() => setOpen(true)}>
        MENU
      </button>

      <div className={`menu ${open ? "active" : ""}`}>
        <div className="left" />

        <div className="right-two">
          <button className="close" onClick={() => setOpen(false)}>
            ✕
          </button>

          <ul className="menuList">
            {menuItems.map((item, i) => (
              <li key={item.href}>
                <Link href={item.href} className="menuLink">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="footer">
            <div>
              <p>Wright&apos;s Ferry Mansion</p>
              <p>38 S 2nd St</p>
              <p>Columbia, PA 17512</p>
            </div>

            <div>
              <p>Contact us →</p>
              <p>(717) 684-4325</p>
              <p>Email us →</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
