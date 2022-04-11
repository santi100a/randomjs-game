import * as ReadLineSync from "readline-sync";

function input(message = '') {
    return ReadLineSync.question(message);
}
export default input;
