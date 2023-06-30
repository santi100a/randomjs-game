# Santi's Random Numbers Game

## Installation via NPM

- Using NPM: `npm install -g @santi100/randomjs-game`
- Using Yarn: `yarn global add @santi100/randomjs-game`
- Using PNPM: `pnpm install -g @santi100/randomjs-game`

## Usage

### How to Run

Execute `npx @santi100/randomjs-game [options]`. Options are detailed below.

### Flags

`-c, --no-clear`: Never clear the screen.
`-i, --no-initial-clear`: Don't clear the screen at startup.
`-g, --no-guess-clear`: Don't clear the screen after every guess.
`-m, --monochrome`: Don't use colors.
`-h, --help`: Display help for command.

### Workflow

The game starts by asking you for your name. Type your name or hit ENTER to use the name
"Player".

After this, the game will ask for your guess. Type a positive whole number
between 0 and 30 (both inclusive) and hit ENTER.

If your guess is equal to the right answer, the game will congratulate you and ask you to play again.
If you say no, the game will exit; otherwise, the game will generate a new random answer and
go back to the point where it asks for your guess.
