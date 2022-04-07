import ornamentImg from './ornament.png';
import githubImg from './GitHub-Mark-32px.png'

export default loadContact;

function loadContact(content) {
  
  const menuDiv = document.createElement('div');
  menuDiv.id = 'tab-content';

  const title = document.createElement('h2');
  title.textContent = "Get in touch with us";

  menuDiv.appendChild(title);

  const contactDetail = document.createElement('div');
  contactDetail.id = 'contact-div';
  const address = document.createElement('p');
  const phone = document.createElement('p');
  const name = document.createElement('p');
  const email = document.createElement('p');
  const divImg = document.createElement('div');
  const tag = document.createElement('a');

  tag.href = "https://github.com/sejego";
  tag.target = '_blank';
  divImg.style.display = 'flex';
  divImg.style.justifyContent = 'center';
  
  address.textContent = "123 P. Gourouni Main Street, Patras, Greece, 12550";
  phone.textContent = "+34 12564 78953";
  email.textContent = "odysseus@tavern.gr";
  name.textContent = "Chef P. Partakalos";
  
  contactDetail.appendChild(address);
  contactDetail.appendChild(phone);
  contactDetail.appendChild(email);
  contactDetail.appendChild(name);
  
  menuDiv.appendChild(contactDetail);

  const ornament = new Image();
  ornament.src = ornamentImg;
  ornament.width = 400;
  ornament.height = 120;
  const imgContainer = document.createElement('div');
  imgContainer.id = 'img-container';

  const github = new Image();
  github.src = githubImg;
  tag.appendChild(github)
  divImg.appendChild(tag);
  menuDiv.appendChild(divImg);

  imgContainer.appendChild(ornament);
  menuDiv.appendChild(imgContainer);
  content.appendChild(menuDiv);
}