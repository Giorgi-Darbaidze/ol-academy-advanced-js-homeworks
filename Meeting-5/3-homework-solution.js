console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: 'video1' }, { title: 'video2' }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

function displayError(errorMessage) {
  console.error(new Error(errorMessage));
}

function loginUser(email, password) {
	new Promise((res, rej) => {
		if (Object.keys(usersDB).includes(email)){
			setTimeout(
				() => {
						console.log("Now we have the data of user: ", email)
						res({ userEmail: email })
					}, 3000)
		}

		else {
			setTimeout(
				() => {
					rej("User Not Found!")
				}, 2000)
		}
	})
}

// ----------------------------------------------------

function getUserVideos(email) {
	new Promise((res, rej) => {
		if (usersDB[email].length) {
			setTimeout(
				() => {
					res(usersDB[email])
			}, 2000)
		} 
		
		else {
			setTimeout(
				() => {
					rej("Videos not found!")
			}, 2000)
		}
	})
}

// ----------------------------------------------------

function videoDetails(video) {
	new Promise((res, rej) => {
		if (video?.title) {
			setTimeout( 
				() => {
					res(video.title)
				}, 2000)
		}

		else {
			setTimeout(
				() => {
					rej("Video Title Not Found!")
				}, 2000)
		}
	})
}

// ----------------------------------------------------

const getPassedUsersFirstVideoTitle = (user) => {
  loginUser(user, 1234)
    .then((user) => getUserVideos(user.userEmail))
    .then((videos) => videoDetails(videos[0]))
    .then((title) => console.log(title))
    .catch((error) => displayError(error));
}

getPassedUsersFirstVideoTitle("user1@hw.js")

console.log("Finish");
