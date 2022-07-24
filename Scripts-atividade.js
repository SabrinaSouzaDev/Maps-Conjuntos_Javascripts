const getAdmins = map => {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
};

const usuarios = new Map();

usuarios.set('Maria', 'Admin');
usuarios.set('John', 'Admin');
usuarios.set('Jadi', 'Usuer');
usuarios.set('Alex', 'Usuer');

console.log(getAdmins(usuarios));