import { NewImage } from "./interfaces/filter-image.strategy";
import { FilterWidhtHeight } from "./interfaces/filterWidhHeight";


export class SizeFilterStrategy implements FilterWidhtHeight {
    newWidht: string;
    newHeight: string;

    constructor(public width: string, public height: string, public name: string, public color: string, newWidht: string, newHeight: string) {
        this.newWidht = newWidht;
        this.newHeight = newHeight;
    }

    createNewImage(): NewImage {
        const newImage: NewImage = {
            width: this.newWidht,
            height: this.newHeight,
            name: this.name,
            color: this.color,
        };
        return newImage;
    }
}

// Crear una instancia de SizeFilterStrategy y usarla
const sizeFilter = new SizeFilterStrategy("200", "100", "imagen.png", "rojo", "200", "100");
const newImage = sizeFilter.createNewImage();
console.log(newImage);
