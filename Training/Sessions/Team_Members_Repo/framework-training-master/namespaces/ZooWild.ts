namespace Zoo {
    
    export class Reptile implements ZooAnimal {
        skinType = "scales";
        isMammal() {
            return false;
        }
    }

}