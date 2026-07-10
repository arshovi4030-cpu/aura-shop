"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";
import "./nav.css";

const menuItems = [
  { name: "خانه", href: "/" },
  { name: "عطر زنانه", href: "/women" },
  { name: "عطر مردانه", href: "/men" },
  { name: "برندها", href: "/brands" },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState(null);
  const [submenuItem, setSubmenuItem] = useState(null);
  const [translateX, setTranslateX] = useState("0");
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  }, []);

  const isOpen = Boolean(activeItem?.items?.length);

  const handleHover = (item, event) => {
    setActiveItem(item);
    if (!item.items?.length) return;
    setSubmenuItem(item);
    const rect = event.currentTarget.getBoundingClientRect();
    setTranslateX(`${rect.x}px`);
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-right">
          <div className="user-icon">👤</div>
          <Link href="/cart" className="cart-icon">
            🛒
            {cartCount > 0 && <span>{cartCount}</span>}
          </Link>
        </div>
        
        <div className="menu" onMouseLeave={() => setActiveItem(null)}>
          <ul>
            {menuItems.map((item) => (
              <li key={item.name} onMouseEnter={(e) => handleHover(item, e)}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <Image className="logo" src={logo} alt="logo" width={200} height={60} />
      </nav>
      {isOpen && (
        <div
          style={{ translate: `${translateX} 0` }}
          className="submenu open"
          onMouseEnter={() => setActiveItem(submenuItem)}
          onMouseLeave={() => setActiveItem(null)}
        >
          {menuItems.map((item) => (
            <div
              key={item.name}
              className={item.name === submenuItem?.name ? "visible" : ""}
            >
              <ul>
                {item.items?.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </>
  );
}