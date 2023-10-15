'use client';

import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import './sidebar.css';
import gsap from 'gsap';

const Sidebar = () => {
  const [toggleCheck, setToggleCheck] = useState<Boolean>(false);
  const sideBar = useRef<HTMLInputElement>(null);
  const toggleBtn = useRef<HTMLInputElement>(null);
  const menuToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToggleCheck(e.target.checked);
    const tl = gsap.timeline();
    if (e.target.checked == true) {
      tl.to('.sideBar', {
        display: 'block',
        duration: 0.1,
      })
        .to('.slider-full-bg', {
          opacity: 1,
          duration: 0.1,
        })
        .to('.bars', {
          backgroundColor: 'white',
          duration: 0.02,
        })
        .to('.sidebar-bg', {
          right: '0%',
          duration: 0.3,
          ease: 'power1.out',
        });
    } else {
      tl.to('.sidebar-bg', {
        right: '-100%',
        duration: 0.3,
        ease: 'power1.out',
      })
        .to('.bars', {
          backgroundColor: 'black',
          duration: 0.02,
        })
        .to('.slider-full-bg', {
          opacity: 0,
          duration: 0.05,
        })
        .to('.sideBar', {
          display: 'none',
          duration: 0.1,
        });
    }
  };
  return (
    <>
      <div className="menu-toggle hidden" ref={sideBar}>
        <input
          type="checkbox"
          id="checkbox"
          className="hidden"
          onChange={menuToggle}
        />
        <label htmlFor="checkbox" className="toggle">
          <div ref={toggleBtn} className="bars" id="bar1"></div>
          <div ref={toggleBtn} className="bars" id="bar2"></div>
          <div ref={toggleBtn} className="bars" id="bar3"></div>
        </label>
      </div>
      <div className="sideBar">
        <div className="sidebar-bg">
          <div className="menu-navLinks flex flex-col justify-center items-center gap-10">
            <h3 className="cursor-pointer menu-navLink">Home</h3>
            <h3 className="cursor-pointer menu-navLink">About</h3>
            <h3 className="cursor-pointer menu-navLink">Contact</h3>
            <div className="nav-cta-mobile w-full px-5 ">
              <Button variant={'outline'} className="w-full">
                <h3>Login</h3>
              </Button>
            </div>
          </div>
        </div>
        <div className="slider-full-bg" />
      </div>
    </>
  );
};

export default Sidebar;
