/// <reference path="ZooAnimals.ts" />

namespace Zoo{

    export class Bird implements Animal{
        skinType = "feather";
        isMammal(){
            return true;
        }
    }

}