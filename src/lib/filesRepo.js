export function getResultString(command, pwd, files, changeDir) {
    const split = command.split(" ");

    switch(split[0].toLowerCase()) {
        case "ls":
            return ls(split, pwd, files);

        case "cd":
            return cd(split, pwd, files, changeDir);

        case "help":
            return help();
    }

    const file = files.filter(x => x.parent == pwd && x.type != "folder").find(x => "./"+x.name.toLowerCase() == split[0].toLowerCase());

    if(file) {
        open(file);
        return "";
    }

    return `Command ${split[0]} not found.  Type help for a list of valid commands.`;
}

export function getPwdString(pwd, files) {
    let string = "/";

    let currentPwd = pwd;

    while(currentPwd > 0) {
        const dir = files.filter(x => x.id == currentPwd)[0];
        string = "/" + dir.name + string;
        currentPwd = dir.parent;
    }

    return string;
}

function ls(command, pwd, files) {
    
    let string = "./\n";
 
    if(pwd > 0) {
        string += "../\n";
    }
    
    string += files.filter(x => x.parent == pwd).map(x => x.name + (x.type=="folder" ? "/" : "")).join("\n");
    
    return string;
}

function cd(command, pwd, files, changeDir) {
    const folder = command[1];

    if(folder == "..") {
        changeDir(files.filter(x => x.id == pwd)[0].parent);
        return "";
    }

    const folders = files.filter(x => x.parent == pwd && x.type == "folder");
    const index = folders.map(x => x.name.toLowerCase()).indexOf(folder.toLowerCase());

    if(index > -1) {
        changeDir(folders[index].id);
        return "";
    } else {
        return `cd: ${folder}: No such file or directory.`;
    }

    return "cd";
}

function open(file) {
    
    if(file.url) {
        window.location.href = file.url;
        return "";
    }

    window.location.href = file.name;
    return "";
}

function help() {
    let string = "Eric Salavatcioglu Shell, version 1.0.0 \n";
    string += "\n";
    string += "List of available commands:\n";
    string += " - ls: list directory contents\n";
    string += " - cd: change directory. Usage: cd dirname\n";
    string += " - help: display this help page\n";
    string += " - To open a file in the current directory you must use the following form: ./<filename>";
    return string;
}