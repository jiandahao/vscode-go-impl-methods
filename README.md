# Implement Method Stubs for Golang Interfaces - Visual Studio Code Extension

## Requirements

First, you will need to have your Go environment correctly configured. The path folder for your Go binaries must also be added to the environment variable `$PATH` in your operating system. Please, find below some guidelines on how to do that in your operating system: 
  * [Windows](https://github.com/golang/go/wiki/SettingGOPATH), 
  * [Linux](https://golang.org/doc/gopath_code.html), 
  * and [macOS](https://golangbyexample.com/understand-etc-paths-pathsd-mac/)

Then, you will need to install the [`impler`](https://github.com/jiandahao/impler) package as follows:

```
go get -u github.com/jiandahao/impler
```

**Obs**: make sure your `$GOPATH/bin` is in your `$PATH` so that you can access the `impler` binary.

## Installation

for local installation: 
```bash
npm i vsce -g
// remove `out/**` in .vscodeignore
// then do 
vsce package
```
then you will get a .vsix file:
```bash
vscode-go-impl-methods-0.0.0-development.vsix 
```

select and install the generated vsix file.
![install](https://raw.githubusercontent.com/jiandahao/vscode-go-impl-methods/main/img/install.png)


## Usage

### implement methods for golang interface
VS Code extension that automatically generates method stubs for Golang interfaces. Just inform the receiver and the interface. The extension will generate the method stubs.

![Usage](https://raw.githubusercontent.com/jiandahao/vscode-go-impl-methods/main/img/usage.gif)

 * Inform the receiver as a comment (see some examples below):
   * `// mt MyType`
   * `// mp *MyPointer`
 * Open the **Command Palette**
   * `Ctrl+Shift+P` (Linux and Windows)
   * `Shift+Command+P` (macOS)
 * Look for *Go: Implement Interface Methods*
 * Start typing the name of the interface and pick it from the list (ex: `io.Reader`)
 * Hit Enter!

 ### extract interface for golang structure
 VS Code extension that automatically extract interface for Golang structure. Just inform the receiver name. The extension will extract interface.

![Usage](https://raw.githubusercontent.com/jiandahao/vscode-go-impl-methods/main/img/extract_interface.gif)

 *  Inform the receiver as a comment (see some examples below):
    * `// myInterface`
 * Open the **Command Palette**
   * `Ctrl+Shift+P` (Linux and Windows)
   * `Shift+Command+P` (macOS)
 * Look for *Go: Extract Interface*
 * Start typing the name of the interface and pick it from the list (ex: `time.Ticker`)
 * Hit Enter!

## Comments

The extension is working, but there are a few things to improve. Any suggestions are welcomed. Please, feel free to contribute.

**Enjoy!**
