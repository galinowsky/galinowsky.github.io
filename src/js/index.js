import "../scss/main.scss";
import plainProject from "../pages/project.html";

fetch("https://api.github.com/users/galinowsky/repos?sort=created")
  .then((resp) => resp.json())
  .then((resp) => {
    writeProjects(resp);
  })
  .catch(console.log((error) => console.log("error")));

const writeProjects = (Projects) => {
  const projList = document.querySelector(".github-list");
  for (const project of Projects) {
    const { name, html_url, description, homepage } = project;
    if (name != "galinowsky.github.io") {
      var singleProject = document
        .createRange()
        .createContextualFragment(plainProject);
      // console.log(singleProject.children[0].lastElementChild)
      projList.appendChild(singleProject);
      let thisProj = projList.lastElementChild;
      thisProj.id = name;

      let title = thisProj.querySelector(".github__project--content");
      let desc = thisProj.querySelector(".github__description--content");
      let demoLink = thisProj.querySelector(".github__demo--content");
      let sourceLink = thisProj.querySelector(".github__source--content");

      title.innerHTML = name;
      desc.innerHTML = description;
      sourceLink.setAttribute("href", html_url);
      demoLink.setAttribute("href", homepage);
    }
  }
};
