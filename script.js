
// Sélectionnez tous les éléments avec la classe "astuce"
const astuces = document.querySelectorAll('.astuce');

// Parcourez chaque élément et ajoutez les écouteurs d'événements
astuces.forEach(function(astuce) {
  astuce.addEventListener('mouseover', function() {
    astuce.style.backgroundColor = '#a5bedc';
  });

  astuce.addEventListener('mouseout', function() {
    astuce.style.backgroundColor = '#8596ab';
  });
});


// Sélectionnez tous les éléments avec la classe "membre"
const membres = document.querySelectorAll('.membre');

// Parcourez chaque membre et ajoutez l'événement de clic
membres.forEach(function(membre) {
    membre.addEventListener('click', function() {
        // Ajoutez la classe "actif" au membre cliqué
        membre.classList.toggle('actif');
        
        // Parcourez tous les membres et supprimez la classe "actif" des autres membres
        membres.forEach(function(autreMembre) {
            if (autreMembre !== membre) {
                autreMembre.classList.remove('actif');
            }
        });
    });
});
