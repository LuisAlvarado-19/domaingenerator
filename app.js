
//onload is the first event that happens in the browser*//
window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-domain").innerHTML = domaingGenarator();
  });
  console.log("Hello Rigo from the console! "); //genera la nueva excusa en cada refresh*//
};
let domaingGenarator = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "raccon", "limon", "apple"];
  let ext = [".com", ".net", ".us", ".io", ".es"];

  //usamos el math.floor para que no me genere numeros random con decimales*//
  let pronoun1 = [Math.floor(Math.random() * pronoun.length)];
  let adj1 = [Math.floor(Math.random() * adj.length)];
  let noun1 = [Math.floor(Math.random() * noun.length)];
  let ext1 = [Math.floor(Math.random() * ext.length)];

  return (
    pronoun[pronoun1] + adj[adj1] + noun[noun1] +  ext[ext1]
  );
};
// domaingGenarator();

 
