import styles from './membros.module.css'

import React, { useState, useRef, useEffect } from 'react';

import Membro from '../Membro/membro';

export default function Membros({membros}){

    const [isDragging, setIsDragging] = useState(false);
    const [moved, setMoved] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [hideLeftArrow, setHideLeftArrow] = useState(true);
    const [hideRightArrow, setHideRightArrow] = useState(false);

    const scrollContainerRef = useRef(null);

    useEffect(() => {
        if(moved){
        
            if (Math.round(scrollContainerRef.current.scrollLeft + scrollContainerRef.current.clientWidth) === scrollContainerRef.current.scrollWidth) {
                setHideRightArrow(true)
            }else{
                setHideRightArrow(false)
            }

            if (scrollContainerRef.current.scrollLeft === 0) {
                setHideLeftArrow(true)
            }else{
                setHideLeftArrow(false)
            }
            
            setMoved(false)
        }
    }, [moved])
    

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - e.currentTarget.offsetLeft);
        setScrollLeft(e.currentTarget.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const moveLeft = () => {
        setMoved(true);
        scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollLeft - 70;
    }

    const moveRight = () => {
        setMoved(true);
        scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollLeft + 70;
    }
  
    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        setMoved(true);
        const x = e.pageX - e.currentTarget.offsetLeft;
        const walk = (x - startX) * 1; 
        e.currentTarget.scrollLeft = scrollLeft - walk;
    };

    return(
        <section id={styles.membrosSection}>
            <p id={styles.membroTitulo}>Membros</p>
            <div ref={scrollContainerRef} id={styles.membroContent} 
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
            >
                <div onClick={moveLeft} className={`${styles.arrowContainer} ${hideLeftArrow ? `${styles.hide}` : ""}`}><span className={styles.arrowLeft}></span></div>
                {
                    membros.map((membro) => (
                        <Membro key={membro.nome} membro={membro}></Membro>
                    ))
                }
                <div onClick={moveRight} className={`${styles.arrowContainer} ${hideRightArrow ? `${styles.hide}` : ""}`} style={{marginLeft: "calc(100% - 55px)"}}><span className={styles.arrowRight}></span></div>
            </div>
        </section>
    )
}