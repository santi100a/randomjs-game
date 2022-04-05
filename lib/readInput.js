import * as ReadLineSync from "readline-sync";

export default function input(message = '') {
    return ReadLineSync.question(message);
}
