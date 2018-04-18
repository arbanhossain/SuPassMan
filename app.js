"use strict";

const { remote } = require('electron');


function openCreds(url) {
  var ht = 430;
  if(url=='/decrypt.html')ht = 300;
  if(url=='/deleteCreds.html')ht = 200;
  let win = new remote.BrowserWindow({
    width: 275,
    height: ht,
    parent: remote.getCurrentWindow(),
    modal: true,
    resizable: false
    //frame: false
  })

  var theUrl = 'file://' + __dirname + url;

  win.loadURL(theUrl);
}