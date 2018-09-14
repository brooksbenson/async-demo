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
      // resolve(['repo 1', 'repo 2', 'repo 3']);
      reject(new Error());
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

async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepos(user.username);
    const commits = await getCommits(repos[0]);
  } catch (e) {
    console.log(e);
  }
  console.log(commits);
}

displayCommits();
