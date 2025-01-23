// *Tic-Tac-Toe

// Make a tic-tac-toe console application.
// You will receive an array of arrays. 
// As you know there are two players in this game, 
// so the first element of the input will be the first player's chosen coordinates, 
// the second element will be the second player's turn coordinates, and so on.

// The initial state of the dashboard is
// [[false, false, false],
// [false, false, false],
// [false, false, false]]
// The first player's mark is X and the second player's mark is O.

// Input
// One parameter:
// · An array - the moves in a row that players make

// Output
// · There are two players - X and O
// · If a player tries to make his turn on already taken place, he should take his turn again and you should print the following message:
// "This place is already taken. Please choose another!"
// · If there are no free spaces on the dashboard and nobody wins the game should end and you should print the following message:
// "The game ended! Nobody wins :("
// · If someone wins you should print the following message and the current state of the dashboard:
// "Player {x} wins!"
// Note: When printing the state of the dashboard the elements of each row of the dashboard should be separated by "\t" and each row should be on a new line.

// Constraints
// The elements in the input array will always be enough to end the game.

// Input                                                                       Output
// ["0 1","0 0","0 2","2 0","1 0","1 1","1 2","2 2","2 1","0 0"]               Player O wins! 
//                                                                             O       X       X 
//                                                                             X       O       X 
//                                                                             O       false   O

// ["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]      This place is already taken. Please choose another! 
//                                                                             Player X wins! 
//                                                                             X       X       X 
//                                                                             false   O       O 
//                                                                             false   false   false

// ["0 1","0 0","0 2","2 0","1 0","1 2","1 1","2 1","2 2","0 0"]               The game ended! Nobody wins :( 
//                                                                             O       X       X 
//                                                                             X       X       O 
//                                                                             O       O       X