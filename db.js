const { Client } = require("pg");
const client = new Client(
  process.env.DATABASE_URL || "postgres://localhost/1500"
);

const syncAndSeed = async () => {
    const SQL = `

    DROP TABLE IF EXISTS buildings;
    CREATE TABLE buildings (
        id SERIAL PRIMARY KEY,
        name VARCHAR(35),
        location VARCHAR(50),
        altitude VARCHAR(30),
        image VARCHAR(50));

        INTERT INTO buildings (name, location, yearCompleted, altitude, image) VALUES ('Burj Khalifa', 'Dubai, UAE', 2010, '2717 Feet','/1.jpg);
        INTERT INTO buildings (name, location, yearCompleted, altitude, image) VALUES ('Shanghai Tower', 'Shanhai, China', 2015, '2073 Feet', '/2.jpg);
        INTERT INTO buildings (name, location, yearCompleted, altitude, image) VALUES ('Makkah Royal Clock Tower', 'Mecca, Saudi Arabia', 2012, '1972 Feet', '/3.jpg');
        INTERT INTO buildings (name, location, yearCompleted, altitude, image) VALUES ('Ping An Finance Center', 'Shenzhen, China', 2017, '1965 Feet', '/4.jpg');
        INTERT INTO buildings (name, location, yearCompleted, altitude, image) VALUES ('Lotte World Tower', 'Seoul, South Korea', 2017, '1819 Feet', '/5.jpg');

    `;
    await client.query(SQL);
};

module.exports={
    syncAndSeed,
    client,
};