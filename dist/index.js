#! /usr/bin/env node
"use strict";
exports.__esModule = true;
var colorize_1 = require("@santi100/coloring-lib/cjs/colorize");
var colorize_template_1 = require("@santi100/coloring-lib/cjs/colorize-template");
var rainbowify_1 = require("@santi100/coloring-lib/cjs/rainbowify");
var random_1 = require("@santi100/random-lib/cjs/random");
var readline_sync_1 = require("readline-sync");
var commander_1 = require("commander");
var MAX = 30;
var program = new commander_1.Command()
    .option('-c, --no-clear', 'Never clear the screen.')
    .option('-i, --no-initial-clear', "Don't clear the screen at startup.")
    .option('-g, --no-guess-clear', "Don't clear the screen after every guess.")
    .option('-m, --monochrome', "Don't use colors.")
    .parse();
var _a = program.opts(), clear = _a.clear, initialClear = _a.initialClear, guessClear = _a.guessClear, monochrome = _a.monochrome;
if (initialClear && clear)
    console.clear();
console.log('Hi! Welcome to the', monochrome ? 'Random' : (0, rainbowify_1.rainbowify)('Random'), monochrome ? 'Numbers' : (0, colorize_1["default"])('Numbers', 'green'), monochrome ? 'Game!' : (0, colorize_1["default"])('Game!', 'cyan'));
var playerName = (0, readline_sync_1.question)("What's your name? ").trim() || 'Player';
var answer = (0, random_1.random)(MAX);
// Game loop
// eslint-disable-next-line no-constant-condition
while (1) {
    var guess = (0, readline_sync_1.questionInt)('What number am I thinking of? ');
    if (guessClear && clear)
        console.clear();
    if (guess === answer) {
        console.log(monochrome
            ? "Correct, ".concat(playerName, "!")
            : (0, colorize_1["default"])("Correct, ".concat(playerName, "!"), 'green'));
        var playAgain = (0, readline_sync_1.question)(monochrome
            ? 'Play again (y/n)? '
            : (0, colorize_template_1.colorizeTemplate)('Play again (%green(y)/%red(n))? '))
            .toLowerCase()
            .split('')[0] === 'y';
        if (playAgain) {
            answer = (0, random_1.random)(MAX);
            if (guessClear && clear)
                console.clear();
            continue;
        }
        else {
            break;
        }
    }
    else if (guess < answer) {
        console.log(monochrome
            ? "You undershot! Try again, ".concat(playerName, "!")
            : (0, colorize_1["default"])("You undershot! Try again, ".concat(playerName, "!"), 'magenta'));
        continue;
    }
    else {
        console.log(monochrome
            ? "You overshot! Try again, ".concat(playerName, "!")
            : (0, colorize_1["default"])("You overshot! Try again, ".concat(playerName, "!"), 'cyan'));
        continue;
    }
}
