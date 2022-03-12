# BlockPower Contacts Uploader

A small iOS app that allows users to easily upload their contacts to Block Power.

## Tech Stack

We've chosen to write the app in TypeScript using ReactNative.
We also use Expo and the EAS build service to quickly obtain a good dev experience.

### React Native

https://reactnative.dev/

React Native is a framework that allows developers to write React-like code in JS / TS and then generate native Android and iOS apps from that code.
This can be a compelling option, as it allows developers to write and maintain a single codebase which can still target multiple operating systems natively, and it allows developers to re-use many of the tools, libraries & knowledge from web development.

We currently only indent to support iOS devices, but we still opted for React Native over a native Swift application as:

-   we retain the option of easily supporting Android in the future.
-   Dev work is possible on non Apple devices.
-   the dev team is more familiar with TypeScript + React than Swift, so we are likely to be able to make quicker progress.
-   React Native supports our expected feature set well
-   There is minimal boiler-plate code / setup time for a small app such as this

### Expo

https://docs.expo.dev/

Expo is a set of tools and services that wrap around React Native and aim to give a great developer experience out of the box.

Most notably for us, expo provides:

-   libraries for common native tasks (cameras, device security etc)
-   tools for running dev versions of the app in emulators and on real devices (including hot refresh etc)
-   the EAS build service, for building preview and production artifacts.

Expo hides much of the OS specific config / set up that can occur in pure React Native apps.
For large or complex apps this can be more of a hindrance than a help, but BlockPower is a small app without any complex native interactions, so we expect Expo to be a great fit for this project.

### EAS

https://docs.expo.dev/eas/

A cloud build system build around Expo. It gives us a central place to manage credentials (such as Apple developer account info), and makes setting up the build process very straight forward.

It should also be very easy to hand over to anyone else that supports the app in the future.

## Zero to Hero

Before we start, there are a couple of things that we'll need to install.

-   [Node](https://nodejs.org/en/download/): Initially built using v16 (but any recent version is probably fine). (Can also be installed via brew if you are on a mac)
-   [Yarn](https://classic.yarnpkg.com/en/docs/install): Still using Yarn V1 for now.

### First time set up

Checkout the project and install dependencies:

```shell
git clone QQQ
cd BlockPower
yarn install
```

and... that should be it! :)
The code is ready to be opened in your favourite TypeScript IDE.

Check the installation by running the tests with `yarn run test`.

#### Prettier & Husky

https://prettier.io/
https://typicode.github.io/husky/#/

We use prettier for code formatting, and husky for adding a pre-commit hook so that prettier is run automatically before each commit.

Husky should have been set up automatically for you as part of the yarn install, so pre-commit formatting should work out of the box.

Many devs _also_ like to run prettier automatically after every save.
If that sounds like you, this is trivial to enable in pretty much any IDE - Prettier docs on this [here](https://prettier.io/docs/en/editors.html)

### Yarn commands

| command              | description                                                                             |
| -------------------- | --------------------------------------------------------------------------------------- |
| `dev:device`         | Start the app in dev mode ready to be run on a real iphone                              |
| `dev:emulator`       | Start the app in dev mode running on an emulated iPhone                                 |
| `lint`               | Run ES Lint to check the app for common errors                                          |
| `lint:fix`           | Same as just 'lint', but will also automatically fix anything it can                    |
| `publish:preview`    | Trigger an EAS preview build. Generates a .app file that can be run on emulated devices |
| `publish:production` | Trigger an EAS production build that can be submitted to the app store.                 |
| `test`               | Runs all tests in the project                                                           |
| `test:coverage`      | Runs all tests in the project and reports on the coverage                               |
| `typecheck`          | Runs the TypeScript compiler to check for any broken types                              |
| `prepare`            | Runs on install to setup husky pre-commit hooks                                         |
| `prettier:check`     | Get prettier to check that the project is correctly formatted                           |
| `prettier:write`     | Manually run prettier against the entire project                                        |
| `pretty-quick`       | Run prettier against only staged changes.                                               |

### Running dev build on an emulator

In order to run the app in the emulator, you'll need to install an emulator.
On a Mac, your easiest option is to install one via xcode :(

[Installation Instructions](https://docs.expo.dev/workflow/ios-simulator/)

Once installed, you can just run `yarn run dev:emulator` which will start the simulator for you, and automatically load up expo & the latest code.

#### Note

Expo sets up hot-reloading for you, so most of the time changes made in the IDE will be reflected in near real time on the simulator. However in my experience this can be pretty flaky, and it will often get itself stuck / disconnected. To fix this you can:

-   press 'r' in the terminal to reload the app (quick and sometimes works)
-   close the expo app on the phone completely and then re-open it and re-load the app that way. (slower but more reliable)

### Running dev build on a real device

Running on a real device is also easy.

-   install the Expo Go app from the App Store / Play Store
-   start the app using `yarn run dev:device` (should open a webpage)
-   scan the QR code on the newly launched web page.
-   app should open on your phone.

#### Note

Same note applies here as with the emulated approach.

### Creating distributable versions.

We use Expo's EAS service for creating the builds.
For iOS there are 2 versions:

-   preview: Can only be used on the emulated devices
-   production: Can be submitted to the store, but can't easily be installed on any test devices.

To create these builds, you'll need to install the EAS CLI and log in to the EAS account.

```shell
npm install --global eas-cli
eas login
```

(login details can be found in Keeper QQQQ)

Once set up, builds can be triggered using one of the commands below.

```shell
yarn run publish:preview
yarn run publish:production
```
