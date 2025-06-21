fetch('message.json')
  .then(r => r.json())
  .then(data => {
    const msgBox = document.getElementById('message');
    const bg = document.getElementById('bg-overlay');
    msgBox.innerText = data.text;

    const type = data.type;
    let imgUrl;
    if (type==='تحفيز') imgUrl = 'https://source.unsplash.com/1600x900/?sunrise,motivation';
    else if (type==='حب') imgUrl = 'https://source.unsplash.com/1600x900/?hearts,romance';
    else if (type==='دين') imgUrl = 'https://source.unsplash.com/1600x900/?mosque,light';
    else imgUrl = 'https://source.unsplash.com/1600x900/?stars,philosophy';

    bg.style.backgroundImage = `url(${imgUrl})`;
  });
