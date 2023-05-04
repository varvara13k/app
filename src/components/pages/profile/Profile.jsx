import React from "react";
import { IoTrashOutline } from 'react-icons/io5';
import './App.css';
import { Container } from "@sberdevices/plasma-ui";
import { Button, Card, CardBody, CardContent, CardHeadline1, CardHeadline2, CardMedia, Image, TextBox, TextBoxBigTitle, TextBoxLabel } from '@salutejs/plasma-ui';
import { } from '@salutejs/plasma-ui/components/ProductCard/ProductCardStepper';


const Profile = () => {
    return (
        <div clasaName='profile'>
            <div clasaName='container'>
                <div clasaName='profile__content'>
                    <div>

                        {/*<link to='/'>Главная</link> - <p>Профиль</p>*/}
                    </div>
                    <h2 clasaName='profile__title'>Фото профиля</h2>
                    <div clasaName='profile__user'>
                        <Image clasaName='profile__image' src="" alt="https://static.tildacdn.com/tild6438-6463-4133-a135-653865643865/man.jpg" />
                        <Button clasaName='profile__btn'>Выберите файл</Button>
                        <p clasaName='profile__remove_icon'>IoTrashOutline</p>
                        <span clasaName='profile__info'>Максимальный размер фото - 5 МБ</span>
                    </div>
                    <h3 clasaName='profile__title'>Личная информация</h3>
                    <p clasaName='profile__title'>Имя</p>
                    <input clasaName='profile__input' placeholder='Введите имя' type='text'></input>
                    <p clasaName='profile__title'>Отчество</p>
                    <input clasaName='profile__input' placeholder='Введите отчество' type='text'></input>
                    <p clasaName='profile__title'>Фамилия</p>
                    <input clasaName='profile__input' placeholder='Введите фамилию' type='text'></input>
                    <p clasaName='profile__title'>Email</p>
                    <input clasaName='profile__input' placeholder='Введите email' type='text'></input>
                    <p clasaName='profile__title'>Телефон</p>
                    <input clasaName='profile__input' placeholder='Введите номер телефона' type='tel'></input>
                    <Button clasaName='profile__btn2'>Сохранить</Button>
                    <h3 clasaName='profile__title'>Изменение пароля</h3>
                    <p clasaName='profile__title'>Текущий пароль</p>
                    <input clasaName='profile__input' placeholder='Текущий пароль' type='password'></input>
                    <p clasaName='profile__title'>Новый пароль</p>
                    <input clasaName='profile__input' placeholder='Новый пароль' type='password'></input>
                    <p clasaName='profile__title'>Подтвердите пароль</p>
                    <input clasaName='profile__input' placeholder='Пароль' type='password'></input>
                    <Button clasaName='profile__btn2'>Сохранить</Button>
                    <h3 clasaName='profile__title'>УДалить профиль</h3>
                    <p clasaName='profile__remove'><span clasaName='profile__remove_icon'>IoTrashOutline</span></p>

                </div>
            </div>
        </div>
    );
};
export default Profile;