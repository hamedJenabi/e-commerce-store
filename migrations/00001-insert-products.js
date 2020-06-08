// insert products into the database
exports.up = async (sql) => {
  sql`
    INSERT INTO products(name, type, image, url, color, size, price) VALUES   

			('lazyShirt','women','TW02navy.jpg', '/about','purple','XS',20), 
			('sweaty','women','TW02navy.jpg', '/about','purple','S',20), 
			('bigApple','women','TW02navy.jpg', '/about','purple','M',20), 
			('BluesIdiom','women','TW02navy.jpg', '/about','purple','L',20), 
			('BluesTypes','women','TW02navy.jpg', '/about','purple','XL',20), 
			('lazyShirt','men','TW02navy.jpg', '/about','purple','XS',20), 
			('sweaty','men','TW02navy.jpg', '/about','purple','XS',20), 
			('bigApple','men','TW02navy.jpg', '/about','purple','XS',20), 
			('BluesIdiom','men','TW02navy.jpg', '/about','purple','XS',20), 
			('BluesTypes','men','TW02navy.jpg', '/about','purple','XS',20), 
			('lazyShirt','uniSex','TW02navy.jpg', '/about','purple','XS',20), 
			('sweaty','uniSex','TW02navy.jpg', '/about','purple','XS',20), 
			('bigApple','uniSex','TW02navy.jpg', '/about','purple','XS',20), 
			('BluesIdiom','uniSex','TW02navy.jpg', '/about','purple','XS',20), 
			('BluesTypes','uniSex','TW02navy.jpg', '/about','purple','XS',20)			
		
    
  `;
};

// remove proucts into the database
exports.down = async (sql) => {
  sql`
    DROP TABLE products
  `;
};
