Set up environment:
- Visual Studio Code
- Android Studio
- Node Package Manager (NPM)
- Node.js (Version 8 or newer)
- React Native command line interface (React Native CLI)
- Java Development Kit (JDK 8 or newer)

============
- Create 'assets' folder in <ProjectRoot>\android\app\src\main
- Set ANDROID_HOME and JAVA_HOME environment variables
- Make sure we accept all SDK licenses by running
C:\Android\sdk\tools\bin\sdkmanager --licenses
- Build to android devices:
 	+ Turn on Developer mode: Settings -> About phone -> Software infomation -> Tab 'Build number' 7 times
- Run: react-native run-android


==============
Firebase android

- Run the app by android studio to view and resolve the logs in native code.
- After resolve all errors from logs, run bundle script:
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
react-native run-android
- And then run react-native run-android
