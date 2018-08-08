import React from "react";
import { Link } from "react-router-dom";

const SavedSidebar = () => (
    <div className='accordion ui styled'>
  <div className='active title'>
    <i aria-hidden='true' className='dropdown icon' />
    Saved Venues
  </div>
  <div className='content active'>
    <div>
      Saved Venues<div className='accordion'>
        <div className='title'>
          <i aria-hidden='true' className='dropdown icon'/>Venues by FourSquare
        </div>
        <div className='content'> <Link
        to="/mystuff/venues">See All Saved Venues</Link></div>
        <div className='title'>
          <i aria-hidden='true' className='dropdown icon' />Level 1B
        </div>
        <div className='content'>Level 1B Contents</div>
      </div>
    </div>
  </div>
  <div className='title'>
    <i aria-hidden='true' className='dropdown icon' />
    Saved Dresses
  </div>
  <div className='content'>
    <div>
      Saved Dresses by Etsy<div className='accordion'>
        <div className='title'>
          <i aria-hidden='true' className='dropdown icon' />Wedding Dresses
        </div>
        <div className='content'><Link to="/mystuff/dresses">See Saved Wedding Dresses</Link></div>
        <div className='title'>
          <i aria-hidden='true' className='dropdown icon' />Level 2B
        </div>
        <div className='content'>Level 2B Contents</div>
      </div>
    </div>
  </div>
  <div className='title'>
    <i aria-hidden='true' className='dropdown icon' />
    Saved Decor
  </div>
  <div className='content'>
    <div>
      Saved Decor by Etsy<div className='accordion'>
        <div className='title'>
          <i aria-hidden='true' className='dropdown icon' />Decor
        </div>
        <div className='content'><Link to="/mystuff/decor">See Saved Decor</Link></div>
        <div className='title'>
          <i aria-hidden='true' className='dropdown icon' />Level 2B
        </div>
        <div className='content'>Level 2B Contents</div>
      </div>
    </div>
  </div>
</div>
)
export default SavedSidebar