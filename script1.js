
document.addEventListener('DOMContentLoaded', function () {
    const categoriesList = document.getElementById('categories-list');
    const categoryPhotos = document.querySelectorAll('.category-photos');

    // Par défaut, afficher les photos de la catégorie "Yoga"
    showCategoryPhotos('Yoga');

    categoriesList.addEventListener('click', function (event) {
        const selectedCategory = event.target.getAttribute('data-category');
        if (selectedCategory) {
            showCategoryPhotos(selectedCategory);
        }
    });

    function showCategoryPhotos(category) {
        categoryPhotos.forEach(photoContainer => {
            if (photoContainer.classList.contains(category)) {
                photoContainer.classList.add('active');
            } else {
                photoContainer.classList.remove('active');
            }
        });
    }
    
    // Nouvelle logique pour afficher les photos par défaut et masquer les autres
    function showDefaultPhotos() {
        categoryPhotos.forEach(photoContainer => {
            if (photoContainer.classList.contains('Yoga')) {
                photoContainer.classList.add('active');
            } else {
                photoContainer.classList.remove('active');
            }
        });
    }

    // Appeler la fonction pour afficher les photos par défaut au chargement
    showDefaultPhotos();
});