---------------------
--- PRIVILEGE SQL ---
---------------------

GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA "public" TO "dev";
ALTER DEFAULT PRIVILEGES IN SCHEMA "public" GRANT USAGE, SELECT ON SEQUENCES TO "dev";


-- PUBLIC
GRANT SELECT, INSERT ON public.posts TO "dev";