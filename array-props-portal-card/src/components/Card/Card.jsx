import React from 'react'
import './card.css'
import { Bookmark } from 'lucide-react';

const Card = ({ company, posted, title, tags = [], salary, location, logo }) => {
    return (
        <article className="card" role="article" aria-label={`${title} at ${company}`}>
            <div className="card-top">
                <div className="logo">
                    <img src={logo} alt={`${company} logo`} />
                    <div>
                        <div className="company">{company} <span style={{ color: 'var(--muted)', fontWeight: 600, fontSize: '0.82rem', marginLeft: 8 }}>{posted}</span></div>
                    </div>
                </div>

                {/* <button className="save-btn" aria-pressed="false">Save ⤓</button> */}
                <button className="save-btn" aria-pressed="false">Save <Bookmark size={16} /></button>
            </div>

            <div>
                <div className="title">{title}</div>

                <div className="tags">
                    {tags.map((t, i) => <span key={i} className="tag">{t}</span>)}
                </div>

                <div className="hr" role="separator" aria-hidden="true"></div>
            </div>

            <div className="card-bottom">
                <div>
                    <div className="salary">{salary}</div>
                    <div className="location">{location}</div>
                </div>

                <div>
                    <button className="apply-btn">Apply now</button>
                </div>
            </div>
        </article>
    )
}

export default Card
