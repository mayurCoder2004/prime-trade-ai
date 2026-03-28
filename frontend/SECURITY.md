# Frontend JWT Storage Security

- JWT is currently stored in `localStorage` for simplicity and demo purposes.
- For production, use `httpOnly` cookies for JWT to prevent XSS attacks.
- Never expose sensitive tokens to JavaScript if possible.
- Always validate JWT on the backend for every protected route.
- Consider using libraries like `js-cookie` for better cookie management.
