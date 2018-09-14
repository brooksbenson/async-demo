function getUser(id, cb) {
  setTimeout(() => {
    cb({ id, username: 'batman' });
  }, 1000);
}

function getRepos(username, cb) {
  setTimeout(() => {
    cb(['repo 1', 'repo 2', 'repo 3']);
  }, 1000);
}

function getCommits(repo, cb) {
  setTimeout(() => {
    cb(['jfkdajf', '38fkdla', '83kdfjko']);
  }, 1000);
}

// callback hell
console.log('callback hell');
getUser(1, user => {
  console.log(user);
  getRepos(user.username, repos => {
    console.log(repos);
    getCommits(repos[0], commits => {
      console.log(commits);
    });
  });
});

// named functions as solution
setTimeout(() => {
  getUser(1, displayUser);

  function displayCommits(commits) {
    console.log(commits);
  }

  function displayRepos(repos) {
    console.log(repos);
    getCommits(repos[0], displayCommits);
  }

  function displayUser(user) {
    console.log(user);
    getRepos(user.username, displayRepos);
  }
}, 4000);

// each func calls one async func
