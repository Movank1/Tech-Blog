
import withAuth from './withAuth';

app.get('/protected', withAuth, (req, res) => {
  // This route handler will only be executed if the user is authenticated
  res.send('Protected Route');
});
