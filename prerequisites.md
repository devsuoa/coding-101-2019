# Coding 101 Prerequisites

As a prerequisite to Coding 101, you'll have to install some software.

* [Visual Studio Code](https://code.visualstudio.com/) - Source code editor
* [node.js](https://nodejs.org/en/) - Open-source, cross-platform JavaScript run-time environment
* [npm](https://www.npmjs.com/) - Package manager for the JavaScript programming language

# Windows Installation

##### Node.js and npm Installation Steps
1) Download the Windows installer from https://nodejs.org/
2) Run the installer (the .msi file)
3) Follow the prompts in the installer
4) Restart your computer

npm will be installed automtically alongside node

To test if node and npm were installed properly, open the command line and run these simple commands:

```node -v ``` this should print the version number of node, e.g. ```v0.10.35```

```npm -v``` this should print the version number of npm, e.g. ```1.4.28```

##### Visual Studio Code Installation
1) Download the windows intaller from code.visualstudio.com/download 
2) Run the installer and follow the prompts

# Mac Installation

We'll use **Homebrew** to install the revelant software

##### Why Homebrew?

Homebrew is a package manager for the mac - it makes installing most open source software (like node) extremely simple

##### Homebrew Installation
Open terminal and run the following command:

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

You'll see prompts in the Terminal explaining what you need to do to complete the installation process

##### Node.js and npm Installation
1) Open the Terminal and type ```brew install node```
2) Sit back and wait

To test if node and npm were installed properly, open the command line and run these simple commands:

```node -v ``` this should print the version number of node, e.g. ```v0.10.35```

```npm -v``` this should print the version number of npm, e.g. ```1.4.28```

##### Visual Studio Code Installation
1) Open the Terminal and type ```brew cask install visual-studio-code```
2) With homebrew thats all you have to do, Congratulations!
