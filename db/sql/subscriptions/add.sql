INSERT INTO subscriptions (
  name,
  amount,
  date
) VALUES (
  ${name},
  ${amount},
  ${date}
)
RETURNING id;
