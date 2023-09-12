import styles from './membro.module.css'

import React, { useState } from 'react';

import RedeSocial from '../RedeSocial/redeSocial';

export default function Membro({membro}){
    const [animacaoAtiva, setAnimacaoAtiva] = useState(false)
    const [firstLoadingPage, setFirstLoadingPage] = useState(true)

    const toggleAnimacao = () => {
        setFirstLoadingPage(false);
        setAnimacaoAtiva(!animacaoAtiva);
    };

    function selectAnimationMover(index){
        switch (index) {
            case 0:
                return styles.animacaoMoverFacebook;
        
            case 1:
                return styles.animacaoMoverInstagram;
        
            case 2:
                return styles.animacaoMoverTwitter;
        
            default:
                break;
        }
    }

    function selectAnimationVoltar(index){
        switch (index) {
            case 0:
                return styles.animacaoVoltarFacebook;
        
            case 1:
                return styles.animacaoVoltarInstagram;
        
            case 2:
                return styles.animacaoVoltarTwitter;
        
            default:
                break;
        }
    }

    return(
        <>
            {
                <div id={styles.membroContainer} onClick={toggleAnimacao}>
                    {/* Redes Sociais */}
                    {
                        membro.redes_sociais.map((redeSocial, index) => (
                            <div key={membro.nome+Object.keys(redeSocial)[0]} className={`${styles.redeSocial} ${animacaoAtiva ? selectAnimationMover(index) : firstLoadingPage ? "" : selectAnimationVoltar(index)}`}>
                                <RedeSocial></RedeSocial>
                            </div>
                        ))
                    }

                    <div className={styles.membro} style={{backgroundImage: `url(${membro.foto_url})`}}></div>
                    <div id={styles.membroInfo}>
                        <p>{membro.nome}</p>
                        <p>{membro.cargo}</p>
                    </div>
                    
                </div>
            }
        </>
    )
}