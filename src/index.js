// eslint-disable-next-line import/no-extraneous-dependencies, no-unused-vars
import _ from 'lodash';
import './style.css';

const containerDiv = document.querySelector('.content');

// HTML content to be placed in it's own module
const headerContent = `
 <header>
    <h3>Coffee Spot</h3>
    <nav>
      <div class='navBtn' id='selectHome'>Home</div>
      <div class='navBtn' id='selectMenu'>Menu</div>
      <div class='navBtn' id='selectContact'>Contact</div>
    </nav>
  </header>`;

const homeContent = ` 
  <main>
    <div class='infoBlock'>
    <h1 id='homeTitle'>Est. 2023</h1>
    <p>We are dedicated to bringing<br><br> our customers the finest coffee<br><br>from around the world and a<br><br>new memory in every cup.</p>
    </div>
  </main>
  <footer>
    <p><a href="https://www.freepik.com/free-photo/coffee-beans-with-props-making-coffee_5009127.htm#query=cafe%20background&position=17&from_view=keyword&track=ais">Image by valeria_aksakova</a> on Freepik</p>
  </footer>`;

const menuContent = `
  <main class='menuMain'>
    <h1 id='menuTitle'>Menu</h1>
  </main>
  <section class='menu'>        
   <h2 id='menuList'>Coffee</h2>
          <article class="item">
            <p class="flavor">French Vanilla</p><p class="price">3.00</p>
          </article>
          <article class="item">
            <p class="flavor">Caramel Macchiato</p><p class="price">3.75</p>
          </article>
          <article class="item">
            <p class="flavor">Pumpkin Spice</p><p class="price">3.50</p>
          </article>
          <article class="item">
            <p class="flavor">Hazelnut</p><p class="price">4.00</p>
          </article>
          <article class="item">
            <p class="flavor">Mocha</p><p class="price">4.50</p>
          </article>
  
   <section>
          <h2>Desserts</h2>
          <article class="item">
            <p class="dessert">Donut</p><p class="price">1.50</p>
          </article>
          <article class="item">
            <p class="dessert">Cherry Pie</p><p class="price">2.75</p>
          </article>
          <article class="item">
            <p class="dessert">Cheesecake</p><p class="price">3.00</p>
          </article>
          <article class="item">
            <p class="dessert">Cinnamon Roll</p><p class="price">2.50</p>
          </article>
    </section>
  </section>
  <footer>
    <p><a href="https://www.freepik.com/free-photo/coffee-beans-with-props-making-coffee_5009127.htm#query=cafe%20background&position=17&from_view=keyword&track=ais">Image by valeria_aksakova</a> on Freepik</p>
  </footer>`;

const contactContent = `
  <main>
    <h1>Our Contact Details</h1>
    <p>placeholder for restaurant contact</p>
  </main>
  <footer>
    <p><a href="https://www.freepik.com/free-photo/coffee-beans-with-props-making-coffee_5009127.htm#query=cafe%20background&position=17&from_view=keyword&track=ais">Image by valeria_aksakova</a> on Freepik</p>
  </footer>`;

// export {homeContent,menuContent,contactContent}

const createContent = (btn, contentHTML) => {
  const homeBtn = document.querySelector('#selectHome');
  const menuBtn = document.querySelector('#selectMenu');
  const contactBtn = document.querySelector('#selectContact');

  homeBtn.classList.remove('select');
  contactBtn.classList.remove('select');
  menuBtn.classList.remove('select');
  btn.classList.add('select');
  containerDiv.textContent = '';
  containerDiv.insertAdjacentHTML('afterbegin', contentHTML);
};

// The event listeners should be in the main file
const testFunc = () => {
  window.addEventListener('load', () => {
    containerDiv.insertAdjacentHTML('beforebegin', headerContent);
    const homeBtn = document.querySelector('#selectHome');
    const menuBtn = document.querySelector('#selectMenu');
    const contactBtn = document.querySelector('#selectContact');
    containerDiv.insertAdjacentHTML('afterbegin', homeContent);
    homeBtn.classList.add('select');

    homeBtn.addEventListener('click', () => {
      createContent(homeBtn, homeContent);
    });

    menuBtn.addEventListener('click', () => {
      createContent(menuBtn, menuContent);
    });

    contactBtn.addEventListener('click', () => {
      createContent(contactBtn, contactContent);
    });
  });
};

testFunc();
