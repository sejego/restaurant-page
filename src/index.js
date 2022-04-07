import initialLoad from "./initialLoad";
import loadMenu from "./loadMenu";
import loadContact from "./loadContact";
import loadStaff from "./loadStaff";
import "./style.css"

function displayTabContents(e) {
  if(this.textContent == "Menu"){
    cleanTab(document.getElementById('tab-content'));
    loadMenu(content);
  }else if(this.textContent == "Staff"){
    cleanTab(document.getElementById('tab-content'));
    loadStaff(content);
  }else if(this.textContent == "Contact"){
    cleanTab(document.getElementById('tab-content'));
    loadContact(content);
  }
}

function cleanTab(tab) {
  if(tab != null){
    tab.remove();
  }
}

initialLoad();

let tabs = []
const tab_1 = document.createElement('div');
const tab_2 = document.createElement('div');
const tab_3 = document.createElement('div');

tab_1.textContent = "Menu";
tab_2.textContent = "Staff";
tab_3.textContent = "Contact";
tabs.push(tab_1);
tabs.push(tab_2);
tabs.push(tab_3);

const tabsDiv = document.createElement('div');
tabsDiv.id = "tabs";
const content = document.getElementById("content");

tabs.forEach(tab => {
  tab.classList.add("btn");
  tab.addEventListener("click", displayTabContents, false);
  tabsDiv.appendChild(tab);
})

content.appendChild(tabsDiv);
