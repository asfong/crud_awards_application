-- Display Previously Awards Given for the current login user
SELECT W.id, T.type AS 'awardType', CONCAT(R.fname, ' ', R.lname) AS 'recipient', CONCAT(G.fname, ' ', G.lname) AS 'grantedBy', W.date AS 'dateGiven'
FROM award_winner W
INNER JOIN award_type T ON T.id = W.aid
INNER JOIN user_account R ON R.id = W.rid
INNER JOIN user_account G ON G.id = W.gid
WHERE W.rid = ?; -- ? is the current login user id

-- Display a list of admin account
SELECT CONCAT(first_name, ' ', last_name) AS 'Name', CASE WHEN master = 1 THEN 'Yes' ELSE 'No' END AS 'masterAccount'
FROM admin_account;

-- Display a list of user account
SELECT CONCAT(fname, ' ', lname) AS 'Name'
FROM user_account;

-- Display all awards for report operations
SELECT CONCAT(R.fname, ' ', R.lname) AS 'recipient', T.type AS 'awardType', CONCAT(G.fname, ' ', G.lname) AS 'grantedBy', W.date AS 'dateGiven'
FROM award_winner W
INNER JOIN award_type T ON T.id = W.aid
INNER JOIN user_account R ON R.id = W.rid
INNER JOIN user_account G ON G.id = W.gid;

-- Delete a user
DELETE FROM user_account WHERE id = ?;

-- Delete a non-master admin
DELETE FROM admin_account WHERE master = 0 AND id = ?;

-- Delete an award
DELETE FROM award_winner WHERE id = ?;

-- Edit User Profile
UPDATE user_account SET fname = 'fNameInput', lname = 'lnameInput'
WHERE id = ?;

-- Edit Admin Profile
UPDATE admin_account SET first_name = 'fNameInput', last_name = 'lname', email = 'email', master = '?'

-- Add award
INSERT INTO `award_winner` (rid, gid, aid, date)
VALUES ('?', 'currentUser', '?', '?');

-- Add user
INSERT INTO `user_account` (fname, lname, email, pword, timestamp)
VALUES ('?', '?', '?', '?', NOW());

-- Add Admin
INSERT INTO `admin_account` (first_name, last_name, email, master)
VALUES ('?', '?', '?', '?');

-- Login

-- change password

-- forget password

-- report operations
