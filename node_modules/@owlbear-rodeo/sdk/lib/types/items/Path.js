export var Command;
(function (Command) {
    Command[Command["MOVE"] = 0] = "MOVE";
    Command[Command["LINE"] = 1] = "LINE";
    Command[Command["QUAD"] = 2] = "QUAD";
    Command[Command["CONIC"] = 3] = "CONIC";
    Command[Command["CUBIC"] = 4] = "CUBIC";
    Command[Command["CLOSE"] = 5] = "CLOSE";
})(Command || (Command = {}));
export function isPath(item) {
    return item.type === "PATH";
}
