## Theory Assignment:

### 1. What is `NPM`?

> NPM is a **software registry** where open-source developers share & borrow packages, and many organizations use npm to
> manage their private development as well. <br/> <br/>
> The name __npm (Node Package Manager)__ got from when __npm__ first was created as a __package manager__ for Node.js
> though they never mentioned anywhere that npm stands for node package manager.

References: https://docs.npmjs.com/about-npm

### 2. What is `Parcel/Webpack`? Why do we need it?

> Parcel/Webpack are **bundlers**. A bundler is a tool that puts together all your **JavaScript code and its
dependencies
> and throws a new JavaScript** output file with everything merged, ready for the web, commonly known as the bundle
> file. <br/> <br/>
> We need bundlers to build **single file that is production-ready, portable & loadable in the browser**.You can only
> imagine how complicated the procedure was before bundlers. Keeping all the files and their dependencies up to date
> and ready was an annoying task for web developers.

Further References:<br>
https://snipcart.com/blog/javascript-module-bundler

### 3. What is `.parcel-cache`?

> The .parcel-cache folder stores information about your project when parcel builds it, so that
> when it rebuilds, **it doesn't have to re-parse and re-analyze everything from scratch**. It's a key reason why parcel
> can
> be so fast in development mode. I think committing it to git would be a bad idea - it would add a large number of (
> unnecessary) changes to your commit history, and it could easily get _out-of-sync with the code that generated it_.

### 4. What is `npx` ?

> NPX - A tool for executing Node packages.<br/>
> **npx** is a npm package runner (x probably stands for eXecute). One common way to use npx is to download and run a
> package temporarily or for trials.

Detailed Explanation with use cases:
[difference-between-npx-and-npm](https://stackoverflow.com/questions/50605219/difference-between-npx-and-npm)

### 5. What is difference between `dependencies` vs `devDependencies`?

> __dependencies__: <br>
> Dependencies that your project needs to run, like a library that provides functions that you call from your code.
> They are __installed transitively__ (if A depends on B depends on C, npm install on A will install B and C).<br>
> Example: lodash: your project calls some lodash functions.<br><br>
> __devDependencies__: <br>
> Dependencies you only need during development or releasing, like compilers that take your code and compile it into
> javascript, test frameworks or documentation generators.
> They are __not installed transitively__ (if A depends on B dev-depends on C, npm install on A will install B
> only).<br>
> Example: grunt: your project uses grunt to build itself.<br><br>
> In Summary,  __dependencies__ are required to __run__, __devDependencies__ only to __develop__.

### 6. What is Tree Shaking?

> Process of analyzing the imports and exports of each module, and removes everything that __isn't used__. This is
> called `tree shaking` or `dead code elimination`

### 7. What is Hot Module Replacement?

> `HMR` improves the development experience by updating modules in the browser at runtime __without needing a whole page
> refresh.__ This means that application state can be retained as you change small things in your code.<br><br>
> `Note:` As you make changes to your code, Parcel automatically rebuilds the changed files and updates your app in the
> browser. By default, __Parcel( Bundler )__ fully reloads the page, but in some cases it may perform Hot Module
> Replacement (HMR). Also note that __Hot reloading is different from HMR__.

### 8. List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.

### 9. What is `.gitignore`? What should we add and not add into it?

> A __.gitignore__ file specifies intentionally untracked files that Git should ignore. <br><br>
> In general, the things you put in .gitignore on a typical project include anything that your build system might
> produce, plus any configuration files that are user-specific (say, if your program requires the user to generate a
> config file to run). If there are other build products or generated files that users might create in development (say,
> HTML files from Markdown or AsciiDoc) but that aren't normally built, you should ignore those, too
> <br><br>
> Some things to include in gitignore: node_modules, IDE config files, dist folder, parcel-cache.

### 10. What is the difference between `package.json` and `package-lock.json`?

> The `package.json` is used for more than dependencies - like defining project properties, description, author &
> license
> information, scripts, etc. The `package-lock.json` is solely used to lock dependencies to a specific version number.(
> which helps us to install node_modules on server)

### 11. Why should I not modify `package-lock.json`?

> It is a generated file and is not designed to be manually edited. Its purpose is to track the entire tree of
> dependencies (including dependencies of dependencies) and the exact version of each dependency.
> <br><br>
> That’s because `package.json` usually doesn’t specify exact versions, so depending on when/where you invoke npm
> install, you can see different versions than a vulnerability scanner. This is a recipe for disaster and lots of
> unneeded
> work. The `package-lock.json` file was introduced in npm version 5 to solve this problem.

12. What is `node_modules` ? Is it a good idea to push that on git?

13. What is the `dist` folder?

14. What is `browserlists`

15. Read about dif bundlers: vite, webpack, parcel

16. Read about: ^ - caret and ~ - tilda

17. Read about Script types in html (MDN Docs)

## Project Assignment:

In your existing project

1. intialize `npm` into your repo
2. install `react` and `react-dom`
3. remove CDN links of react
4. install parcel
5. ignite your app with parcel
6. add scripts for “start” and “build” with parcel commands
7. add `.gitignore` file
8. add `browserlists`
9. build a production version of your code using `parcel build`

## References

* Creating your own create-react-app
* Parcel Documentation: https://parceljs.org/
* Parcel on Production: https://parceljs.org/features/production/
* BrowsersList: https://browserslist.dev/
