import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
    <div className='accordion ui styled'>
  <div className='active title'>
    <i aria-hidden='true' className='dropdown icon' />
    Venues
  </div>
  <div className='content active'>
    <div>
      Venues<div className='accordion'>
        <div className='title'>
          <i aria-hidden='true' className='dropdown icon'/>Venues by FourSquare
        </div>
        <div className='content'> <Link
        to="/browse/venues">See All Venues</Link></div>
        <div className='title'>
          <i aria-hidden='true' className='dropdown icon' />Level 1B
        </div>
        <div className='content'>Level 1B Contents</div>
      </div>
    </div>
  </div>
  <div className='title'>
    <i aria-hidden='true' className='dropdown icon' />
    Dresses
  </div>
  <div className='content'>
    <div>
      Dresses by Etsy<div className='accordion'>
        <div className='title'>
          <i aria-hidden='true' className='dropdown icon' />Wedding Dresses
        </div>
        <div className='content'><Link to="/browse/dresses">See Wedding Dresses</Link></div>
        <div className='title'>
          <i aria-hidden='true' className='dropdown icon' />Level 2B
        </div>
        <div className='content'>Level 2B Contents</div>
      </div>
    </div>
  </div>
  <div className='title'>
    <i aria-hidden='true' className='dropdown icon' />
    Decor
  </div>
  <div className='content'>
    <div>
      Decor by Etsy<div className='accordion'>
        <div className='title'>
          <i aria-hidden='true' className='dropdown icon' />Decor
        </div>
        <div className='content'><Link to="/browse/decor">See Decor</Link></div>
        <div className='title'>
          <i aria-hidden='true' className='dropdown icon' />Level 2B
        </div>
        <div className='content'>Level 2B Contents</div>
      </div>
    </div>
  </div>
</div>
)
export default Sidebar