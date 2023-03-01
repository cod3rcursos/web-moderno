const { ipcMain } = require("electron")

const pathToRows = require("./pathsToRows")
const prepareData = require("./prepareData")
const groupWords = require("./groupWords")

ipcMain.on("process-subtitles", (event, paths) => {
    pathToRows(paths)
    .then(rows => prepareData(rows))
    .then(preparedData=>groupWords(preparedData))
    .then(groupedWords=>{
        event.reply("process-subtitles", groupedWords);
    })
});
