package com.ottodiy;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.reactnativecommunity.slider.ReactSliderPackage;
import io.sentry.RNSentryPackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.polidea.reactnativeble.BlePackage;
import com.rusel.RCTBluetoothSerial.RCTBluetoothSerialPackage;
import com.brentvatne.react.ReactVideoPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.krazylabs.OpenAppSettingsPackage;
import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.auth.RNFirebaseAuthPackage;
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;
import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage;
import com.apsl.versionnumber.RNVersionNumberPackage;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.i18n.reactnativei18n.ReactNativeI18n;
import com.oblador.vectoricons.VectorIconsPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new ReactSliderPackage(),
            new RNSentryPackage(),
            new RNCWebViewPackage(),
            new BlePackage(),
            new RCTBluetoothSerialPackage(),
            new ReactVideoPackage(),
            new LinearGradientPackage(),
            new OpenAppSettingsPackage(),
            new RNFirebasePackage(),
            new RNFirebaseAuthPackage(),
            new RNFirebaseMessagingPackage(),
            new RNFirebaseNotificationsPackage(),
            new RNVersionNumberPackage(),
            new SplashScreenReactPackage(),
            new ReactNativeConfigPackage(),
            new ReactNativeI18n(),
            new VectorIconsPackage(),
            new RNDeviceInfo()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
