// fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   }),
// })
//   .then((res) => res.json())
//   .then((object) => console.log(object))
//   .catch(function (error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });

function submitData(name, email) {
  const userInfo = {
    name: name,
    email: email,
  };
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => res.json())
    .then((data) => (document.body.innerHTML = data.id))
    .catch(function (error) {
      document.body.innerHTML = error.message;
    });
}
submitData();
