import styles from './membros.module.css'

import React, { useState, useEffect } from 'react';

export default function Membros({membros}){
    const [imgArray, setImgArray] = useState([]);

    useEffect(() => {
        let promiseArr = membros.map(membro => {
            return carregaImg(membro.foto_url)
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
            console.error('Erro ao carregar a imagem:', error);
            return 
        }
    }

    return(
        <section id={styles.membrosSection}>
            <p id={styles.membroTitulo}>Membros</p>
            <div id={styles.membroContent}>
                {
                membros.map((membro, index) => {
                    return (
                        <div key={membro.nome} id={styles.membroContainer}>
                            <div className={styles.membro} style={{backgroundImage: `url(${imgArray[index]})`}}></div>
                            <div id={styles.membroInfo}>
                                <p>{membro.nome}</p>
                                <p>{membro.cargo}</p>
                            </div>
                        </div>
                    )})
                }
            </div>
        </section>
    )
}