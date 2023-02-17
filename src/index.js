// eslint-disable-next-line import/no-extraneous-dependencies, no-unused-vars
import _ from 'lodash';
import './style.css';
import headerContent from './pageContent/header';
import createHome from './pageContent/home';
import createMenu from './pageContent/menu';
import createContact from './pageContent/contact';

const containerDiv = document.querySelector('.content');

const btnSelect = (btn) => {
  const homeBtn = document.querySelector('#selectHome');
  const menuBtn = document.querySelector('#selectMenu');
  const contactBtn = document.querySelector('#selectContact');

  homeBtn.classList.remove('select');
  contactBtn.classList.remove('select');
  menuBtn.classList.remove('select');
  btn.classList.add('select');
};

const testFunc = () => {
  window.addEventListener('load', () => {
    containerDiv.insertAdjacentHTML('beforebegin', headerContent);
    const homeBtn = document.querySelector('#selectHome');
    const menuBtn = document.querySelector('#selectMenu');
    const contactBtn = document.querySelector('#selectContact');
    createHome();
    btnSelect(homeBtn);

    homeBtn.addEventListener('click', () => {
      createHome();
      btnSelect(homeBtn);
    });

    menuBtn.addEventListener('click', () => {
      createMenu();
      btnSelect(menuBtn);
    });

    contactBtn.addEventListener('click', () => {
      createContact();
      btnSelect(contactBtn);
    });
  });
};

testFunc();
