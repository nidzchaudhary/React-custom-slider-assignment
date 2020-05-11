import React from 'react'
import Link from 'next/link'

export const Header: React.StatelessComponent<{ data:any }> = ({ data }) => {
    return (
        <header>
        <div className="column12container main_container">
            <div className="column12">
                <nav>
                    <ul>
                        <li><a href="/">
                            <span className="upcoming">Upcoming<span className="blinker"></span></span>
                            Live Consultation</a></li>
                        <li><a href="/">Buy Plans</a></li>
                        <li><a href="/">View Plans</a></li>
                        <li><a href="/" className="login">Log In</a></li>
                    </ul>
                </nav>
            </div>
        </div>

    </header>

    );
    };