// insert products into the database
exports.up = async (sql) => {
  sql`
    UPDATE  products SET (name, type, image, color, size, price) VALUES   

			('lazyShirt(W)','women','TW02navy.jpg','purple','{ XS , S , M , L , XL }',20), 
			('sweaty(W)','women','TW02navy.jpg','purple','{ XS , S , M , L , XL }',20), 
			('bigApple(W)','women','TW02navy.jpg','purple','{ XS , S , M , L , XL }',20), 
			('BluesIdiom(W)','women','TW02navy.jpg','purple','{ XS , S , M , L , XL }',20), 
			('BluesTypes(W)','women','TW02navy.jpg','purple','{ XS , S , M , L , XL }',20), 
			('lazyShirt(M)','men','tm16_M.jpg','purple','{ XS , S , M , L , XL }',20), 
			('sweaty(M)','men','tm16_M.jpg','purple','{ XS , S , M , L , XL }',20), 
			('bigApple(M)','men','tm16_M.jpg','purple','{ XS , S , M , L , XL }',20), 
			('BluesIdiom(M)','men','tm16_M.jpg','purple','{ XS , S , M , L , XL }',20), 
			('BluesTypes(M)','men','tm16_M.jpg','purple','{ XS , S , M , L , XL }',20), 
			('lazyShirt(All)','uniSex','tw16_W.jpg','purple','{ XS , S , M , L , XL }',20), 
			('sweaty(All)','uniSex','tw16_W.jpg','purple','{ XS , S , M , L , XL }',20), 
			('bigApple(All)','uniSex','tw16_W.jpg','purple','{ XS , S , M , L , XL }',20), 
			('BluesIdiom(All)','uniSex','tw16_W.jpg','purple','{ XS , S , M , L , XL }',20), 
			('BluesTypes(All)','uniSex','tw16_W.jpg','purple','{ XS , S , M , L , XL }',20)			
		
    
  `;
};

//remove proucts into the database
exports.down = async (sql) => {
  sql`
    DROP TABLE products
  `;
};
