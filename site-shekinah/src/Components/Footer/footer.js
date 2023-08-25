import styles from './footer.module.css'

import RedeSocial from '../RedeSocial/redeSocial'

export default function Footer({}){
    return(
        <footer id={styles.footer}>
            <div id={styles.logo}>
                logo
            </div>
            <div id={styles.footerText}>
                <div id={styles.redesSociaisCaixa}>
                    <RedeSocial></RedeSocial>
                    <RedeSocial></RedeSocial>
                    <RedeSocial></RedeSocial>
                    <RedeSocial></RedeSocial>
                </div>
                <div id={styles.text}>
                    Assembléia de Deus - MIBE <br/>
                    Rua Conde de Rezende, 310 - Bento Ribeiro
                </div>
            </div>
        </footer>
    )
}