
## Artwork instructions

## Splash Screen

`SplashScreen\SplashScreen-4096x4096.png` serves as the base splash screen artwork.

Steps to convert the base artwork as a LaunchImage in XCode:
 1. Resize the base artwork using Preview to the height required by the LaunchImage, setting the width the same as the height.
 2. Center crop the image using [https://croppola.com](https://croppola.com) to the correct width required by the LaunchImage.
 3. Save the image into `SplashScreen\iOS`
 4. Go to Images.xcassets in Xcode, click on LaunchImage, and drag the image into the right slot as a LaunchImage.

Steps to convert the base artwork as a LaunchImage in Android:
 1. Resize the base artwork using Preview to the height required by the LaunchScreen, setting the width the same as the height.
 2. Center crop the image using [https://croppola.com](https://croppola.com) to the correct width required by the LaunchScreen.
 3. Save the image into `SplashScreen\Android`
 4. Copy the relevant images to the appropriate `android/app/src/main/res/drawable-*` folders

## App Icon

`AppIcon\AppIcon-1024x1024.png` serves as the base app icon artwork.

Steps to convert the base artwork as a AppIcon in XCode and Android:
 1. Resize the base artwork to the correct icons using [https://makeappicon.com](https://makeappicon.com).
 2. Go to Images.xcassets in Xcode, click on AppIcon, and drag all the images into XCode.
 3. Copy images to correct `android\app\src` folders.
