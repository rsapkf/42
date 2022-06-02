---
id: window-managers
title: Window managers
---

## dwm

- Write a desktop entry for dwm so that it shows up as an option in your login
  screen on GDM on Ubuntu:

  ```\ title="/usr/share/xsessions/dwm.desktop"
  [Desktop Entry]
  Encoding=UTF-8
  Name=Dwm
  Comment=Dynamic window manager
  Exec=dwm
  Icon=dwm
  Type=XSession
  ```

## i3

- Enable "Tap to click" on a laptop [[\*](https://cravencode.com/post/essentials/enable-tap-to-click-in-i3wm/)]

  ```\ title="/etc/X11/xorg.conf.d/90-touchpad.conf"
  Section "InputClass"
        Identifier "touchpad"
        MatchIsTouchpad "on"
        Driver "libinput"
        Option "Tapping" "on"
  EndSection
  ```
