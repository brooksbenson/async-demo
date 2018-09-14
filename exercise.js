async function sendTopMovies() {
  try {
    const customer = await getCustomer(1);
    console.log(customer);
    if (customer.isGold) {
      const movies = await getTopMovies();
      console.log(movies);
      await sendEmail(customer.email, movies);
      console.log('process complete');
    }
  } catch (err) {
    console.log(err);
  }
}

sendTopMovies();

function getCustomer(id) {
  console.log('reading customer...');
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: 'Mosh Hamedani',
        isGold: true,
        email: 'email'
      });
    }, 1000);
  });
}

function getTopMovies() {
  console.log('reading top movies...');
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 1000);
  });
}

function sendEmail(email, movies) {
  console.log('sending email...');
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Email sent');
    }, 1000);
  });
}
