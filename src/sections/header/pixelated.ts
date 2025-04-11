export function startGame() {
  // Constants
  const GRID_SIZE = { width: 12, height: 13 };
  const COLORS = ['#ff90e8', '#ffc900', '#ff7051', '#3ecfc1', '#90a8ed'];
  const MAX_MOVES = 20;
  const TEXTS = {
    LOSS_MESSAGE: 'Game over! Out of moves.',
    WINNING_STREAK: 'Winning streak: ',
    MOVES_LEFT: (moves: number) =>
      `${moves} move${moves === 1 ? '' : 's'} left`,
    WIN_MESSAGE: (moves: number) =>
      `You won with ${moves === 1 ? '1 move' : `${moves} moves`} left!`,
    NEW_BUTTON: 'New',
  };

  // Game State
  let grid: any[] = [];
  let movesLeft = MAX_MOVES;

  // DOM Elements
  const boardElement = document.getElementById('board');
  const controlsElement = document.getElementById('controls');
  const statusElement = document.getElementById('status');
  const newButton = document.getElementById('new-button');
  if (!boardElement || !controlsElement || !statusElement || !newButton) return;

  // Initialize the Game
  const initGame = () => {
    resetGame();
    grid = generateGrid();
    renderGrid();
    renderControls();
  };

  // Generate the initial grid with random colors
  const generateGrid = () => {
    return Array.from({ length: GRID_SIZE.height }, () =>
      Array.from(
        { length: GRID_SIZE.width },
        () => COLORS[Math.floor(Math.random() * COLORS.length)]
      )
    );
  };

  // Render the grid to the board
  const renderGrid = () => {
    boardElement.style.gridTemplateColumns = `repeat(${GRID_SIZE.width}, 1fr)`;
    boardElement.innerHTML = grid
      .flatMap((row) =>
        row.map(
          (color: any) =>
            `<div class="cell" style="background-color:${color}"></div>`
        )
      )
      .join('');
  };

  // Render the game controls
  const renderControls = () => {
    controlsElement.innerHTML = COLORS.map(
      (color) =>
        `<div class="color-button" style="background-color:${color}" data-color="${color}"></div>`
    ).join('');
    Array.from(controlsElement.children).forEach((el) => {
      const button = el as HTMLDivElement;
      const color = button.dataset?.['color'];
      button.addEventListener('click', () => {
        if (color) floodFill(color);
      });
    });
    newButton.textContent = TEXTS.NEW_BUTTON;
  };

  // Flood fill algorithm
  const floodFill = (newColor: any) => {
    const oldColor = grid[0][0];
    if (newColor === oldColor || movesLeft <= 0) return;

    const fill = (x: number, y: number) => {
      if (
        x < 0 ||
        y < 0 ||
        x >= GRID_SIZE.width ||
        y >= GRID_SIZE.height ||
        grid[y][x] !== oldColor
      )
        return;
      grid[y][x] = newColor;
      fill(x + 1, y);
      fill(x - 1, y);
      fill(x, y + 1);
      fill(x, y - 1);
    };

    fill(0, 0);
    movesLeft--;
    renderGrid();
    updateStatus();

    if (checkWin()) {
      endGame(TEXTS.WIN_MESSAGE(movesLeft));
    } else if (movesLeft <= 0) {
      endGame(TEXTS.LOSS_MESSAGE);
    }
  };

  // Check if the game is won
  const checkWin = () => {
    return grid.every((row) => row.every((cell: any) => cell === grid[0][0]));
  };

  // Update the status text
  const updateStatus = () => {
    statusElement.textContent = TEXTS.MOVES_LEFT(movesLeft);
  };

  // End game with provided message
  const endGame = (message: string | null) => {
    statusElement.textContent = message;
    disableControls();
  };

  // Disable color controls after game over or win
  const disableControls = () => {
    Array.from(controlsElement.children).forEach((el) => {
      (el as HTMLDivElement).classList.add('disabled');
    });
  };

  // Reset game state
  const resetGame = () => {
    movesLeft = MAX_MOVES;
    updateStatus();
  };

  // Restart the game with New button and N key
  newButton.addEventListener('click', initGame);
  document.addEventListener('keydown', (e) => {
    if (e.code === 'KeyN') initGame();
  });

  // Disable context menu (right-click) on the board
  document.addEventListener('contextmenu', (e) => e.preventDefault());

  // Start the game
  initGame();
}
