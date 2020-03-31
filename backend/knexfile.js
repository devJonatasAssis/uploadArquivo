// Update with your config settings.

module.exports = {
	development: {
		client: 'mysql',
		connection: {
			database: 'produto',
			user: 'root',
			password: 'mysql'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	}


	// development: {
	//   client: 'sqlite3',
	//   connection: {
	//     filename: './dev.sqlite3'
	//   }
	// },

	// staging: {
	//   client: 'postgresql',
	//   connection: {
	//     database: 'my_db',
	//     user:     'username',
	//     password: 'password'
	//   },
	//   pool: {
	//     min: 2,
	//     max: 10
	//   },
	//   migrations: {
	//     tableName: 'knex_migrations'
	//   }
	// },
};
