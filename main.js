document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('.random').addEventListener('click', getRandom)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=dAlLs6Ve3SJEbMfzJxr32dni9cvKFYZClqBS5SbN&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.media_type === 'image'){
          document.querySelector('.photoDay').src = data.hdurl
          document.querySelector('.photoDay').classList.remove('hidden')
          document.querySelector('iframe').classList.add('hidden')
        }else if(data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
          document.querySelector('.photoDay').classList.remove('hidden')
          document.querySelector('iframe').classList.add('hidden')
        }
        document.querySelector('.photoDay').src = data.hdurl
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


function getRandom(){
  // const choice = document.querySelector('input').value
  // console.log(choice);
  const url = 'https://api.nasa.gov/planetary/apod?api_key=dAlLs6Ve3SJEbMfzJxr32dni9cvKFYZClqBS5SbN&count=1'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data[0].media_type=== 'image'){
        document.querySelector('.photoDay').src = data[0].hdurl
        document.querySelector('.photoDay').classList.remove('hidden')
        document.querySelector('iframe').classList.add('hidden')
        } else if(data[0].media_type === 'video'){
          document.querySelector('iframe').src = data[0].url
          document.querySelector('iframe').classList.remove('hidden')
          document.querySelector('.photoDay').classList.add('hidden')
        }
        document.querySelector('h3').innerText = data[0].explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
