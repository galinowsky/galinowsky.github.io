import '../scss/main.scss';
import plainProject from "../pages/project.html";

fetch("https://api.github.com/users/galinowsky/repos?sort=created")
  .then((resp) => resp.json())
  .then((resp) => {
    console.log(resp);
    localStorage.setItem("Projects", JSON.stringify(resp));
  })
  .catch(console.log((error) => console.log("error")));

let Projects = JSON.parse(localStorage.getItem("Projects"));
console.log('dupa')
for(const project of Projects){
console.log(project)
}