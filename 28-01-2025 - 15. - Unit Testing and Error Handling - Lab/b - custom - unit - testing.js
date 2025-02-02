const sortNumbers = (arr) => {
  return arr.sort((a, b) => a - b);
};

function testSortNumbers() {
  // Arrange
  const input = [123, -3, 2, 1, 2];
  const expectedResult = [-3, 1, 2, 2, 13];

  // Act
  const actualResult = sortNumbers(input);
  //Assert
  if (JSON.stringify(actualResult) === JSON.stringify(expectedResult)) {
    console.log("Success");
  } else {
    console.error("Fail");
    console.log(
      `Expected ${JSON.stringify(
        expectedResult
      )} to be equal to ${JSON.stringify(actualResult)}!`
    );
  }
}
testSortNumbers();

// 'expectedResult' is same with 'input'            = Success
// 'expectedResult' is different than 'input'       =Fail 
//                                                  Expected [-3,1,2,2,13] to be equal to [-3,1,2,2,123]!