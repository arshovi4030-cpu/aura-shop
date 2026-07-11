"use client";

import { useState } from "react";
import Link from "next/link";
import "./nav.css";

const items = [
  { name: "Biography", items: ["About", "Early Life", "Education"] },
  { name: "Projects", items: ["Chatbot", "Calculator", "Weather"] },
  { name: "Services", items: ["Design", "Development", "Consulting"] },
  { name: "Contact", items: ["Email", "Phone", "Social"] },
];

export default function Nav({ search, setSearch, count }) {
  const [activeItem, setActiveItem] = useState(null);
  const [submenuItem, setSubmenuItem] = useState(null);
  const [translateX, setTranslateX] = useState("0");

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
        <img className="logo" src="/logo.svg" alt="AURA" />
        <div
          className="menu"
          onMouseLeave={() => setActiveItem(null)}
        >
          <ul>
            {items.map((item) => (
              <li
                key={item.name}
                onMouseEnter={(event) => handleHover(item, event)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        <input
          className="search"
          placeholder="جستجوی عطر..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="actions">
          <Link href="/cart" className="cart-icon">
            🛒
            <span>{count}</span>
          </Link>
          <div className="user-icon">👤</div>
        </div>
      </nav>
      <div
        style={{ translate: `${translateX} 0` }}
        className={`submenu ${isOpen ? "open" : ""}`}
        onMouseEnter={() => setActiveItem(submenuItem)}
        onMouseLeave={() => setActiveItem(null)}
      >
        {items.map((item) => (
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
    </>
  );
}