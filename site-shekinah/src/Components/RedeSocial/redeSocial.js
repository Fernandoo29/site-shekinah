import styles from './redeSocial.module.css'

import { useState, useEffect } from 'react'

// Icones from https://react-icons.github.io/react-icons
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";

export default function RedeSocial({tipo, link}){
    const [tipoRedeSocial, setTipoRedeSocial] = useState()

    useEffect(() => {
      switch (tipo) {
        case "facebook":
            setTipoRedeSocial(styles.facebook);
            break;

        case "instagram":
            setTipoRedeSocial(styles.instagram);
            break;

        case "twitter":
            setTipoRedeSocial(styles.twitter);
            break;
      
        default:
            break;
      }
    }, [])

    // function handleClick(){
    //     window.location.href = 'https://www.google.com';
    // }
    
    return(
        <div onClick={link != null ? () => window.open(link, '_blank') : () => {}} className={`${styles.redeContainer} ${tipoRedeSocial} ${link === null ? styles.redeContainerNull : ""}`}>
            {
                tipo === "facebook" ? 
                    <FaFacebookF className={styles.icone}/> 
                    : tipo === "instagram" ? 
                    <BsInstagram className={styles.icone}/> 
                    : 
                    <RiTwitterXFill className={styles.icone}/>
            }
        </div>
    )
}