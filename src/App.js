//import { Header } from "@salutejs/plasma-ui";
//import { Route, Routes } from 'react-router-dom';
//import Profile from "./components/pages/profile";
import React from "react";
import { IconTrashFilled, IconBell, IconDisclosureRight, IconLogout, IconSettings } from '@salutejs/plasma-icons';
import './App.css'
// ./App.css
import { Button, Card, Cell, CellLeft, Container, HeaderSubtitle, HeaderTitle, Headline1, Image, Radiobox, TextField, } from '@salutejs/plasma-ui';


const profile__title = {
  fontsize: 65,
  color: 'red',
  cursor: 'pointer'
}


const App = () => {
  return (
    <div clasaName='profile'>
      <Container clasaName='container'>
        <div clasaName='profile__content'>
          <div>

            {/*<link to='/'>Главная</link> - <HeaderSubtitle>Профиль</HeaderSubtitle>*/}
          </div>
          <Headline1 clasaName={profile__title}>Профиль</Headline1>
          <div clasaName='profile__user'>
            <Image clasaName='profile__image' src="https://static.tildacdn.com/tild6438-6463-4133-a135-653865643865/man.jpg" alt="https://static.tildacdn.com/tild6438-6463-4133-a135-653865643865/man.jpg" style={{ position: 'relative' }} />
            <CellLeft><Button view="primary" clasaName='profile__btn'>Изменить фото профиля</Button></CellLeft>
            <Cell
              contentLeft={<IconTrashFilled size="s" color="inherit" />}
              contentRight={<span clasaName='profile__info'>Удалить фото профиля</span>}>

            </Cell>
          </div>
          <HeaderTitle clasaName='profile__title'>Личная информация</HeaderTitle>
          <HeaderSubtitle clasaName='profile__title'>Имя</HeaderSubtitle>
          <TextField required clasaName='profile__input' placeholder='Введите имя' type='text'></TextField>
          <HeaderSubtitle clasaName='profile__title'>Отчество</HeaderSubtitle>
          <TextField clasaName='profile__input' placeholder='Введите отчество' type='text'></TextField>
          <HeaderSubtitle clasaName='profile__title'>Фамилия</HeaderSubtitle>
          <TextField required clasaName='profile__input' placeholder='Введите фамилию' type='text'></TextField>
          <HeaderSubtitle clasaName='profile__title'>Пол</HeaderSubtitle>
          <Cell clasaName='profile__gender'
            contentLeft={<Radiobox name="gender" label="Мужской" value="male" />}
            contentRight={<Radiobox name="gender" label="Женский" value="female" />}
          ></Cell>
          <HeaderSubtitle clasaName='profile__title'>Email</HeaderSubtitle>
          <TextField required clasaName='profile__input' placeholder='Введите email' type='text'></TextField>
          <HeaderSubtitle clasaName='profile__title'>Телефон</HeaderSubtitle>
          <TextField required clasaName='profile__input' placeholder='Введите номер телефона' type='tel'></TextField>
          <Button clasaName='profile__btn2' view="primary">Сохранить</Button>
          <Card>
            <Cell clasaName='profile__other'
              content={<HeaderTitle>Медицинские данные</HeaderTitle>}
              contentRight={<IconDisclosureRight size="s" color="inherit" />}
            />
          </Card>
          <Card>
            <Cell
              content={<HeaderTitle>Статистика</HeaderTitle>}
              contentRight={<IconDisclosureRight size="s" color="inherit" />}
            /></Card>
          <Card><Cell
            content={<HeaderTitle>Уведомления</HeaderTitle>}
            contentRight={<IconDisclosureRight size="s" color="inherit" />}
            contentLeft={<IconBell size="s" color="inherit" />}
          /></Card>
          <Card><Cell
            content={<HeaderTitle>Настройки</HeaderTitle>}
            contentRight={<IconDisclosureRight size="s" color="inherit" />}
            contentLeft={<IconSettings size="s" color="inherit" />}
          /></Card>
          <HeaderTitle clasaName='profile__title'>Изменение пароля</HeaderTitle>
          <HeaderSubtitle clasaName='profile__title'>Текущий пароль</HeaderSubtitle>
          <TextField clasaName='profile__input' placeholder='Введите текущий пароль' type='password'></TextField>
          <HeaderSubtitle clasaName='profile__title'>Новый пароль</HeaderSubtitle>
          <TextField clasaName='profile__input' placeholder='Введите новый пароль' type='password'></TextField>
          <HeaderSubtitle clasaName='profile__title'>Подтвердите пароль</HeaderSubtitle>
          <TextField clasaName='profile__input' placeholder='Подтвердите новый пароль' type='password'></TextField>
          <Button view="primary" clasaName='profile__btn2'>Сохранить</Button>
          <Cell
            contentLeft={<IconTrashFilled clasaName='profile__remove_icon' size="s" color="inherit" />}
            contentRight={<span clasaName='profile__remove'>Удалить профиль</span>}>
          </Cell>
          <Cell
            content={<HeaderTitle>Выход</HeaderTitle>}
            contentRight={<IconLogout size="s" color="inherit" />}
          />
        </div>
      </Container >
    </div >
  );
};
export default App;











/*function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}
export default App;*/