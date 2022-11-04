-- schema/02_create_urls.sql
DROP TABLE IF EXISTS travel CASCADE;
-- CREATE URLS
CREATE TABLE travel (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  car_model TEXT NOT NULL,
  car_color TEXT NOT NULL,
  car_year INTEGER NOT NULL,
  price INTEGER  NOT NULL DEFAULT 0,
  car_img TEXT NOT NULL,
  capacity INTEGER  NOT NULL DEFAULT 4,
  pickup character varying(255) NOT NULL,
  dropoff character varying(255) NOT NULL,
  leave_date VARCHAR(255) NOT NULL,
  return_date VARCHAR(255),
  trunk BOOLEAN
);

