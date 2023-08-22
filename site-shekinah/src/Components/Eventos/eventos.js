import styles from './eventos.module.css'

import React, { useState, useEffect } from 'react';

export default function Eventos({agenda}){
    const [imgArray, setImgArray] = useState([]);

    useEffect(() => {
        let promiseArr = agenda.map(evento => {
            return carregaImg(evento.banner_url)
        });

        Promise.all(promiseArr).then((values) => {
            let valuesArr = values.map(path => {
                return path.default
            })
            setImgArray(valuesArr);
        })
    }, [])

    async function carregaImg(nomeImagem){
        try {
            return await import(`../../img/${nomeImagem}`);
        } catch (error) {
            console.error('Error loading image:', error);
            return 
        }
    }

    return(
        <section>
            <p id={styles.eventoTitulo}>Eventos</p>
            <div id={styles.eventoContent}>
                {
                agenda.map((evento, index) => {
                    return (
                        <div id={styles.eventoContainer}>
                            <div key={evento.titulo} className={styles.evento} style={{backgroundImage: `url(${imgArray[index]})`}}></div>
                            <div id={styles.eventoInfo}>
                                <p>{evento.local}</p>
                                <p>{evento.data}</p>
                            </div>
                        </div>
                    )})
                }
            </div>
        </section>
    )
}