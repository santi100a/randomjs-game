#! /usr/bin/env node

import colorize from '@santi100/coloring-lib/cjs/colorize';
import { colorizeTemplate } from '@santi100/coloring-lib/cjs/colorize-template';
import { rainbowify } from '@santi100/coloring-lib/cjs/rainbowify';
import { random } from '@santi100/random-lib/cjs/random';
import { question, questionInt } from 'readline-sync';
import { Command } from 'commander';

const MAX = 30;
const program = new Command()
	.option('-c, --no-clear', 'Never clear the screen.')
	.option('-i, --no-initial-clear', "Don't clear the screen at startup.")
	.option('-g, --no-guess-clear', "Don't clear the screen after every guess.")
	.option('-m, --monochrome', "Don't use colors.")
	.parse();
const { clear, initialClear, guessClear, monochrome } = program.opts();
if (initialClear && clear) console.clear();

console.log(
	'Hi! Welcome to the',
	monochrome ? 'Random' : rainbowify('Random'),
	monochrome ? 'Numbers' : colorize('Numbers', 'green'),
	monochrome ? 'Game!' : colorize('Game!', 'cyan')
);
const playerName = question("What's your name? ").trim() || 'Player';

let answer = random(MAX);
// Game loop
// eslint-disable-next-line no-constant-condition
while (1) {
	const guess = questionInt('What number am I thinking of? ');

	if (guessClear && clear) console.clear();
	if (guess === answer) {
		console.log(
			monochrome
				? `Correct, ${playerName}!`
				: colorize(`Correct, ${playerName}!`, 'green')
		);
		const playAgain =
			question(
				monochrome
					? 'Play again (y/n)? '
					: colorizeTemplate('Play again (%green(y)/%red(n))? ')
			)
				.toLowerCase()
				.split('')[0] === 'y';
		if (playAgain) {
			answer = random(MAX);
			if (guessClear && clear) console.clear();
			continue;
		} else {
			break;
		}
	} else if (guess < answer) {
		console.log(
			monochrome
				? `You undershot! Try again, ${playerName}!`
				: colorize(`You undershot! Try again, ${playerName}!`, 'magenta')
		);
		continue;
	} else {
		console.log(
			monochrome
				? `You overshot! Try again, ${playerName}!`
				: colorize(`You overshot! Try again, ${playerName}!`, 'cyan')
		);
		continue;
	}
} 
