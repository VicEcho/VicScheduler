// const Realm = require('realm');
import electron from 'electron';
import Realm from 'realm'
const Theme = {
    name: 'Theme',
    primaryKey: 'id',
    properties: {
        name: 'string',
        id: 'string'
    }
}

const Task = {
    name: 'Task',
    primaryKey: 'id',
    properties: {
        name: 'string',
        description: 'string',
        status: 'int',
        id: 'string'
    }
}
const schemas = {
    path: electron.remote.app.getPath('userData') + '/realm' + 'temp' + '.realm',
    schema: [Theme, Task]
};

const initRealm = Realm.open(schemas)
    .then(realm=> {
        return realm;
    })
    .catch(err => {
        return null
    });

export default initRealm;