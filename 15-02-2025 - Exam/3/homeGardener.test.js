const { expect } = require("chai");

const homeGardener = require("./homeGardener");

describe("homeGardener Tests", function () {
    describe("plantCareInstructions()", function () {
        it("should return correct care instructions for succulents", function () {
            expect(homeGardener.plantCareInstructions("succulent"))
                .to.equal("Succulents require minimal watering, indirect sunlight, and well-draining soil.");
        });
        it("should return correct care instructions for vegetables", function () {
            expect(homeGardener.plantCareInstructions("vegetable"))
                .to.equal("Vegetables need full sun, regular watering, and nutrient-rich soil.");
        });
        it("should return correct care instructions for flowering plants", function () {
            expect(homeGardener.plantCareInstructions("flowering"))
                .to.equal("Flowering plants require moderate watering, occasional fertilization, and pruning.");
        });
        it("should return correct care instructions for trees", function () {
            expect(homeGardener.plantCareInstructions("tree"))
                .to.equal("Trees need deep watering, proper spacing, and regular mulching.");
        });
        it("should throw an error for an invalid plant type", function () {
            expect(() => homeGardener.plantCareInstructions("unknown"))
                .to.throw(Error, "Invalid plant type!");
        });
    });

    describe("availablePlants()", function () {
        it("should return the correct count of plants within height limit", function () {
            expect(homeGardener.availablePlants([10, 20, 30, 40], 25))
                .to.equal("There are 2 plants suitable for your garden height criteria!");
        });
        it("should return zero when no plants fit the criteria", function () {
            expect(homeGardener.availablePlants([50, 60, 70], 25))
                .to.equal("There are 0 plants suitable for your garden height criteria!");
        });
        it("should throw an error if plantSizes is not an array", function () {
            expect(() => homeGardener.availablePlants("not an array", 25))
                .to.throw(Error, "Invalid Information!");
        });
        it("should throw an error if maxHeight is not a number", function () {
            expect(() => homeGardener.availablePlants([10, 20, 30], "not a number"))
                .to.throw(Error, "Invalid Information!");
        });
        it("should throw an error if plantSizes is an empty array", function () {
            expect(() => homeGardener.availablePlants([], 10))
                .to.throw(Error, "Invalid Information!");
        });
        it("should throw an error if maxHeight is less than 1", function () {
            expect(() => homeGardener.availablePlants([10, 20, 30], 0))
                .to.throw(Error, "Invalid Information!");
        });
    });

    describe("gardenExpenses()", function () {
        it("should calculate correct cost without discount", function () {
            expect(homeGardener.gardenExpenses(["shovel", "rake"], ["vegetable seeds"], false))
                .to.equal("You spent $45.00 on tools and seeds!");
        });
        it("should calculate correct cost with discount", function () {
            expect(homeGardener.gardenExpenses(["shovel", "rake"], ["vegetable seeds"], true))
                .to.equal("You spent $40.50 on tools and seeds with a 10% discount!");
        });
        it("should throw an error if tools is not an array", function () {
            expect(() => homeGardener.gardenExpenses("not an array", ["vegetable seeds"], true))
                .to.throw(Error, "Invalid Information!");
        });
        it("should throw an error if seeds is not an array", function () {
            expect(() => homeGardener.gardenExpenses(["shovel"], "not an array", true))
                .to.throw(Error, "Invalid Information!");
        });
        it("should throw an error if discount is not a boolean", function () {
            expect(() => homeGardener.gardenExpenses(["shovel"], ["vegetable seeds"], "not a boolean"))
                .to.throw(Error, "Invalid Information!");
        });
    });
});
