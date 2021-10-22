/*jshint esversion: 6 */
const user = {
  github: "Elbercaio",
  linkedin: "in/elber-caio-anthony-cadete-lopes-a1a356162",
  instagram: "elbs2246",
  email: "elbercaio@gmail.com",
};

function ChangeBadgeInfo(user) {
  username.textContent = user.name;
  userBio.textContent = user.bio;
  github.href = `https://www.github.com/${user.github}`;
  gitname.textContent = `${user.github}`;
  photo.src = user.image;
  for (let li of links.children) {
    const social_media = li.getAttribute("class");
    if (social_media != "email") {
      li.children[0].href = `https://www.${social_media}.com/${user[social_media]}`;
    } else {
      li.children[0].href = `mailto:${user[social_media]}`;
    }
  }
}

function GetGithubProfile(user) {
  const url = `https://api.github.com/users/${user.github}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      user.name = data.name;
      user.bio = data.bio;
      user.image = data.avatar_url;
      ChangeBadgeInfo(user);
    });
}
GetGithubProfile(user);
// Arrow functions (python lambda)
// (argumento1, argumento2) => {}
