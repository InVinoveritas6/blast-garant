import React from 'react'

//Style
import  './HeaderStyle.scss';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-body'>
                <div> Главная </div>
                <div> О нас </div>
                <div> Цены </div>
                <div> Примеры работ </div>
                <div> Отзывы </div>
                <div> Контакты </div>
            </div>
        </div>
        )
    };
       
export default Header;