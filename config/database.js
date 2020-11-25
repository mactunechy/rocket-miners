module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        host: env("DATABASE_HOST", "firstcluster.ueynt.mongodb.net"),
        srv: env.bool("DATABASE_SRV", true),
        // port: env.int("DATABASE_PORT", 27017),
        database: env("DATABASE_NAME", "rocket-miners"),
        username: env("DATABASE_USERNAME", "rocket-miners"),
        password: env("DATABASE_PASSWORD", "rocket-minersDBPass"),
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
        ssl: env.bool("DATABASE_SSL", true),
      },
    },
  },
});
