---
id: browsers
title: Browsers
---

## Firefox

- To set Firefox Developer Edition as `sensible-browser` on Linux:

  First, add Firefox Developer Edition to `update-alternatives`:

  ```shell
  sudo update-alternatives --install /usr/bin/x-www-browser x-www-browser /opt/firefox_dev/firefox/firefox 200
  ```

  (Assuming the executable path `/opt/firefox_dev/firefox/firefox`)

  Then, set it as `sensible-browser`:

  ```shell
  sudo update-alternatives --config x-www-browser
  ```

### `about:config` settings

| Option                                  | Change        |
| --------------------------------------- | ------------- |
| `geo.enabled`                           | true -> false |
| `extensions.pocket.enabled`             | true -> false |
| `browser.bookmarks.openInTabClosesMenu` | true - false  |
| `browser.bookmarks.showMobileBookmarks` | true -> false |
| `browser.bookmarks.autoExportHTML`      | false -> true |
| `browser.tabs.loadBookmarksInTabs`      | false -> true |
| `browser.tabs.tabMinWidth`              | 76 -> 100     |
| `browser.tabs.closeTabByDblclick`       | false -> true |
| `browser.tabs.closeWindowWithLastTab`   | true -> false |
| `browser.privatebrowsing.autostart`     | false -> true |
| `browser.urlbar.openintab`              |               |

### Useful shortcuts

[Firefox keyboard shortcuts](https://support.mozilla.org/en-US/kb/keyboard-shortcuts-perform-firefox-tasks-quickly)

| Shortcut                   | Action                                          |
| -------------------------- | ----------------------------------------------- |
| `Home`                     | Move to the top of the page. (See also: Vimium) |
| `Ctrl-l`                   | Highlight the url bar.                          |
| `Ctrl-Shift-o`             | Open bookmark manager.                          |
| `Ctrl-Shift-b`             | Toggle bookmarks toolbar.                       |
| `Ctrl-b`                   | Toggle bookmarks sidebar.                       |
| `Ctrl-Shift-d`             | Bookmark all open tabs in a folder.             |
| `Ctrl-Shift-a`             | Open addons manager.                            |
| `Ctrl-Shift-Del`           | Clear recent history.                           |
| `Ctrl-Shift-r` / `Ctrl-F5` | Reload the tab and clear the cache.             |
| `Ctrl-Shift-t`             | Undo close tab.                                 |
