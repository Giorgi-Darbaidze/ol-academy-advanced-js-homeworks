console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

function loginUser(email, password, callback, error) {
	return new Promise(() => {
  	setTimeout(
			() => {
				if (Object.keys(usersDB).includes(email)){
					console.log("Now we have the data of user: ", email)
					callback({ userEmail: email })
				}

				else {
					console.log("User Not Found!")
				}
			})
		}, 3000)
}

// ----------------------------------------------------

function getUserVideos(email, callback, error) {
	setTimeout( 
		() => {
		callback(usersDB[email])
	}, 2000)
}

// ----------------------------------------------------

function videoDetails(video, callback, error) {
	setTimeout( 
		() => {
		callback(video.title)
	}, 2000)
}

// ----------------------------------------------------

const getPassedUsersFirstVideoTitle = (user) =>
  loginUser(user, 1234, (user) => {
    console.log("user: ", user)
    getUserVideos(user.userEmail, (videos) => {
      console.log("videos: ", videos)
      videoDetails(videos[0], (title) => {
        console.log("title: ", title)
      })
    })
  })
getPassedUsersFirstVideoTitle("user1@hw.js")
console.log("Finish");