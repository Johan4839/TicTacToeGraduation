#Tic Tac Toe

## Components
Playing, which consists of placing a mark and switching active player 
    Player 1 starts at (0,0) --> success ✅
    Player 2 then plays at (0,0) --> Error raised ✅
Winning
    Check for a horizontal, vertical or diagonal victory ✅
Game result ✅
Bot play
    Play until there is a winner or draw ✅
#### Units
Create a 3x3 board ✅
With  empty cells ✅
Player 1 plays with an X ✅
Player 2 plays with an O ✅
Player 1 starts ✅
A mark can be set to a coordinate
    Player 1 plays at (0,0) --> X ✅
    Player 2 plays at (0,1) --> O ✅
    Player 1 plays at (0,1) --> Already added, try again ✅
Check if move is valid
    Move is on board
        (0,0) --> valid ✅
        (3,0) --> invalid ✅
        (0,3) --> invalid ✅
    Move is on a empty cell
        cell (0,0) is empty --> true ✅
        cell (0,0) is X --> false ✅
        cell (0,0) is O --> false ✅
Switch player after succesfull move ✅
Check for horizontal victory ✅
Check for vertical victory ✅
Check for a diagonal victory ✅
Check for a draw ✅
Random pick number ✅

## Exposing the game through an API
When an API call is made the game should be played by bots and the result should be displayed