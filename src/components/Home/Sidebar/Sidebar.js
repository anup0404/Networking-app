import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
    const{user}=useAuth0()
   


    function recentItem(topic, link) {
        return (
            <a style={{ textDecoration: 'none' }} href={link} target="_blank" rel='noreferrer'>
                <div className='sidebar_recentItem'>
                    <span className='sidebar_hash'>#</span>
                    <p>{topic} </p>
                </div>
            </a>
        )
    }
    return (
        <div className='sidebar'>
            <div className='sidebar_top'>
                <img  src={user?.picture}  alt='profile' />
                <h2>{user?.name}</h2>
                <h4>{user?.email}</h4>
            </div>
            <div className='sidebar_stats'>
                <div className='sidebar_stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar_statNumber'>3200</p>
                </div>
                <div className='sidebar_stat'>
                    <p>Views on your post</p>
                    <p className='sidebar_statNumber'>1234</p>
                </div>
            </div>

            <div className='sidebar_bottom'>
                <p>Recent</p>
                {recentItem("reactjs", "https://beta.reactjs.org/")}
                {recentItem("softwareengineering", "https://beta.reactjs.org/")}
                {recentItem("design", "https://beta.reactjs.org/")}
                {recentItem("developer", "https://beta.reactjs.org/")}




            </div>
        </div>
    )
}

export default Sidebar