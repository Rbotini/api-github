import { useState } from 'react';
import GithubImage from './github.png';
import styles from './form.module.css';

function Form() {

  const [search, setSearch] = useState('');
  const [userdata, setUserData] = useState();

  const handleSubmit = (e) => {

    e.preventDefault()
    fetch(`https://api.github.com/users/${search}`)
      .then(response => response.json())
      .then(userresponse => setUserData(userresponse));
  }
  console.log(userdata);


  const handleChange = (e) => {
    setSearch(e.target.value)
  }



  return (
    <div>
      <h1 className={styles.titulo}>Github Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <div className='input-group'>
            <input className='form-control' type="text" name="" id=""
              required
              value={search}
              onChange={handleChange}
            />
            <span className='input-group-btn px-2'>

              <button type='submit' className='btn btn-success'>Enviar</button>
            </span>

          </div>

        </div>


      </form>
      <div className='py-3'>
        {!userdata && (

          < img src={GithubImage} alt="" className='responsive rounded-circle'

            height="180px"
          />
        )}
        {userdata && (

          <div>
            < img src={userdata.avatar_url} alt="" className='responsive rounded-circle'

              height="180px"
            />
            <h1 className='pt-5'>
              <a href={userdata.html}>
                {userdata.name}
              </a>
            </h1>
            <h3>{userdata.location}</h3>

          </div>
        )}

      </div>

    </div>
  )
}
export default Form