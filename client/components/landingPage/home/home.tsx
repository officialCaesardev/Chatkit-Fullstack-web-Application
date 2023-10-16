import React from 'react';
import './home.css';
import { Button } from '@/components/ui/button';

const LandingHome = () => {
  return (
    <>
      <div className="home-main">
        <h1 className="Home-headline">
          Chatkit <span>Real-Time</span> Communication Made Effortless
        </h1>
        <h2 className="Home-Sub-headline">
          Join the Conversation Instantly with Chatkit - Where Connections Come
          Alive!
        </h2>
        <div className="w-full flex flex-col items-center justify-center">
          <Button className="cta text-[1.25rem] min-h-[.5rem]">
            Check Out
          </Button>
        </div>
      </div>
    </>
  );
};

export default LandingHome;
