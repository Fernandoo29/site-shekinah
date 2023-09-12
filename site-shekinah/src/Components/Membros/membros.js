import styles from './membros.module.css'

import Membro from '../Membro/membro';

export default function Membros({membros}){

    return(
        <section id={styles.membrosSection}>
            <p id={styles.membroTitulo}>Membros</p>
            <div id={styles.membroContent}>
                {
                    membros.map((membro) => (
                        <Membro key={membro.nome} membro={membro}></Membro>
                    ))
                }
            </div>
        </section>
    )
}