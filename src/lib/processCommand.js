import files from "../data/files.json";

export function getResultString(command, pwd, changeDir) {
    const split = command.toLowerCase().split(" ");

    switch(split[0]) {
        case "ls":
            return ls(split, pwd);

        case "cd":
            return cd(split, pwd, changeDir);
            
        case "open":
            return open(split);

        case "help":
            return help();
    }

    return `Command ${split[0]} not found.  Type help for a list of valid commands.`;
}

function ls(command, pwd) {
    let string = files.filter(x => x.parent == pwd).map(x => x.name).join("\n");
    console.log(string);
    return string;
}

function cd(command, pwd, changeDir) {
    const folder = command[1];

    const folders = files.filter(x => x.parent == pwd && x.type == "folder");
    const index = folders.map(x => x.name).indexOf(folder);
    if(index > -1) {
        changeDir(folders[index].id);
        return "";
    } else {
        return `cd: ${folder}: No such file or directory.`;
    }

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