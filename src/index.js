// eslint-disable-next-line import/no-extraneous-dependencies, no-unused-vars
import _ from 'lodash';
import './style.css';

const containerDiv = document.querySelector('.content');

// HTML content to be placed in it's own module
const testHeader = `
 <header>
    <h3>Restaurant</h3>
    <nav>
      <div class='navBtn' id='selectHome'>Home</div>
      <div class='navBtn' id='selectMenu'>Menu</div>
      <div class='navBtn' id='selectContact'>Contact</div>
    </nav>
  </header>`;

const testHome = ` 
  <main>
    <div class='infoBlock'>
    <h1>Home Page</h1>
    <p>Lorem ipsum dolor sit amet,<br><br> consectetur adipiscing elit, sed<br><br> do eiusmod tempor incididunt<br><br>  ut labore et dolore magna aliqua.</p>
    </div>
  </main>
  <footer>
    <p>Copyright © 2023 Dynamic Restaurant</p>
  </footer>`;

const testMenu = `
  <main>
    <h1>Our Menu</h1>
    <p>placeholder for restaurant menu</p>
  </main>
  <footer>
    <p>Copyright © 2023 Dynamic Restaurant</p>
  </footer>`;

const testContact = `
  <main>
    <h1>Our Contact Details</h1>
    <p>placeholder for restaurant contact</p>
  </main>
  <footer>
    <p>Copyright © 2023 Dynamic Restaurant</p>
  </footer>`;

const testFunc = () => {
  window.addEventListener('load', () => {
    containerDiv.insertAdjacentHTML('beforebegin', testHeader);
    containerDiv.insertAdjacentHTML('afterbegin', testHome);

    const homeBtn = document.querySelector('#selectHome');
    const menuBtn = document.querySelector('#selectMenu');
    const contactBtn = document.querySelector('#selectContact');

    menuBtn.addEventListener('click', () => {
      contactBtn.classList.remove('select');
      homeBtn.classList.remove('select');
      menuBtn.classList.add('select');
      containerDiv.textContent = '';
      containerDiv.insertAdjacentHTML('afterbegin', testMenu);
    });

    contactBtn.addEventListener('click', () => {
      menuBtn.classList.remove('select');
      homeBtn.classList.remove('select');
      contactBtn.classList.add('select');
      containerDiv.textContent = '';
      containerDiv.insertAdjacentHTML('afterbegin', testContact);
    });

    homeBtn.addEventListener('click', () => {
      contactBtn.classList.remove('select');
      menuBtn.classList.remove('select');
      homeBtn.classList.add('select');
      containerDiv.textContent = '';
      containerDiv.insertAdjacentHTML('afterbegin', testHome);
    });
  });
};

testFunc();
