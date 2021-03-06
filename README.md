# sbe - Scrapbox in Electron
An unofficial [Scrapbox](https://scrapbox.io) Desktop App by Electron.

## Features
- Open page in new tab (Windows: Ctrl + click / macOS: Cmd + click)
- Open top page in new tab
- Duplicate current page in new tab
- Open url with default web browser
- Search within the page
- Copy page url to the clipboard
- Cut, copy and paste widh accelerator keys
- History back / forward

## How to run
### requirement
Node.js v10

### run
git clone or download zip.

```
$ cd sbe
$ npm install
$ npm start
```

if you are in proxy environment,

```
$ npm run proxy --sbe:proxy=your.proxy.host:port
```

## How to build binary

### for macOS
```
$ npm run package-macos
```

binary will be generated in ./mtwe-darwin-x64

### for Windows
```
$ npm run package-win32
```

binary will be generated in ./mtwe-win32-x64

if you run binary in proxy. you have to add argument (via shortcut link) as below

```
sbe.exe --proxy-server=your.proxy.host:port
```

## Screenshot
![Screenshot](https://user-images.githubusercontent.com/2092183/50725987-ceb89980-1149-11e9-9017-fb7186ce00b1.gif)

## Release Notes
### v0.2.0
- [x] Change the style of back/foroward button according to the state of webview.
- [x] Enable to arrange order of tabs with drag & drop.
- [x] Duplicates tab on double clicking in tab area.
- [x] Shows first image of the page as icon on the tab of the page.
- [x] Implove search box behavior.

### v0.1.0
First release