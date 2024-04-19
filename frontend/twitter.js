document.getElementById('tweet-btn').addEventListener('click', function() {
    var tweetText = document.getElementById('tweet-text').value;
    if (tweetText.trim() !== '') {
        var tweetDiv = document.createElement('div');
        tweetDiv.className = 'tweet';
        var userInfoDiv = document.createElement('div');
        userInfoDiv.className = 'user-info';
        var profileImg = document.createElement('img');
        profileImg.src = 'profile-pic.jpg';
        profileImg.alt = 'Profile Picture';
        var userName = document.createElement('h2');
        userName.textContent = 'User Name';
        userInfoDiv.appendChild(profileImg);
        userInfoDiv.appendChild(userName);
        var tweetContent = document.createElement('p');
        tweetContent.textContent = tweetText;
        tweetDiv.appendChild(userInfoDiv);
        tweetDiv.appendChild(tweetContent);
        document.querySelector('main').appendChild(tweetDiv);
        document.getElementById('tweet-text').value = '';
    } else {
        alert('Please enter some text to tweet!');
    }
});
