
let pronoun =["the","our"];
let adj = ["great","big"];
let noun = ["jogger","raccon","limon","cabrones"];
let ext = [".com", ".net", ".us", ".io", ".es"];

let domaingGenarator = () => {

     let pronoun1 = pronoun[Math.floor((Math.random() * pronoun.length) )] ;
     let adj1 = adj[Math.floor(Math.random() * adj.length)] ;
     let noun2 = noun[Math.floor(Math.random() * noun.length)] ;
     let ext2 = ext[Math.floor(Math.random() * ext.length)];

     console.log(pronoun1 + adj1 + noun2 + ext2);    
     
};
domaingGenarator();

 
