import files from "../data/files.json";

export function getResultString(command, pwd, changeDir) {
    const split = command.split(" ");

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
    
    let string = "./\n";
 
    if(pwd > 0) {
        string += "../\n";
    }
    
    string += files.filter(x => x.parent == pwd).map(x => x.name + (x.type=="folder" ? "/" : "")).join("\n");
    
    return string;
}

function cd(command, pwd, changeDir) {
    const folder = command[1];

    if(folder == "..") {
        changeDir(files.filter(x => x.id == pwd)[0].parent);
        return "";
    }

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