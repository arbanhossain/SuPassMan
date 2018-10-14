# SuPassMan
##### Dead simple password manager that is quite annoying.

This is an old project that I wish to rewrite completely sometime in future. The current version is written in JS with [Electron](https://electronjs.org). It has a lot of bad practices(literally) and some annoying handicaps. The main goal was to simply save your passwords in encrypted form so that I can access them later. And it does nothing more than that. You have to know what you're doing.

### How to use

You can get the releases from the **Releases** page. I've tested it on Linux(Kali and Ubuntu) and Windows 10. It also has a OS X port but haven't tested it yet.

- Open the app and intialize a pass.json file. This is basically where all your credentials are stored. Remember, it will overwrite any pass.json file in the directory, if one exists. You are only one click away from removing all of that.
- The rest is pretty much self explanatory. When you want to insert a new entry, specify the website's name, your username, password and a key to encrypt the password. I recommend using the same key if you have the habit of forgetting(probably that's why you will be using a password manager so there's no point in remembering an extra key).
- If you have to delete an entry just enter the website serial number(Click **Show Credentials** to get a list of your current entries).

If you want to run from the source files instead of the releases, enter the source directory, open your terminal and run (make sure you have Electron installed):
```
electron main.js
```

### Things you should know

This is obviously not a good way to store your password and I also **don't recommend** using it. I wrote it for a quick test. Electron apps can be debugged easily and there is also no extra step of protection when you decrypt a password. If someone knows the key, the know your password. I have intention of rewriting this in a more secure and solid way when I get some time for this.
