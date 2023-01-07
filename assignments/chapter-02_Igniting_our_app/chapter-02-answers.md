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

> #### Parcel( Bundlers ) Functionalities
> * HMR -Hot Module Reloading
> * File Watcher algorithm: C++
> * Bundling
> * Minify
> * Cleaning you code
> * Dev abd Production Build
> * Super Fast build algorithms
> * Image Optimization
> * Caching while development
> * Compression
> * Compatibility with older versions: polyfills
> * Https on dev
> * Consistent Hashing Algorithms

> References: <br>
> For all the Features: https://parceljs.org/docs/ <br>
> Features use in development mode: https://parceljs.org/features/development/ <br>
> Features use in production mode: https://parceljs.org/features/production/ <br>

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

### 12. What is `node_modules` ? Is it a good idea to push that on git?

> You can think of the node_modules folder like a __cache for the external modules__ that your project depends upon.
> When
> you npm install them, they are downloaded from the web and copied into the node_modules folder and Node.js is trained
> to
> look for them there when you import them (without a specific path). I refer to it as a cache because the node_modules
> folder __can be entirely recreated from scratch__ at any time by just reinstalling all the dependent modules (that
> should be
> listed in your project folders). <br><br/>
> It just a directory created by npm and a way of tracking each packages you install locally via __package.json__.
> <br/> <br/>
> The exact version you were using is known and stored in your __package.json__ or __package-lock.json__ so at any time
> you or
> anyone else uses your project can download your code and then fetch all the other dependent modules from their
> original
> source (including even the exact same versions you were using). <br/><br/>
> It is best to reinstall all the dependent modules on the hosting machine and not copy them from your development
> machine. This is because the process of installing them on the __hosting machine (which might be a different platform
or
> OS than your development machine)__ may use a bit of a __different installation process for the specific hosting
environment__.

### 13. What is the `dist` folder?

> The short-form __dist__ stands for __distributable__ and refers to a directory where files will be stored that can be
> directly
> used by others without the need to __compile or minify__ the source code that is being reused.
> <br/> <br/>
> __/dist means "distributable", the compiled code/library.__
> <br/> Folder structure varies by build system and programming language. Here are some standard conventions:
> <br/> `src/:` __"source"__ files to build and develop the project. This is where the original source files are
> located, before being
> compiled into fewer files to dist/, public/ or build/.
> <br/> `dist/:` __"distribution"__, the compiled code/library, also named public/ or build/. The files meant for
> production or public
> use are usually located here. There may be a slight difference between these three:
> <br/> `build/`: is a compiled version of your src/ __but not a production-ready.__
> <br/> `dist/`: is a __production-ready compiled version__ of your code.
> <br/> `public/`: usually used as the files runs on the browser. which it may be the __server-side JS__ and also
> include
> some HTMLand CSS.
> <br/> <br/>
> Something similar applies to JavaScript modules. Usually JavaScript code is __minified and obfuscated for use in
> production__. Therefore, if you want to distribute a JavaScript library, it's advisable to put the plain (not
> minified)
> __source code into a src (source) directory__ and the __minified and unclear version into the dist (distributable)
__
> directory, so others can grab the minified version right away without having to minify it themselves.
> <br/> <br/>
> Note: Some developers use names like `target`, `build` or `dest` (destination) instead of dist. But the purpose of
> these
> folders is identical.

### 14. What is `browserlists`?

> The config to share target browsers and Node.js versions between different front-end tools. It is used in:
>* Autoprefixer
>* Babel
>* postcss-preset-env
>* eslint-plugin-compat
>* stylelint-no-unsupported-browser-features
>* postcss-normalize
>* obsolete-webpack-plugin

> All tools will find target browsers automatically, when you add the following to `package.json`:
> ``` json 
> "browserslist": [
> "defaults and supports es6-module",
> "maintained node versions"
> ]
> ```
> Or in `.browserslistrc` config:
> ``` json 
> # Browsers that we support
>
> defaults and supports es6-module
> maintained node versions
> ```

> Developers set their version lists using queries like `last 2 versions` to be free from updating versions
> manually.
> * BrowsersList: https://browserslist.dev/

### 15. Read about: ^ - caret and ~ - tilda.

> * `major.minor.patch`: `1.2.3`
> * `~version`:  __“Approximately equivalent to version”__, i.e., only accept new __patch__ versions. Will update you to
    all future patch versions, __without
    incrementing
    the minor version__. `~1.2.3` will use releases from `1.2.3 to <1.3.0`.
> * `^version`:  __“Compatible with version”__ i.e., accept new __minor and patch__ versions.Will update you to all
    future
    minor/patch versions, __without incrementing
    the
    major version__. `^2.3.4` will use releases from `2.3.4 to <3.0.0`.

Reference:https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json

### 16. Read about Script types in html (MDN Docs).

> https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type
> https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script

### 17. Read about diff bundlers: vite, webpack, parcel?

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
