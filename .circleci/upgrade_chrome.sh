#!/bin/bash

use_chrome_stable_version() {
  sudo apt-get install libxss1 libappindicator1 libindicator7
  wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb -P /tmp
  sudo dpkg -i /tmp/google-chrome*.deb
  sudo apt-get install -f

  echo 'The latest Chrome version is:';
  google-chrome --version
}

use_chrome_stable_version
