import pitaImage from './greek_pita.png'

export default initialLoad;

const description = `Welcome to Taverna Odyssey! 
                    Here you can learn more about our authentic 
                    Greek cuisine menu, get to know the history 
                    of the place and make a reservation! Καλή όρεξη!`;
const restaurantName = "Taverna Odyssey";

function initialLoad() {
  const headerTitle = document.createElement('h1');
  headerTitle.textContent = restaurantName;


  const descriptionContainer = document.createElement('div');
  descriptionContainer.id = "description";
  
  const desc = document.createElement('p');
  desc.textContent = description;
  desc.id = "description"
  const content = document.getElementById("content");
  
  const pita = new Image();
  pita.src = pitaImage;
  pita.height = 250;
  pita.width = 250;

  descriptionContainer.appendChild(desc);
  descriptionContainer.appendChild(pita);
  content.appendChild(headerTitle);
  content.appendChild(descriptionContainer);

}