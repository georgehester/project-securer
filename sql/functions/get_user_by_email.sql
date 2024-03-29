CREATE
OR REPLACE FUNCTION get_user_by_email(TEXT) RETURNS
SETOF users LANGUAGE plpgsql AS $$
BEGIN
RETURN 
QUERY 
SELECT *
FROM users
WHERE email = $1;
END;
$$;