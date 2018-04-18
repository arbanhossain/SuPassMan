const fs = require("fs");
const crypto = require('crypto');

function addStuff(){
    fs.readFile('./pass.json', 'utf-8', function(err, data) {
        if (err) throw err
        
        var obj = JSON.parse(data);

        var sitename = document.getElementById("name").value
        var name = document.getElementById("username").value;
        var pass = document.getElementById("password").value;
        var key = document.getElementById("key").value;

        var cipher = crypto.createCipher('aes192', key);
        let newpass = cipher.update(pass, 'utf8','hex');
        newpass += cipher.final('hex');

        obj.push({
            website:sitename,
            name:name,
            pass:newpass
        });

        fs.writeFile('./pass.json', JSON.stringify(obj), 'utf-8', function(err) {
            if (err) throw err
            console.log('Done!');
        })

    })
}

/*function encryptStuff(pass, key) {
    let cipher = crypto.cipher('aes192', key);
    let newpass = cipher.update(pass, 'utf8', 'hex');
    newpass += cipher.final('hex');
    return newpass;
}*/

function showCreds(){
    fs.readFile('./pass.json', 'utf-8', function(err, data) {
        if (err) throw err
        
        var obj = JSON.parse(data);
        obj.sort(SortByName);
        creds = document.getElementById('creds');
        var s ='';
        var i;
        for(i = 0; i<obj.length;i++){
            cred = obj[i];
            s += `<div id='cred'>${i+1}. ${cred.website}<br>
                    <button id='submit' onclick='toggleCred(${i+1})'>Show/Hide</button><br>
                    <ul class='credList' id='credList${i+1}'>
                        <li>Username: ${cred.name}</li>
                        <li>Password: ${cred.pass}</li>
                    </ul><br>
                  </div>`;
        }
        creds.innerHTML = s;
    })
}

function decryptCreds(){
    fs.readFile('./pass.json', 'utf-8', function(err, data){
        if (err) throw err

        var obj = JSON.parse(data);
        n = document.getElementById("number").value;
        var key = document.getElementById('keyDec').value;

        obj.sort(SortByName);

        pass = obj[n-1].pass;
        var decipher = crypto.createDecipher('aes192', key);

        var decrypted = decipher.update(pass,'hex','utf8');
        decrypted += decipher.final('utf8');
        console.log(decrypted);
        document.getElementById('showPass').innerHTML = decrypted;
    })
}

function deleteCreds(){
    fs.readFile('./pass.json', 'utf-8', function(err, data){
        if (err) throw err

        var obj = JSON.parse(data);
        n = document.getElementById("number").value;
        obj.sort(SortByName);
        obj.splice(n-1,1);

        fs.writeFile('./pass.json', JSON.stringify(obj), 'utf-8', function(err) {
            if (err) throw err
        })
    })
}

function SortByName(x,y) {
    return ((x.website == y.website) ? 0 : ((x.website.toLowerCase() > y.website.toLowerCase()) ? 1 : -1 ));
}

function toggleCred(n){
    var elem = document.getElementById(`credList${n}`);
    if(elem.style.display === 'block')elem.style.display = 'none';
    else elem.style.display = 'block';
}

function initJSON(){
    fs.writeFile('./pass.json', '[]', function (err) {
        if (err) throw err;
        console.log('Saved!');
      }); 
}