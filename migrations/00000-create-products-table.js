exports.up = async (sql) => {
  sql`
    CREATE TABLE products(
      id SERIAL PRIMARY KEY,
      name VARCHAR NOT NULL,
      type VARCHAR NOT NULL,
		 	image VARCHAR NOT NULL,
		 	color VARCHAR NOT NULL,
		 	size VARCHAR[] NOT NULL,
		 	price INT NOT NULL
    )
  `;
};

exports.down = async (sql) => {
  sql`
    DROP TABLE products
  `;
};
