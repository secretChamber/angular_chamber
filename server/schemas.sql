DROP DATABASE naberle;

CREATE DATABASE naberle;

USE naberle;

-- default status to reported

CREATE TABLE reported_issues (
  user_id INT UNSIGNED NOT NULL,
  lat VARCHAR(100) NOT NULL,
  lng VARCHAR(100) NOT NULL,
  type ENUM ('Trash', 'Roadwork', 'Traffic Sign'),
  status ENUM ('Reported', 'Resolved'),
	rep_issue_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE users (
  username VARCHAR (20) NOT NULL UNIQUE,
  password VARCHAR (20) NOT NULL,
  user_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);


-- NOTE: we only want to keep track of the votes 
-- and their numbers with the same table:
-- it is custom and safer to only retain one 
-- 'source' of truth for any given data point.
CREATE TABLE votes (
  rep_issue_id INT UNSIGNED NOT NULL,
  user_id INT UNSIGNED NOT NULL,
  vote_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);








