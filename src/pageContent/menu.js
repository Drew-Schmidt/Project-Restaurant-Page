const containerDiv = document.querySelector('.content');

const createMenu = () => {
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

  containerDiv.textContent = '';
  containerDiv.insertAdjacentHTML('afterbegin', menuContent);
};

export default createMenu;
