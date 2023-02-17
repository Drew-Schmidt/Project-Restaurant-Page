const containerDiv = document.querySelector('.content');

const createContact = () => {
  const contactContent = `
  <main>
    <h1>Our Contact Details</h1>
    <p>placeholder for restaurant contact</p>
  </main>
  <footer>
    <p><a href="https://www.freepik.com/free-photo/coffee-beans-with-props-making-coffee_5009127.htm#query=cafe%20background&position=17&from_view=keyword&track=ais">Image by valeria_aksakova</a> on Freepik</p>
  </footer>`;

  containerDiv.textContent = '';
  containerDiv.insertAdjacentHTML('afterbegin', contactContent);
};

export default createContact;
