Feature: Tic Tac Toe
The game consists of a board of 3x3. When referring to a coordinate this is done by (row,column) where the top left corner is defined as (0,0)

Scenario: Horizontal victory
	Given a game of Tic Tac Toe
	And two players want to play
	And there is a 3x3 board
	And player 1 plays with the X
	And player 2 plays with the O
	And player 1 plays at (0,0)
	And player 2 plays at (1,0)
	And player 1 plays at (0,1)
	And player 2 plays at (1,1)
	When player 1 plays at (0,2)
    Then player 1 should be the winner of the game