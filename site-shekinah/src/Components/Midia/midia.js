import styles from './midia.module.css'

import {useState, useEffect} from 'react'

export default function Midia({midias}){
    console.log(midias);
    const linkVideo1 = "tkhiN-Hvqh4";
    const linkVideo2 = "EVot5doOp9Q";
    const [selectedMidia, setSelectedMidia] = useState(midias[0]);
    const [imgArray, setImgArray] = useState([]);

    // useEffect(() => {
    //     let promiseArr = midias.map(midia => {
    //         return carregaImg(midia.thumbnail)
    //     });

    //     Promise.all(promiseArr).then((values) => {
    //         let valuesArr = values.map(path => {
    //             return path.default
    //         })
    //         setImgArray(valuesArr);
    //     })
    // }, [])

    // async function carregaImg(nomeImagem){
    //     try {
    //         return await import(`../../img/${nomeImagem}`);
    //     } catch (error) {
    //         console.error('Error loading image:', error);
    //         return 
    //     }
    // }

    return (
        <>
            {/* <p id={styles.midiaTitulo}>Mídias</p>
            <div id={styles.midiaContainer}>
                <div id={styles.display}>
                    {
                        selectedMidia.tipo === "foto" ? 
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${linkVideo1}?si=1cG0cQO9L4Lpu19_`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
                        :
                        <div id={styles.foto} style={{backgroundImage: `url(${selectedMidia.url})`}}></div>
                        // <div id={styles.foto}></div>
                    }
                </div>
                <div id={styles.midiaList}>
                    {
                        midias.map(midia => {
                            return (
                                <div key={midia.titulo} id={styles.eventoContainer}>
                                    <div className={styles.evento} style={{backgroundImage: `url(${imgArray[index]})`}}></div>
                                    <div id={styles.eventoInfo}>
                                        <p>{midia.local}</p>
                                        <p>{midia.data}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div> */}
        
        </>
    )
}