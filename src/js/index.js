import '../scss/main.scss';
import plainProject from "../pages/project.html";

// fetch("https://api.github.com/users/galinowsky/repos?sort=created")
//   .then((resp) => resp.json())
//   .then((resp) => {
//     console.log(resp);
//     localStorage.setItem("Projects", JSON.stringify(resp));
//   })
//   .catch(console.log((error) => console.log("error")));

let Projects = JSON.parse(localStorage.getItem("Projects"));
console.log('dupa')

const projList = document.querySelector('.github-list')
for(const project of Projects){
  const {name,html_url, description} = project
  // console.log(`name is: ${name}`)
  // console.log(`html url is: ${html_url}`)
  // console.log(`description is: ${description}`)
  var singleProject = document.createRange().createContextualFragment(plainProject);
  // console.log(singleProject.children[0].lastElementChild)

  // console.log(singleProject);
  
  projList.appendChild(singleProject)
  projList.lastElementChild.id = name;
}

