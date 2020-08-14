const fs = require('fs');
const PlayerData = require('./playerData');

class DataManager {

    static Write(path, data) {

        fs.writeFile(path, data, err => {
            if (err) console.log(err);
        });

    }

    static Read (path) {
        var data = fs.readFileSync(path);
        var jsons = JSON.parse(data);
        console.log(data);
        console.log(jsons);
        return jsons;
    }

    static FindPath(member) {
        var filename = PlayerData.GetID(member);
        if (fs.existsSync(`${filename}`)) {
            console.log(`exists`);
            return true;
        } else {
            console.log(`doesnt exist`);
            return false;
        }
    }

}

module.exports = DataManager;