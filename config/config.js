const config = {
  general: {
    host: 'localhost',
    port: 8080,
  },
  db: {
    database: 'blog',
    username: 'postgres',
    password: 'root',
    params: {
      dialect: 'postgres',
      host: 'docker.for.mac.localhost',
      define: {
        underscored: true,
      },
    },
  },
  redis: {
    host: 'docker.for.mac.localhost',
    port: 6379,
  },
  jwtAuth: {
    jwtSecret: 'fgGr4gG6yh',
    jwtSession: {
      session: false,
    },
  },
  mailer: {
    service: 'Gmail',
    user: 'elena.k0595',
    pass: 'testing1234',
  },
};

module.exports = config;
