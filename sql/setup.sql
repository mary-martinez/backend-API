-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP table if exists signs;

CREATE table signs (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  word VARCHAR NOT NULL,
  aka VARCHAR,
  url VARCHAR NOT NULL,
  introduced BOOLEAN,
  proficiency INT NOT NULL
);

INSERT INTO signs (word, aka, url, introduced, proficiency) VALUES
('More', NULL, 'https://www.youtube.com/watch?v=nJwr-yWRdNQ', true, 10),
('Finish', 'All done', 'https://www.youtube.com/watch?v=v3ncKPr_8ro', true, 10),
('Milk', NULL, 'https://www.youtube.com/watch?v=quk_XoRtZWk', true, 8),
('Pain', NULL, 'https://www.youtube.com/watch?v=LHYJVE-Xb00', true, 9),
('Potty', NULL, 'https://www.youtube.com/watch?v=bjYh6Ef1OYw', true, 3),
('Eat', 'Food', 'https://www.youtube.com/watch?v=2Dl1Q4vlQKs', false, 0),
('Thank you', 'Thanks', 'https://www.youtube.com/watch?v=2W0BDFUjsG0', false, 0),
('Sleep', 'Nap', 'https://www.youtube.com/watch?v=dXEqaWSEztY', false, 0),
('I love you', NULL, 'https://www.youtube.com/watch?v=OMOatZwMRak', true, 2)
