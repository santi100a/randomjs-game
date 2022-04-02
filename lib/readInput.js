import * as readline from "readline-sync";

export default function input(message = '') {
    return readline.question(message);
}
