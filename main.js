const { app, BrowserWindow, ipcMain, nativeTheme } = require("electron");
const path = require("path");

const isDev = !app.isPackaged;

function createWindow() {
  const win = new BrowserWindow({
    height: 800,
    width: 800,
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");

  ipcMain.handle("dark-mode:toggle", () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = "light";
    } else {
      nativeTheme.themeSource = "dark";
    }
    return nativeTheme.shouldUseDarkColors;
  });

  ipcMain.handle("dark-mode:system", () => {
    nativeTheme.themeSource = "system";
  });

  /**
   * window overlay buttons
   */
  // close app
  ipcMain.on("closeApp", () => {
    win.close();
  });
  // minimise app
  ipcMain.on("minimiseApp", () => {
    win.minimize();
  });
  // maximise or restaure app
  ipcMain.on("maximizeRestaureApp", () => {
    win.isMaximized() ? win.restore() : win.maximize();
  });

  isDev && win.webContents.openDevTools();
}

if (isDev) {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows.length === 0) {
    createWindow();
  }
});
