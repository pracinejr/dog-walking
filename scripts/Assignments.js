import { getPets, getWalkers } from "./database.js";

// Get copy of state for use in this module
const pets = getPets();
const walkers = getWalkers();

// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalkers) => {
  let petWalker = null;

  for (const walker of allWalkers) {
    if (walker.id === pet.walkerId) {
      petWalker = walker;
    }
  }

  return petWalker;
};

export const Assignments = () => {
  let assignmentHTML = "";
  assignmentHTML = "<ul>";

  for (const pet of pets) {
    const currentPetWalker = findWalker(pet, walkers);
    assignmentHTML += `
            <li>
                ${pet.name} is being walked by
                ${currentPetWalker.name} in ${currentPetWalker.city}
            </li>
        `;
  }

  assignmentHTML += "</ul>";

  return assignmentHTML;
};
