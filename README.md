<div align="center">
<h1>Incubyte TDD Assignment</h1>
<h4>Incubyte simple TDD assignment implementation on top of <a href="https://jestjs.io/" target="_blank">Jest</a></h4>
</div>

<div align="center">
  <h3>
    <a href="https://jestjs.io/">
      Jest
    </a>
    <span> | </span>
    <a href="https://eslint.org/">
      EsLint
    </a>
    <span> | </span>
    <a href="https://typicode.github.io/husky/">
      Husky
    </a>
  </h3>
</div>

<details>
<summary>📖 <b>Table of Contents</b></summary>
<br />

[![-----------------------------------------------------][colored-line]](#table-of-contents)

## ➤ Table of Contents

* [➤ Walkthrough](#-walkthrough)
	* [Built With](#built-with)
	* [File Structure](#file-structure)
	* [Testing Setup](#testing-setup)
* [➤ Getting Started](#-getting-started)
	* [Dependencies](#dependencies)
	* [Install Node.js](#install-nodejs)
	* [Check your Node.js installation](#check-your-nodejs-installation)
	* [Installing](#installing)
	* [Running the App](#running-the-app)
	* [Tasks](#tasks)
* [➤ Design Decisions](#-design-decisions)
</details>

[![-----------------------------------------------------][colored-line]](#-walkthrough)

## ➤ Walkthrough


### Built With

- [Node.js](https://nodejs.org/en/)
- [Jest](https://jestjs.io/)
- [EsLint](https://eslint.org/)
- [Husky](https://typicode.github.io/husky/)


### File Structure

```
src/
 ├──index.ts               * Typescript implementation file
 │
 └──test/                  * Jest configuration for testing application
```

### Testing Setup
This is our testing stack:
* Jest
* Eslint

To run unit and integration tests, type `npm test` in the terminal.

[![-----------------------------------------------------][colored-line]](#-getting-started)

## ➤ Getting Started

### Dependencies
Tools needed to run this app:
* `node` and `npm`

#### Install Node.js

Node.js is an environment that can run JavaScript code outside of a web browser and is used to write and run server-side JavaScript apps. Node.js installation includes `npm`, the package manager that allows you to install NPM modules from your terminal. 
You can download an installer from the [Node.js homepage](https://nodejs.org/en/).

##### Check your Node.js installation

Check that you have the minimum required version installed by running the following command:

```sh
node -v
```

You should see a version larger than Node 18.

```sh
node -v
v18.19.0
```

> The application minimum supported Node.js version is Node 18, but more recent versions will work as well.


### Installing
* `clone` this repo
* `npm install` to install dependencies

> Once all dependencies are installed, `husky` will setup Git hooks which will automatically execute build and testing on commit to make sure everything is working.

#### Tasks
Here's a list of available tasks:
* `npm run lint`
	* runs linting with Eslint to verify code styles and formatting.
* `npm run build`
	* builds production build of the application.
* `npm test`
	* runs the testing.

[![-----------------------------------------------------][colored-line]](#-design-decisions)

## ➤ Design Decisions

* For testing, the application uses Jest. Jest is used for unit and integration tests. The application uses Eslint to enforce code style and formatting, and Husky is used to run linting and testing on commit.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[colored-line]: ./.docs/rainbow.png
