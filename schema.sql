DROP DATABASE IF EXISTS opentable;

CREATE DATABASE opentable;

USE opentable;

CREATE TABLE restaurant (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  description text,
  dining_style varchar(20),
  phone_number varchar(20) NOT NULL,
  website varchar(60),
  executive_chef varchar(40),
  address varchar(255) NOT NULL,
  neighborhood varchar(30) NOT NULL,
  parking_details varchar(255),
  events_promotions text,
  additional text,
  review_number int,
  average_star decimal(2,1),
  PRIMARY KEY (id)
);


CREATE TABLE payments (
  id int NOT NULL AUTO_INCREMENT,
  restaurant_id int NOT NULL,
  method varchar(20),
  PRIMARY KEY (id)
);



CREATE TABLE operation_hours(
  id int NOT NULL AUTO_INCREMENT,
  restaurant_id int NOT NULL,
  open_day int NOT NULL,   -- 1-Monday, 2-Tuesday,...,7-Sunday
  start_time varchar(7), -- "00:00am" the format
  end_time varchar(7), 
  PRIMARY KEY (id)
);


CREATE TABLE cuisines(
  id int NOT NULL AUTO_INCREMENT,
  restaurant_id int,
  cusine_type varchar(20),
  PRIMARY KEY (id)
);

-- run mysql -u root < schema.sql

INSERT into restaurant (name,description,dining_style,phone_number,website,executive_chef,address,neighborhood,parking_details,events_promotions,additional,review_number,average_star) VALUES (	"	Cassin-Sanford	","	integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu	","	Puce	","	728-786-5048	","	http://mit.edu	","	Wilmar Anfosso	","	1436 Judy Street	","	NurmijÃ¤rvi	","	blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus	","	quis lectus suspendisse potenti in eleifend quam a odio in hac	","	malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum	",	5531	,	3.2	);
INSERT into restaurant (name,description,dining_style,phone_number,website,executive_chef,address,neighborhood,parking_details,events_promotions,additional,review_number,average_star) VALUES (	"	McCullough-Bogan	","	mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non	","	Goldenrod	","	524-663-3029	","	https://cmu.edu	","	Sybila Ramas	","	886 Bowman Avenue	","	IkedachÅ	","	nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et	","	praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla	","	id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at	",	77093	,	2.6	);


INSERT into payments (restaurant_id,method) VALUES (2,"Visa");
INSERT into payments (restaurant_id,method) VALUES (2,"Master");
INSERT into payments (restaurant_id,method) VALUES (2,"AMEX");


INSERT into operation_hours (restaurant_id,open_day,start_time,end_time) VALUES (2, 1, "11:00am", "9:00pm");
INSERT into operation_hours (restaurant_id,open_day,start_time,end_time) VALUES (2, 2, "11:00am", "9:00pm");
INSERT into operation_hours (restaurant_id,open_day,start_time,end_time) VALUES (2, 3, "11:00am", "9:00pm");
INSERT into operation_hours (restaurant_id,open_day,start_time,end_time) VALUES (2, 4, "11:00am", "9:00pm");
INSERT into operation_hours (restaurant_id,open_day,start_time,end_time) VALUES (2, 5, "11:00am", "9:00pm");
INSERT into operation_hours (restaurant_id,open_day,start_time,end_time) VALUES (2, 6, "11:00am", "9:00pm");
INSERT into operation_hours (restaurant_id,open_day,start_time,end_time) VALUES (2, 7, "11:00am", "9:00pm");

INSERT into cuisines (restaurant_id, cusine_type) VALUES (2, "Italian");

