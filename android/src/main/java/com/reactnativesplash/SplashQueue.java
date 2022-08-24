package com.reactnativesplash;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import java.util.Vector;

public class SplashQueue<E> extends Vector<E> {

  public SplashQueue() {}

  @Nullable
  public synchronized E shift() {
    if (size() == 0) {
      return null;
    }

    E item = elementAt(0);
    removeElementAt(0);

    return item;
  }

  public void push(@NonNull E item) {
    addElement(item);
  }
}
