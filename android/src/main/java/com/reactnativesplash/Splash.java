package com.reactnativesplash;

import android.app.Activity;

import androidx.annotation.NonNull;

public class Splash {

  public static void init(@NonNull final Activity activity) {
    SplashModule.init(activity);
  }
}
