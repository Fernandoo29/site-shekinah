import styles from './midia.module.css'

import {useState, useEffect} from 'react'

export default function Midia({midias}){
    console.log(midias);
    const [selectedMidia, setSelectedMidia] = useState(midias[0]);

    function changeSelectedMidia(midia){
        setSelectedMidia(midia)
    }

    return (
        <>
            <p id={styles.midiaTitulo}>Mídias</p>
            <div id={styles.midiaContainer}>
                <div id={styles.display}>
                    {
                        selectedMidia.tipo === "video" ? 
                        <iframe style={{marginRight: "30px", width: "70%"}} height="555" src={`https://www.youtube.com/embed/${selectedMidia.url}?si=1cG0cQO9L4Lpu19_`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> 
                        :
                        <div id={styles.foto} style={{backgroundImage: `url(${selectedMidia.url})`}}></div>
                    }
                </div>
                <div id={styles.midiaList}>
                    {
                        midias.map((midia, index) => {
                            return (
                                <div midia={midia} key={midia.titulo} id={styles.midiaThumbContainer} style={{marginTop: index === 0 && "0px"}} onClick={() => changeSelectedMidia(midia)}>
                                    <div className={styles.midiaThumb} style={{backgroundImage: `url(${midia.thumbnail})`}}></div>
                                    <div className={styles.midiaThumbInfo}>
                                        <p>{midia.titulo}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}