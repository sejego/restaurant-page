import chef1 from './chef1.png';
import chef2 from './chef2.png';

export default loadStaff;

let bio = {"Chef P. Partakalos": `Mr. Partakalos is the true master of grilling
            meats. He has 25 years of experience in working at various restaurants in Greece,
            Cyprus, Germany and UK. Mr. Partakalos believes that Greek cuisine is the key to happy & healthy life. `, 
          "Chef S. Ioannou": `Mr. Ioannou specializes mainly in snacks, appetizers and sweets. He has 7 years of experience working
                              in restaurants in Athens, Patras and Thessaloniki. He has attended several competitions and was in semifinals
                              of Greece Master Chef. Mr. Ioannou puts a piece of his soul into every dish he makes.`};
let photos = [chef1, chef2];

function loadStaff(content) {
  let i = 0;
  const bioElement = document.createElement('div');
  bioElement.id = 'tab-content';

  for (const [key, value] of Object.entries(bio)) {
    
    const bioDiv = document.createElement('div');
    bioDiv.id = 'staff-div';

    const bio = document.createElement('div');
    const photoDiv = document.createElement('div');
    const name = document.createElement('h3');
    name.textContent = key;
    const bioText = document.createElement('p');
    bioText.classList.add('bio');
    bioText.textContent = value;
    bio.appendChild(name);
    bio.appendChild(bioText);

    const img = new Image();
    img.src = photos[i];
    img.height = 200;
    img.width = 200;
    photoDiv.appendChild(img);
    bioDiv.appendChild(photoDiv);
    bioDiv.appendChild(bio);
    bioElement.appendChild(bioDiv);

    i += 1;
  }
  content.appendChild(bioElement);
}