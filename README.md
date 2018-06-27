## INTRODUCTION

A starter pack for creating desktop applications; built with Angular, Angular Material & Electron.

## FEATURES

- Angular 6+ (with CLI)
- Angular Material
- TypeScript 2.7.2
- SASS
- Hot Reload
- Electron (with Builder)

## GETTING STARTED

#### Clone this repository:

``` bash
git clone https://github.com/1nv1n/angular-material-electron.git
```

#### Install dependencies:

There is an issue with `yarn` and `node_modules` that are only used in Electron on the backend when the application is built by the packager.
Please use `npm` as dependencies manager.

``` bash
npm install
```

If you want to generate Angular components with Angular-CLI , you need to have installed `@angular/cli` in global context.
Please follow the [Angular-CLI documentation](https://github.com/angular/angular-cli) if you had installed a previous version of `angular-cli`.

``` bash
npm install -g @angular/cli
```

#### Start!

``` bash
npm start
```

This should bring up the application running Angular Material with hot reload.
The Electron application code is managed by `main.ts`.
The Angular component contains an example of Electron and NodeJS native lib import.

## Included Commands

|Command|Description|
|--|--|
|`npm start`| Builds & starts the Electron App. |
|`npm run ng:serve-open`| Run the app in the browser (No Electron/NodeJS native libraries & no hot reload). |
|`npm run build`| Build the app (built files will be in the /dist folder). |
|`npm run build:dev`| Build the app with Angular AoT for development. |
|`npm run build:prod`| Build the app with Angular AoT (built files will be in the /dist folder). |
|`npm run electron:local`| Builds the app and starts Electron. |
|`npm run electron:linux`| Builds the app for Linux systems. |
|`npm run electron:windows`| Builds the app for Windows 32/64 bit systems. |
|`npm run electron:mac`|  Builds the app and generates a `.app` file of your application that can be run on a Mac. |
|`npm run test`| Runs `ng test`. |
|`npm run e2e`| Runs `ng e2e`. |

**Your application is optimised. Only the /dist folder and node dependencies are included in the executable.**

## TROUBLESHOOTING

### Error with NodeJS third party packages

Since Angular 6 does not provide an eject anymore, you can't configure your webpack config file to import node externals.
An issue in [Angular repository](https://github.com/angular/angular-cli/issues/10681) has been opened about this feature. 
Please have a look at this workaround posted on [Stack Overflow](https://stackoverflow.com/questions/50234196/after-updating-from-angular-5-to-6-i-keep-getting-the-error-cant-resolve-timer) that may work in some cases.
