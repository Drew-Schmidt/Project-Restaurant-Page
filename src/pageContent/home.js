const containerDiv = document.querySelector('.content');

const createHome = () => {
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

  containerDiv.textContent = '';
  containerDiv.insertAdjacentHTML('afterbegin', homeContent);
};

export default createHome;
