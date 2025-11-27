// 1. Définition des Questions et Initialisation

const questions = [
    {
        question: "Quel mot-clé est utilisé pour déclarer une variable en JavaScript ?",
        options: ["var", "string", "declare", "int"],
        reponseCorrecteIndex: 0 // "var"
    },
    {
        question: "Quelle méthode permet d'afficher quelque chose dans la console ?",
        options: ["console.log()", "print()", "document.write()", "alert()"],
        reponseCorrecteIndex: 0 // "console.log()"
    },
    {
        question: "Lequel de ces éléments n'est PAS un type de données primitif ?",
        options: ["Boolean", "String", "Array", "Number"],
        reponseCorrecteIndex: 2 // "Array"
    },
    {
        question: "Quel mot-clé est utilisé pour déclarer une variable de portée de bloc (block scope) ?",
        options: ["var", "let", "const", "let et const"],
        reponseCorrecteIndex: 3 // "let et const"
    },
    {
        question: "Quel opérateur est utilisé pour vérifier à la fois la valeur et le type ?",
        options: ["A. ==", "B. !=", "C. ===", "D. !=="],
        reponseCorrecteIndex: 2 // "C. ==="
    },
    {
        question: "Quel est le type de données de null en JavaScript ?",
        options: ["A. null", "B. undefined", "C. object", "D. string"],
        reponseCorrecteIndex: 2 // "C. object"
    },
    {
        question: "Comment empêcher la soumission d'un formulaire dans un gestionnaire d'événements ?",
        options: ["A. return false;", "B. event.preventDefault();", "C. event.stopImmediatePropagation();", "D. form.abort();"],
        reponseCorrecteIndex: 1 // "B. event.preventDefault();"
    },
    {
        question: "Comment s'appelle le mécanisme qui hisse les déclarations de variables et de fonctions au sommet de leur portée ?",
        options: ["A. Binding", "B. Closure", "C. Hoisting", "D. Scoping"],
        reponseCorrecteIndex: 2 // "C. Hoisting"
    },
    // --- II. Fonctions et Portée (Intermédiaire) ---
    {
        question: "Quel est le principal avantage d'utiliser une fonction fléchée (=>) par rapport à une fonction normale ?",
        options: ["A. Elle est plus courte à écrire.", "B. Elle lie dynamiquement son propre this.", "C. Elle hérite lexicalement de this de la portée englobante.", "D. Elle gère mieux les promesses."],
        reponseCorrecteIndex: 2 // "C. Elle hérite lexicalement de this de la portée englobante."
    },
    {
        question: "Que retourne l'opérateur typeof pour une fonction ?",
        options: ["A. \"function\"", "B. \"object\"", "C. \"undefined\"", "D. \"callable\""],
        reponseCorrecteIndex: 0 // "A. "function""
    },
    {
        question: "Qu'est-ce qu'une Closure (fermeture) en JavaScript ?",
        options: ["A. Une boucle infinie.", "B. Une fonction retournée.", "C. Une fonction ayant accès à la portée externe même après sa terminaison.", "D. Un type d'erreur."],
        reponseCorrecteIndex: 2 // "C. Une fonction ayant accès à la portée externe même après sa terminaison."
    },
    {
        question: "La méthode JavaScript call() est utilisée pour :",
        options: ["A. Exécuter la fonction immédiatement.", "B. Définir la valeur de this et exécuter la fonction avec des arguments passés individuellement.", "C. Définir la valeur de this et exécuter la fonction avec des arguments passés sous forme de tableau.", "D. Appeler une fonction asynchrone."],
        reponseCorrecteIndex: 1 // "B. Définir la valeur de this..."
    },
    {
        question: "Qu'est-ce que l'IIFE (Immediately Invoked Function Expression) ?",
        options: ["A. Une fonction qui s'exécute automatiquement.", "B. Une fonction qui s'exécute immédiatement après sa définition.", "C. Une fonction récursive.", "D. Une expression de fonction fléchée."],
        reponseCorrecteIndex: 1 // "B. Une fonction qui s'exécute immédiatement..."
    },
    // --- III. Structures de Données et ES6+ (Avancé) ---
    {
        question: "Quelle méthode est utilisée pour itérer sur les éléments d'un tableau et retourner un nouveau tableau contenant le résultat d'une fonction appliquée à chaque élément ?",
        options: ["A. forEach()", "B. filter()", "C. reduce()", "D. map()"],
        reponseCorrecteIndex: 3 // "D. map()"
    },
    {
        question: "Que fait l'opérateur de propagation (Spread Operator ...) sur un tableau ?",
        options: ["A. Il inverse l'ordre des éléments.", "B. Il fusionne les éléments en une chaîne de caractères.", "C. Il décompose un itérable en éléments individuels.", "D. Il multiplie les éléments du tableau."],
        reponseCorrecteIndex: 2 // "C. Il décompose un itérable..."
    },
    {
        question: "Quel mot-clé est utilisé pour gérer une opération asynchrone et attendre le résultat d'une Promise ?",
        options: ["A. then", "B. await", "C. yield", "D. next"],
        reponseCorrecteIndex: 1 // "B. await"
    },
    {
        question: "Le Destructuring (déstructuration) permet d'extraire des données de :",
        options: ["A. Objets uniquement", "B. Tableaux uniquement", "C. Objets et tableaux", "D. Fonctions uniquement"],
        reponseCorrecteIndex: 2 // "C. Objets et tableaux"
    },
    {
        question: "Quelle structure de données garantit que chaque élément (clé) n'est présent qu'une seule fois et permet l'itération dans l'ordre d'insertion ?",
        options: ["A. Array (Tableau)", "B. Object (Objet)", "C. Set (Ensemble)", "D. WeakMap"],
        reponseCorrecteIndex: 2 // "C. Set (Ensemble)"
    },
    // --- IV. DOM et Web API ---
    {
        question: "Quelle méthode est la plus courante et recommandée pour sélectionner un seul élément du DOM par sa classe ou son ID ?",
        options: ["A. document.getElementByName()", "B. document.querySelector()", "C. document.getElementById()", "D. document.getElementsByClassName()"],
        reponseCorrecteIndex: 1 // "B. document.querySelector()"
    },
    {
        question: "Quel objet représente la fenêtre du navigateur dans la hiérarchie du DOM ?",
        options: ["A. document", "B. window", "C. navigator", "D. screen"],
        reponseCorrecteIndex: 1 // "B. window"
    },
    {
        question: "Quel est le rôle de localStorage ?",
        options: ["A. Stocker des données pour la durée de la session.", "B. Stocker de grandes quantités de données pour une utilisation hors ligne.", "C. Stocker des données de manière persistante sans date d'expiration.", "D. Stocker des cookies."],
        reponseCorrecteIndex: 2 // "C. Stocker des données de manière persistante..."
    }
];

// Variables pour suivre l'état du quiz
let indexQuestionActuelle = 0;
let score = 0;

// Références aux éléments HTML
const questionElement = document.getElementById("conteneur-questions");
const optionsList = document.getElementById("conteneur-option");
const nextButton = document.getElementById("btnnext");
const scoreElement = document.getElementById("score");


// --- 2. Fonction pour Afficher la Question ---
function afficherQuestion() {
    const questionActuelle = questions[indexQuestionActuelle];
    questionElement.textContent = questionActuelle.question;
    optionsList.innerHTML = "";

    // Utilisation de forEach avec l'index pour vérifier la réponse plus facilement
    questionActuelle.options.forEach((option, index) => {
        const listItem = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = option;
        
        // CORRECTION MAJEURE : Passer l'INDEX de l'option cliquée
        button.addEventListener("click", () => verifierReponse(index));

        listItem.appendChild(button);
        
        // On attache l'écouteur au bouton mais la fonction se base sur l'index.
        optionsList.appendChild(listItem);
    });

    nextButton.style.display = "none";
}

// --- 3. Fonction pour Vérifier la Réponse ---
// CORRECTION MAJEURE : La fonction reçoit maintenant l'index de l'option cliquée.
function verifierReponse(indexSelectionne) {
    const questionActuelle = questions[indexQuestionActuelle];
    const reponseCorrecteIndex = questionActuelle.reponseCorrecteIndex;
    const buttons = optionsList.querySelectorAll('button');
    
    // 1. Désactiver tous les boutons et appliquer la couleur
    buttons.forEach((button, index) => {
        button.disabled = true;
        
        // 2. Mettre en vert la VRAIE réponse correcte
        if (index === reponseCorrecteIndex) {
            button.style.backgroundColor = "#28a745"; 
            button.style.color = "white";
            // Ajout de la classe CSS pour l'effet d'ombre/bordure 
            button.parentElement.classList.add('correct');
            
        // 3. Mettre en rouge l'option sélectionnée si elle est fausse
        } else if (index === indexSelectionne) {
            button.style.backgroundColor = "#dc3545"; 
            button.style.color = "white";
            // Ajout de la classe CSS pour l'effet d'ombre/bordure
            button.parentElement.classList.add('incorrect');
        }
        
    });

    // Mettre à jour le score UNIQUEMENT si la réponse est correcte
    if (indexSelectionne === reponseCorrecteIndex) {
        score++;
    }

    scoreElement.textContent = `Score : ${score} / ${questions.length}`;

    // Afficher le bouton "Next"
    nextButton.style.display = "block";
}

// --- 4. Fonction pour Gérer le Bouton "Next" ---
function passerQuestion() {
    indexQuestionActuelle++;

    if (indexQuestionActuelle < questions.length) {
        afficherQuestion();
    } else {
        terminerQuiz();
    }
}

// Fonction pour terminer le quiz
function terminerQuiz() {
    questionElement.textContent = "Le quiz est terminé !";
    optionsList.innerHTML = "";
    nextButton.style.display = "none";
    scoreElement.textContent = `Votre score final est de ${score} sur ${questions.length}. Bravo !`;
}


// --- 5. Lancement Initial du Quiz ---
nextButton.addEventListener("click", passerQuestion);
afficherQuestion();