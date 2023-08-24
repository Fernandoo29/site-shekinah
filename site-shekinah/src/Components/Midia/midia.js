import styles from './midia.module.css'

import {useState, useEffect} from 'react'

export default function Midia({midias}){
    console.log(midias);
    const [selectedMidia, setSelectedMidia] = useState();

    return (
        <div id={styles.midiaContainer}>
            <div id={styles.display}>
                
            </div>
            <div id={styles.midiaList}>
                
            </div>
        </div>
    )
}