import React from 'react';
import s from './News.module.css';

const News = () => {
    document.title = 'Samurai - Новости';
    return (
        <div className={s.content}>
            News
        </div>
    )
}

export default News;