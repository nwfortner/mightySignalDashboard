CREATE TABLE IF NOT EXISTS subscriptions (
  id  uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  name  text NOT NULL,
  amount  money NOT NULL,
  date  date NOT NULL
);
