// config.js
const env = process.env.NODE_ENV || 'test';

const dev = {
    app: {
	port: 3000
    },
    db: {
	host: 'localhost',
	port: 27017,
	name: 'hellodb',
	user: 'admin',
	pass: 'justasbad'
    }
};

const test = {
    app: {
	port: 3000
    },
    db: {
	host: 'localhost',
	port: 27017,
	name: 'hellodb',
	user: 'admin',
	pass: 'justasbad'
    }
};

const config = {
    dev,
    test
};

module.exports = config[env];

