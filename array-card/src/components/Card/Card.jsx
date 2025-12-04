import React from 'react';
import { Bookmark } from 'lucide-react';
import Tags from '../Tags/Tags';
import styles from './Card.module.css'

const Card = (props) => {
    console.log(props);

    return (
        <div className={styles.card}>
            <div>
                <div className={styles.top}>
                    <img src={props.companyLogo} alt={props.companyName} />
                    <button>Save <Bookmark size={10} /></button>
                </div>
                <div className={styles.middle}>
                    <h3>{props.companyName} <span>{props.datePosted}</span> </h3>
                    <h2>{props.position}</h2>
                    <div className={styles.tagsContainer}>
                        {props.tags.map(function (tag) {
                            return <Tags
                                tagName={tag.tagName}
                                tagBgColor={tag.tagBgColor}
                            />;
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div>
                    <h3>{props.payroll}</h3>
                    <p>{props.location}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div >
    )
}

export default Card;