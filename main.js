const { app, BrowserWindow, Menu } = require("electron");
const shell = require("electron").shell;

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.webContents.openDevTools();
  win.loadFile("src/index.html");

  let menu = Menu.buildFromTemplate([
    {
      label: "Nassim",
      submenu: [
        { label: "About" },
        {
          label: "Github",
          click() {
            shell.openExternal("https://github.com/nassimessaidi");
          },
        },
        {
          label: "Twitter",
          click() {
            shell.openExternal("https://twitter.com/nassimessaidi");
          },
        },
        { type: "separator" },
        {
          label: "Exit",
          click() {
            app.quit();
          },
        },
      ],
    },
  ]);
  Menu.setApplicationMenu(menu);
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
