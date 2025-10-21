function ambilDataUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      data.data.forEach((user) => {
        const { username, email } = user;
        console.log(username, email);
      });
    });
}

export default ambilDataUser;
