# SolidBookExercises

Exercises derived by the book "SolidBook" by Khalil Stemmler.

That book is about systems architecture for beginners and it uses Typescript as main programming language because it's modern, easy to learn for Javascript developers and more suitable for explaining the concepts of the course than Javascript.

## Package Managers Notice:

In the book **NPM** is the used package manager but I'll be using **PNPM** as package manager because it has identical commands but better usage of disk resources and faster installations when a dependency was already installed in a previous project (you don't have to reinstall the same dependency over and over, thus faster installations :D).

## Installation of dependencies:

1. Install **NPM** or **PNPM** as package manager.
2. Run 'npm install' or 'pnpm install' depending on the package manager that you're using.
3. Create a build directory (named **'build'**) at the same level of source (so when you list the folder contents of the project you should see _'src/'_ and _'build/'_ as subfolders of it).

## Usage:

1. Execute pnpm start to execute the current 'src/index.ts', and if you want to execute another folder or project just point the start script on 'package.json' to the correct location or move the content of the project's folder to the root of 'src/' directory.

