var Zoo;
(function (Zoo) {
    var Reptile = /** @class */ (function () {
        function Reptile() {
            this.skinType = "scales";
        }
        Reptile.prototype.isMammal = function () {
            return false;
        };
        return Reptile;
    }());
    Zoo.Reptile = Reptile;
})(Zoo || (Zoo = {}));
var Zoo;
(function (Zoo) {
    var Bird = /** @class */ (function () {
        function Bird() {
            this.skinType = "feather";
        }
        Bird.prototype.isMammal = function () {
            return true;
        };
        return Bird;
    }());
    Zoo.Bird = Bird;
})(Zoo || (Zoo = {}));
var lizard = new Zoo.Reptile();
var penguin = new Zoo.Bird();
console.log(lizard.skinType);
console.log(lizard.isMammal());
console.log("\n");
console.log(penguin.skinType);
console.log(penguin.isMammal());
