console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: 'video1' }, { title: 'video2' }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

function displayError(errorMessage) {
  console.error(new Error(errorMessage));
}

function loginUser(email, password, res, rej) {
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
}

// ----------------------------------------------------

function getUserVideos(email, res, rej) {
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
}
// ----------------------------------------------------

function videoDetails(video, res, rej) {
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
}

// ----------------------------------------------------

const getPassedUsersFirstVideoTitle = (user) =>
  loginUser(user, 1234, (user) => {
    console.log("user: ", user)
    getUserVideos(user.userEmail, (videos) => {
      console.log("videos: ", videos)
      videoDetails(videos[0], (title) => {
        console.log("title: ", title)

      },(err) => displayError(err))
    },(err) => displayError(err))
  },(err) => displayError(err))

getPassedUsersFirstVideoTitle("user1@hw.js")
getPassedUsersFirstVideoTitle("user2@hw.js")
getPassedUsersFirstVideoTitle("user3@hw.js")
getPassedUsersFirstVideoTitle("user4@hw.js")
console.log("Finish");
