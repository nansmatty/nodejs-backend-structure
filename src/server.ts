function welcome(name: string) {
  console.log('Hello');
  const user = {
    name,
  };

  const u1 = user['name'];

  return u1;
}

welcome('Narayan Maaity');
