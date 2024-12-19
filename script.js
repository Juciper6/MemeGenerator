const generateMeme = async () => {
    try {
      const response = await fetch('https://api.imgflip.com/get_memes');
      const data = await response.json();
      
      if (data.success) {

        const memes = data.data.memes;
        const randomIndex = Math.floor(Math.random() * memes.length);
        const randomMeme = memes[randomIndex];

        const memeImg = document.getElementById('meme-img');
        memeImg.src = randomMeme.url;
        memeImg.alt = randomMeme.name;
      } else {
        alert('Failed to load memes. Try again later.');
      }
    } catch (error) {
      console.error('Error fetching memes:', error);
      alert('An error occurred while fetching memes.');
    }
  };

  document.getElementById('generate-btn').addEventListener('click', generateMeme);
  