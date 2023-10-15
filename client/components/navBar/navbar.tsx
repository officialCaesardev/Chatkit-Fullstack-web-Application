'use client';

import React from 'react';
import Image from 'next/image';
import './navbar.css';
import { Button } from '@/components/ui/button';
import ToolTip from '@/utils/toolTip';
import Sidebar from '@/components/navBar/sidebar/sidebar';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div>
      <section className="px-10 py-5 flex flex-row items-center gap-5 justify-between">
        <ToolTip tip="ChatSync">
          <div className="cursor-pointer nav-branding flex flex-row items-center gap-5 ">
            <Image src="/assets/logo.svg" alt="Logo" width={35} height={35} />
            <h3>ChatSync</h3>
          </div>
        </ToolTip>
        {/* Desktop start */}
        <div className="nav-links flex flex-row items-center gap-10">
          <Link
            activeClass="active"
            to="Home-section"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            <h3 className="cursor-pointer">Home</h3>
          </Link>
          <Link
            activeClass="active"
            to="About-section"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            <h3 className="cursor-pointer">About</h3>
          </Link>
          <Link
            activeClass="active"
            to="Contact-section"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            <h3 className="cursor-pointer">Contact</h3>
          </Link>
        </div>
        <div className="nav-cta">
          <Button>
            <h3>Login</h3>
          </Button>
        </div>
        {/* Desktop End */}
        {/* Mobile Start */}
        <Sidebar />
        {/* Mobile End */}
      </section>
    </div>
  );
};

export default Navbar;
