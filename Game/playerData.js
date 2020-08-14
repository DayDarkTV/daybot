const DataManager = require('./dataManager');

userdatapath = './userdata.json';

class PlayerData {
//null 4

    static GetID(member) {
        var id = member.user.id;
        return id;
    }

    static GetActiveProfile(member) {
        var userdata = DataManager.Read(userdatapath);
        return userdata.profile;
    }

    static SetActiveProfile(member, profile) {
        var userdata = DataManager.Read(userdatapath);
        setTimeout(function() {
            console.log(userdata);
            userdata.profile = profile;
            console.log(userdata);
            var data = JSON.stringify(userdata, null, 4);
            console.log(data);
            DataManager.Write(userdatapath, data);
        }, 14);
        

    }

}

module.exports = PlayerData;