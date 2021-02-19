const { app, BrowserWindow } = require("electron");
const shell = require("electron").shell;
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 730,
    minHeight: 550,
    minWidth: 750,
    icon: path.join(__dirname, "assets/images/icon.ico"),
    webPreferences: {
      nodeIntegration: true,
    },
  });

  //win.webContents.openDevTools();
  win.loadFile("src/index.html");
  win.setMenu(null);
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
