// Création de la fonction pour vérifier si l'utilisateur est connecté
async function checkUserConnected () {
    const token = localStorage.getItem('token');
    // Vérification présence token
       console.log(token);
    
   const userConnected = token != null && token != undefined && token != '';
   
   if (userConnected) {
      // Si l'utilisateur est connecté 
         // Changement du bouton "login" en "logout"  
         const loginLink = document.querySelector(".login__link");
         loginLink.textContent = "logout";
         loginLink.addEventListener("click", userLogOut);
 
         // Affichage des éléments : barre d'édition, bouton "modifier"
         const navEdition = document.getElementById('navEdition');
         navEdition.style.display = 'flex';
         const buttonModify = document.querySelector(".buttonModify");
         buttonModify.style.display = 'block';
    
 
         // Les filtres sont masqués
         const filtersSection = document.querySelector(".filters");
         filtersSection.style.display = 'none';
   } else {
      // Si l'utilisateur est déconnecté
         // Logout redevient login
         const loginLink = document.querySelector(".login__link");
         loginLink.textContent = "login";
 
         // Les éléments d'édition sont masqués
         const navEdition = document.getElementById('navEdition');
         navEdition.style.display = 'none';
         const buttonModify = document.querySelector(".buttonModify");
         buttonModify.style.display = 'none';
         
 
         // Les filtres sont visibles 
         const filtersSection = document.querySelector(".filters");
         filtersSection.style.display = 'flex';
   }
 }
 
 // Fonction de déconnexion
 function userLogOut() {
   // Nettoyage du localStorage => suppression du token
   localStorage.clear();
   // Rechargement de la page 
   window.location.reload();
 }