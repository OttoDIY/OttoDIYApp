
# Windows Setup

This will take 1 hour or longer depending on Internet and your laptop speed.

In a nutshell, these are the steps:
  * Install react native pre-requisites for Windows
  * Run HelloWorld React Native app on an Android device
  * Run Otto app on an Android device

## Install react native pre-requisites

I would recommend you follow the steps below. Alternatively you can follow the [React Native getting started docs](https://facebook.github.io/react-native/docs/getting-started) instead.

So grab a coffee ☕ and let's get started.

### Open an Administrator Command Prompt

When running the below steps in a command prompt, it's best to do it as an Administrator.

1. To open an Administrator Command Prompt
    * Search "Command Prompt", right click "Command Prompt" and select "Run as Administrator"
    * Having trouble? See Option 2 in https://www.howtogeek.com/194041/how-to-open-the-command-prompt-as-administrator-in-windows-8.1

### Install Chocolatey

1. Open an Administrator Command Prompt

2. Install chocolatey (popular package manager for Windows - see https://chocolatey.org/install)
    * ```@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"```

### Install Node, Python2, JDK8, Yarn and Git using Chocolatey

This will take up to 5 mins or longer to complete.

1. Open an Administrator Command Prompt

2. Install Node, Python2, JDK8, Yarn and Git
    * ```choco install -y nodejs.install python2 jdk8 yarn git```

3. Refresh env in your command prompt (important!)
    * ```refreshenv```

### Install React Native command line interface (CLI)

1. Open an Administrator Command Prompt

2. Install the React Native CLI
    * ```npm install -g react-native-cli```

### Install and Setup Android Studio

This will take up to 20 mins or longer to complete.

1. Download and install Android Studio (1gb download)
    * Go to https://developer.android.com/studio/index.html, download and install it

2. Install Android Studio (it will use 3gb of space)

3. Click Finish, then start and setup Android Studio (it will use 1gb of space)
    * Choose 'Do not import settings' if you don't have an Android Studio config that you can copy from another laptop
    * Choose 'Standard' setup

### Configure the ANDROID_HOME system environment variable

1. Open a Administrator Command Prompt and get your username
    * ```echo %username%```

2. Get the path to the Android SDK
    * Copy ```C:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk``` and replace YOUR_USERNAME with your username from Step 1

3. Add ANDROID_HOME system environment variable
    * Search "Edit system", click "Edit the system environment variables", click on "Environment Variables"
    * Click New under the **System variables** section (NOT the User variables section)
    * Set ANDROID_HOME as the Variable name
    * Paste the path to the Android SDK from Step 2 as the Variable value
    * Click OK

4. Refresh env in your command prompt (important!)
    * ```refreshenv```

5. Check that ANDROID_HOME is set correctly
    * ```echo %ANDROID_HOME%```

### Add Android SDK platform tools to Path user environment variable

1. Open a Administrator Command Prompt and get your username
    * ```echo %username%```

2. Get the path to the Android SDK platform tools
    * Copy ```C:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk\platform-tools``` and replace YOUR_USERNAME with your username from Step 1

3. Edit Path user environment variable and add the Android SDK platform tools path
    * Search "Edit system", click "Edit the system environment variables", click on "Environment Variables"
    * Select "Path" under the **User variables** section (NOT the System variables section) and click on Edit
    * Click New
    * Paste the path to the Android SDK platform tools from Step 2
    * Click OK

4. Refresh env in your command prompt (important!)
    * ```refreshenv```

5. Check adb (e.g. a useful Android platform tool) is available
    * ```adb version```

### Accept Android SDK licenses

1. Open a Administrator Command Prompt

2. Accept Android SDK licenses
    * ```cd "%ANDROID_HOME%"\tools\bin```
    * ```sdkmanager --licenses```
    * Accept the licenses

## Run HelloWorld React Native app

Time to test that React Native works on a real Android device.

Hint: You can also test on a virtual device, see https://developer.android.com/studio/run/managing-avds.html.

1. Open a Administrator Command Prompt

2. Create the HelloWorld project
    * ```cd C:\Users\%username%```
    * ```react-native init HelloWorld```

3. Enable developer options on your Android device (See https://developer.android.com/studio/debug/dev-options#enable)
    * Open the Settings app on your device
    * Select System (Only on Android 8.0 or higher)
    * Scroll to the bottom and select About phone
    * Scroll to the bottom and tap Build number 7 times
    * Return to the previous screen, scroll down and select Developer options
    * Scroll down a little and enable USB debugging

4. Connect your Android device via USB to your laptop

The next step will take a few minutes, make sure to click "Allow Access" if asked to by a Firewall popup.

5. Install and run the app on your Android device
    * ```cd HelloWorld```
    * ```react-native run-android```

### HelloWorld React Native app troubleshooting

#### Device is UNAUTHORIZED

If you see the error "Device is UNAUTHORIZED", make sure to click OK when the popup "Allow USB debugging" shows on your device.

To check to see if your device is connected and authorized:
  * ```adb devices```

## Run the Code & Robots app

Follow the instructions in https://github.com/codeandrobots/codeandrobots-app#arrow_up-how-to-setup, i.e:
  * ```cd C:\Users\%username%```
  * ```git clone https://github.com/OttoDIY/OttoDIYApp.git```
  * ```yarn install --ignore-engines```
  * ```copy .env.example .env```
  * ```react-native run-android --variant=devDebug```

### Troubleshooting

#### Failed to create directory

If you see the error "Failed to create directory" then keep running ```react-native run-android --variant=devDebug``` until they stop happening, sometimes as much as 3 or 4 times :/

#### Activity class {com.ottodiy/com.ottodiy.MainActivity} does not exist

If you see the error "Activity class {com.ottodiy/com.ottodiy.MainActivity} does not exist" then all is OK but you have to launch the Code & Robots app manually from your device. This error occurs because react-native CLI doesn't work well yet with Android variants.

#### Operation not permitted, lstat

If you see the error "Operation not permitted, lstat" then try the following:

1. Start the React Native bundler inside a **NEW** terminal or command prompt
  * ```cd OttoDIYApp```
  * ```npm cache clean```
  * ```npm start -- --reset-cache```

2. Run the app in a different terminal or command prompt
  * ```react-native run-android --variant=devDebug```
  
#### Could not dispatch a message to the daemon

If you see the error "Could not dispatch a message to the daemon" then run ```adb devices``` and make sure that the daemon is running or starts successfully and also that your attached device is listed.

