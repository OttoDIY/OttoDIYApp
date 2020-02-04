/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import <AVFoundation/AVFoundation.h>
#import <AudioToolbox/AudioToolbox.h>

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

#import "SplashScreen.h"

// TODO Configure Firebase
//#import "Firebase.h"
//#import "RNFirebaseNotifications.h"
//#import "RNFirebaseMessaging.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  // TODO Configure Firebase, e.g. fix GoogleService-Info files for all environments
//  #if BETA
//    NSLog(@"[FIREBASE] Beta mode.");
//    NSString *filePath;
//    filePath = [[NSBundle mainBundle] pathForResource:@"GoogleService-Info-Beta" ofType:@"plist"];
//    FIROptions *options = [[FIROptions alloc] initWithContentsOfFile:filePath];
//    [FIRApp configureWithOptions:options];
//  #elif DEBUG
//    NSLog(@"[FIREBASE] Debug mode.");
//    NSString *filePath;
//    filePath = [[NSBundle mainBundle] pathForResource:@"GoogleService-Info-Dev" ofType:@"plist"];
//    FIROptions *options = [[FIROptions alloc] initWithContentsOfFile:filePath];
//    [FIRApp configureWithOptions:options];
//  #else
//    NSLog(@"[FIREBASE] Default mode.");
//    [FIRApp configure];
//  #endif
//
//  #if !(TARGET_IPHONE_SIMULATOR)
//    // The following crashes the app in the simulator for some reason
//    [RNFirebaseNotifications configure];
//  #endif

  // Set the Audio Session Category to Playback
  // https://developer.apple.com/library/content/qa/qa1668/_index.html
  AVAudioSession *audioSession = [AVAudioSession sharedInstance];
  NSError *setCategoryError = nil;
  BOOL success = [audioSession setCategory:AVAudioSessionCategoryPlayback error:&setCategoryError];
  if (!success) { /* handle the error condition */ }
  NSError *activationError = nil;
  success = [audioSession setActive:YES error:&activationError];
  if (!success) { /* handle the error condition */ }

  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];

  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge moduleName:@"Otto" initialProperties:nil];

  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];

  [SplashScreen show];
  return YES;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

// TODO Configure Firebase
//- (void)application:(UIApplication *)application didReceiveLocalNotification:(UILocalNotification *)notification {
//  [[RNFirebaseNotifications instance] didReceiveLocalNotification:notification];
//}
//
//- (void)application:(UIApplication *)application didReceiveRemoteNotification:(nonnull NSDictionary *)userInfo
//fetchCompletionHandler:(nonnull void (^)(UIBackgroundFetchResult))completionHandler{
//  [[RNFirebaseNotifications instance] didReceiveRemoteNotification:userInfo fetchCompletionHandler:completionHandler];
//}
//
//- (void)application:(UIApplication *)application didRegisterUserNotificationSettings:(UIUserNotificationSettings *)notificationSettings {
//  [[RNFirebaseMessaging instance] didRegisterUserNotificationSettings:notificationSettings];
//}

@end
