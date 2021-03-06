import React, { useEffect, useState } from 'react';
import Days from './Days';
import ScheduleRecords from '../../data/schedule.json';
import './schedule.css'

const Schedule = () => {

  const CSS = {
    color: "#000000",
    letterSpacing:"10px",
    textAlign:"center",
  
  }

  return (
    <div className="schedule-wrapper">
        <h1 className="section-title">SCHEDULE</h1>
        <div id="schedule">
            <Days days={ ScheduleRecords }/>
            <p className="subtext">Please note that all times are displayed in Eastern Daylight Time (EDT).</p>
        </div>
    </div>
  )
}

export default Schedule;
