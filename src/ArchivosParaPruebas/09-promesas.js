
import { getHeroById } from './08-imp-exp';

export const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Tarea
      const p1 = getHeroById(id);
      if (p1) {
        resolve(p1); //envío el valor al then
      } else {
        reject("No se pudo encontrar el héroe");
      }
    }, 1000);
  });
};