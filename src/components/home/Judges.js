import React from 'react'
import './stylesheet/judges.css';
import judgesList from "../../data/judges.json"
import GuestCard from './GuestCard'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

const Judges = () => {
    return (
        <div id="judgesSection">
            {/* couldn't figure out why title wasnt changing to white in css file, so did inline css */}
            <h1 id="title" style={{color: "white"}}>OUR JUDGES</h1>
            <div id="layout">
                {judgesList.map((judge) => (
                    <GuestCard key={"judge_" + judge.id} member={judge} />
                ))
                }
            </div>
        </div>
    )
}


export default Judges;
