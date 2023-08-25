import styles from './membros.module.css'

export default function Membros({membros}){

    return(
        <section id={styles.membrosSection}>
            <p id={styles.membroTitulo}>Membros</p>
            <div id={styles.membroContent}>
                {
                membros.map((membro, index) => {
                    return (
                        <div key={membro.nome} id={styles.membroContainer}>
                            <div className={styles.membro} style={{backgroundImage: `url(${membro.foto_url})`}}></div>
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