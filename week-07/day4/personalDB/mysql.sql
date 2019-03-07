CREATE TABLE people (
  `id` INT NOT NULL AUTO_INCREMENT,
  `prefix` VARCHAR(30),
  `first_name` VARCHAR(20) NOT NULL DEFAULT '',
  `last_name` VARCHAR(20) NOT NULL DEFAULT '',
  `address` VARCHAR(100) NOT NULL DEFAULT '',
  `height` DECIMAL(30,2),
  `bitcoin_address` VARCHAR(50) NOT NULL DEFAULT '',
  `color_preference` VARCHAR(20),
  PRIMARY KEY (`id`)
)ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

CREATE TABLE IF NOT EXISTS `despatch` (
 `desp_no` varchar(8) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `desp_data` date NOT NULL DEFAULT '0000-00-00',
 `client_city` varchar(15) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `client_country` varchar(15) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `book_id` varchar(8) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `aut_id` varchar(8) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `no_of_copy` int(5) NOT NULL DEFAULT '0',
 `sell_price` decimal(12,2) NOT NULL DEFAULT '0.00',
 `disc_per` decimal(5,2) NOT NULL DEFAULT '0.00',
 `total_cost` decimal(12,2) NOT NULL DEFAULT '0.00',
 PRIMARY KEY (`desp_no`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;


