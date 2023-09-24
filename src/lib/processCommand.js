export function getResultString(command) {
    const split = command.toLowerCase().split(" ");

    switch(split[0]) {
        case "ls":
            return ls(split);

        case "cd":
            return cd(split);
            
        case "open":
            return open(split);

        case "help":
            return help();
    }

    return `Command ${split[0]} not found.  Type help for a list of valid commands.`;
}

function ls(command) {
    return "ls";
}

function cd(command) {
    return "cd";
}

function open(command) {
    return "open";
}

function help() {
    let string = "Eric Salavatcioglu Shell, version 1.0.0 \n";
    string += "\n";
    string += "List of available commands:\n";
    string += " - ls: list directory contents\n";
    string += " - cd: change directory. Usage > cd dirname\n";
    string += " - help: display this help page\n";
    string += " - open: open file.  Usage > open filname";
    return string;
}