import React from 'react';
import s from './Music.module.css';

const Music = () => {
    document.title = 'Samurai - Музыка';
    return (
        <div className={s.content}>
            Music
        </div>
    )
}

export default Music;