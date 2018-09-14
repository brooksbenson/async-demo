function getUser(id) {
  return new Promise((resolve, reject) => {
    console.log('reading user from db...');
    setTimeout(() => {
      resolve({ id, username: 'batman' });
    }, 1000);
  });
}

function getRepos(username) {
  console.log('reading user repositories...');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['repo 1', 'repo 2', 'repo 3']);
    }, 1000);
  });
}

function getCommits(repo) {
  console.log('reading repo commits...');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['jfkdajf', '38fkdla', '83kdfjko']);
    }, 1000);
  });
}

getUser(1)
  .then(user => {
    console.log(user);
    return getRepos(user.username);
  })
  .then(repos => {
    console.log(repos);
    return getCommits(repos[0]);
  })
  .then(commits => {
    console.log(commits);
    console.log('Process complete');
  })
  .catch(e => {
    console.log(e);
    console.log('There was an error with the process');
  });
