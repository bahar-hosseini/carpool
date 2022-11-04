DROP TABLE IF EXISTS messages CASCADE;

CREATE TABLE messages(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  travel_id INTEGER REFERENCES travel(id) ON DELETE CASCADE,
  review_text character varying(500),
  rating INTEGER,
  date_sent DATE
);
