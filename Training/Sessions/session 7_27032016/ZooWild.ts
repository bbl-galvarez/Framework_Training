/// <reference path="ZooAnimals.ts" />

namespace Zoo{

    export class Reptile implements Animal{
        skinType = "scales";
        isMammal(){
            return false;
        }
    }

}

 