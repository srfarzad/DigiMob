package com.digimob;

import android.app.Application;

import com.facebook.react.ReactApplication;
import dog.craftz.sqlite_2.RNSqlite2Package;
import com.reactlibrary.RNPushePackage;
import com.oblador.vectoricons.VectorIconsPackage;
import io.invertase.firebase.RNFirebasePackage;
//import com.sbugert.rnadmob.RNAdMobPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import io.invertase.firebase.admob.RNFirebaseAdMobPackage; // <-- Add this line
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
            new RNSqlite2Package(),
            new RNPushePackage(),
            new VectorIconsPackage(),
            new RNFirebasePackage(),
          //  new RNAdMobPackage(),
            new RNGestureHandlerPackage(),
              new RNFirebaseAdMobPackage()
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
