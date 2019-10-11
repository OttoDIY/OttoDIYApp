# Otto DIY
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

## Open Source

The Otto DIY App is completly FREE under the [MIT license](https://github.com/OttoDIY/DIY/blob/master/LICENSE). You can even use it commercially and we welcome all contributions, see our [contributing guide](https://github.com/OttoDIY/DIY/blob/master/CONTRIBUTING.md) to get started.

## :rocket: How to setup and run the app

If you're new to mobile app development with React Native then here are some crash courses to bring you up to speed:
  * [React Native crash course video](https://www.youtube.com/watch?v=mkualZPRZCs)
  * [JavaScript OOP Crash Course (ES5 & ES6)](https://www.youtube.com/watch?v=vDJpGenyHaA)

**Step 1:** Install and setup React Native
  * Mac or Linux
    * See [React Native getting started doc](https://facebook.github.io/react-native/docs/getting-started)
  * Windows
    * See [Windows Setup doc](https://github.com/codeandrobots/codeandrobots-app/blob/master/SETUP_WINDOWS.md)

**Step 2:** git clone this repo
  * Mac or Linux
    * ```cd ~```
    * ```git clone https://github.com/OttoDIY/OttoDIYApp.git```
  * Windows
    * ```cd C:\Users\%username%```
    * ```git clone https://github.com/OttoDIY/OttoDIYApp.git```

**Step 3:** cd to the cloned repo
  * ```cd OttoDIYApp```

**Step 4:** Install the Application with Yarn
  * ```yarn install --ignore-engines```

**Step 5:** Copy `.env.example` to `.env`
  * Mac or Linux
    * ```cp .env.example .env```
  * Windows
    * ```copy .env.example .env```

**Step 6:** Update [App Properties](#app-properties) in ```.env``` if necessary

**Step 7:** Install and run the app
  * iOS
    * Make sure [XCode](https://developer.apple.com/xcode/) is installed
    * run `react-native run-ios`
  * Android
    * [Use your Android device](https://facebook.github.io/react-native/docs/running-on-device) or run on an [Android Emulator](https://medium.com/@Charles_Stover/create-a-react-native-app-on-an-android-emulator-1c0d94f288ae) or run on [Genymotion](https://www.genymotion.com)
    * run `react-native run-android --variant=devDebug`

### Troubleshooting

#### Activity class {com.ottodiy/com.ottodiy.MainActivity} does not exist

If you see the error "Activity class {com.ottodiy/com.ottodiy.MainActivity} does not exist" then all is OK but you have to find and launch the Code & Robots app manually from your device. This error occurs because react-native CLI doesn't work well yet with Android variants.

#### Device is UNAUTHORIZED

If you see the error "Device is UNAUTHORIZED", make sure to click OK when the popup "Allow USB debugging" shows on your device.

To check to see if your device is connected and authorized:
  * ```adb devices```

#### Failed to create directory

If you see the error "Failed to create directory" then keep running ```react-native run-android --variant=devDebug``` until they stop happening, sometimes as much as 3 or 4 times :confounded:

#### Operation not permitted, lstat

If you see the error "Operation not permitted, lstat" then try the following:

1. Start the React Native bundler inside a **NEW** terminal or command prompt
  * ```cd OttoDIYApp```
  * ```npm cache clean```
  * ```npm start -- --reset-cache```

2. Run the app in a different terminal or command prompt, see **Step 7** above

#### Could not dispatch a message to the daemon

If you see the error "Could not dispatch a message to the daemon" then run ```adb devices``` and make sure that the daemon is running or starts successfully and also that your attached device is listed.

### App Properties

When running the app locally, it will rely on the properties defined in your local `.env` file.

Have a look at [.env.example](https://github.com/OttoDIY/OttoDIYApp/blob/master/app/.env.example) for more information about app properties.

### Running on a real device

Have a look at https://facebook.github.io/react-native/docs/running-on-device to get your device setup.

## :no_entry_sign: Standard Compliant

This project adheres to [Standard](https://github.com/standard/standard).

**Lint on Commit**

This is implemented using [husky](https://github.com/typicode/husky). There is no additional setup needed.

**Bypass Lint**

If you have to bypass lint for a special commit that you will come back and clean (pushing something to a branch etc.) then you can bypass git hooks with adding `--no-verify` to your commit command.

**Understanding Linting Errors**

The linting rules are from JS Standard and React-Standard. [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).

### Testing

Before running tests you will need to install Jest.

Unit and integration tests automatically run on every ```git commit``` and ```git push```.

Unit and integration tests:
```
yarn test
```

#### View app stories in Storybook mode

1. In a new terminal, run storybook `yarn storybook`
2. In a new terminal, run the app `react-native run-ios` or `react-native run-android --variant=devDebug`
3. Choose app stories from the Storybook navigator within the app or in the browser
