import styles from './eventos.module.css'

export default function Eventos({agenda}){

    return(
        <section>
            <p id={styles.eventoTitulo}>Eventos</p>
            <div id={styles.eventoContent}>
                {
                agenda.map((evento, index) => {
                    return (
                        <div key={evento.titulo} id={styles.eventoContainer}>
                            <div className={styles.evento} style={{backgroundImage: `url(${evento.banner_url})`}}></div>
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