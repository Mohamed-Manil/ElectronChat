const { contextBridge, ipcRenderer } = require("electron");

/**
 * DArk mode handler use await for async
 */
contextBridge.exposeInMainWorld("darkMode", {
  toggle: () => ipcRenderer.invoke("dark-mode:toggle"),
  system: () => ipcRenderer.invoke("dark-mode:system"),
});

/**
 * Custom close, maximiseRestaure and minimise
 */

contextBridge.exposeInMainWorld("windowOverLay", {
  closeApp: () => ipcRenderer.send("closeApp"),
  minimiseApp: () => ipcRenderer.send("minimiseApp"),
  maximizeRestaureApp: () => ipcRenderer.send("maximizeRestaureApp"),
});
