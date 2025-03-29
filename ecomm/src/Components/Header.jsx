import React, { Component, useState } from 'react'
import { NavLink } from 'react-router'
import { ShoppingCart, User, Package, Menu, X  } from "lucide-react";
import "./Header.css"

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
        {/* Logo/Icon */}
        <div className="logo">
          <NavLink to="/" className="nav-link">
            <img src="/logo.png" alt="Logo" className="logo-img" />
            <span>Isintu Siyabukwa</span>
          </NavLink>
        </div>
  
        {/* Mobile Menu Toggle */}
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
  
        {/* Navigation Links */}
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <NavLink to="/products" className="nav-link" onClick={() => setIsOpen(false)}>
            <Package size={20} /> Products
          </NavLink>
          
          <NavLink to="/cart" className="nav-link" onClick={() => setIsOpen(false)}>
            <ShoppingCart size={20} /> Cart
          </NavLink>
  
          <NavLink to="/account" className="nav-link" onClick={() => setIsOpen(false)}>
            <User size={20} /> Account
          </NavLink>

          <NavLink to="/login" className="nav-link" onClick={() => setIsOpen(false)}>
            Login/Signup
          </NavLink>
          </div>
          </nav>
      );

}

export default Header
